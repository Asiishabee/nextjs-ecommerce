import Link from "next/link"
import { Product } from "../models/products"

const ProductCard = ({ product }: { product: Product }) => {
    return (
      <>
       
       <div className=" m-4 h-80 w-80 shadow hover:bg-gray-100 cursor-pointer">
                <img
                  className="h-3/5 w-full p-4"
                  src={product.image}
                  alt={product.title}
                />
                <div className="p-4">
                  <h1 className="">{product.title.substring(0, 30)} ...</h1>
                  <p>Rs: {product.price}</p>
                  <Link href={`product/${product.id}`}>
                  <button className="my-2 rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
                    Buy Now
                  </button>
                  </Link>
                 
                </div>
              </div>
      </>
    )
  }

  export default ProductCard
