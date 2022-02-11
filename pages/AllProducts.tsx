import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import Loading from '../components/Loading'
import ProductCard from '../components/ProductCard'
import { Category } from '../models/category'
import { Product } from '../models/products'


const Products = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(false)
  let componentMounted = true

  useEffect(() => { const getProducts = async () => {
      setLoading(true)
      const response: Response = await fetch('https://fakestoreapi.com/products' )
      const result = await response.json()
      if (componentMounted) {
        setData(result)
        setFilter(result)
        setLoading(false)
      }

      return () => {
        componentMounted = false
      }
    } 
    getProducts()}, [])

  

  const categoryList: Array<Category> = []
  data.forEach((product: Product) => {
    if (!categoryList.includes(product.category)) {
      categoryList.push(product.category)
    }
  })
  const productsByCategoryMap = new Map()
  categoryList.forEach((category) => {
    productsByCategoryMap.set(
      category,
      data.filter((product: Product) => product.category === category)
    )
  })

  const updateProductsByCategory = (categoryName: Category) => {
    const FilterByCategory = productsByCategoryMap.get(categoryName)
    console.log(FilterByCategory)
    setFilter(FilterByCategory)
  }

  const buttonByCategory = categoryList.map((categoryName) => {
    return (
      <button
        className="m-2 bg-gray-200 p-4"
        onClick={() => updateProductsByCategory(categoryName)}
      >
        {categoryName}
      </button>
    )
  })

  const ShowProducts = () => {
    return (
      <>
        <div className="flex flex-wrap">
          {filter.map((product: Product) => {
            return (
            <ProductCard product={product} />
            )
          })}
        </div>
      </>
    )
  }

  return (
    <>
      <div className="buttons  w-full bg-blue-400 flex justify-center ">
      <button className="m-2 bg-gray-200 p-4" onClick={() => setFilter(data)}>All</button>
      {buttonByCategory}
      </div><div>
      <div>{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </>
   
  )
}

export default Products
