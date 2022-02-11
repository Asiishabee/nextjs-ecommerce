import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Category } from '../models/category'
import { Product } from '../models/products'
import Loading from './Loading'
import ProductCard from './ProductCard'

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
        className="m-2 hover:bg-white  p-4"
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
      <button className="m-2 p-4 hover:bg-white" onClick={() => setFilter(data)}>All</button>
          {buttonByCategory}
        
        </div>

        <div>
      
    

      <section className="w-full h-screen">
      <img src="https://images.unsplash.com/photo-1508776781619-132e6a483b60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="object-cover w-full h-full" alt="colorful leafs" />
    </section>
      
    <div>{loading ? <Loading /> : <ShowProducts />}</div>
  </div>
    </>
   
  )
}

export default Products
