import Link from 'next/link';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Product } from '../../models/products';
import { addToCart } from '../../redux/action/cartAction';

const BaseUrl = "https://fakestoreapi.com"

export const getStaticPaths = async () => {
  const response = await fetch(BaseUrl + "/products");
  const data = await response.json();
  const paths = data.map((path) => { 
    return {
      params: { id: path.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const path = context.params.id;
  const pathData = await fetch(BaseUrl + "/products/" + path);
  const singleProductPath = await pathData.json()
  return {
    props: {
      product: singleProductPath,
    },
  };
};



const ProductDetail = ({ product }:{product:Product}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="m-4 grid grid-flow-col grid-rows-3  gap-4">
        <div className="row-span-3 ">
         
          <img
            className=" w-45 h-45 p-4"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="col-span-2 ">
          
          <div className="bg-gray-200 p-4 ">
            <h1 className="text-5xl font-light">{product.title}</h1>
            <p className=" my-2 text-xl text-red-400">
              Category: {product.category}
            </p>

            <h1 className="text-4xl font-semibold ">Rs. {product.price}</h1>

            <p className="">
              Rating: {product.rating.rate}
            </p>
            <p className="my-2 text-gray-600">{product.description}</p>
            <button
              className="w-1/5 m-4 w-40 rounded bg-red-500 p-2 text-white"
              onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
            {/* <Link href="/cart">
              <button className="m-4 w-40 rounded bg-gray-500 p-2 text-white">
                Go To Cart
              </button>
            </Link> */}
            <div className='flex'>
              <input type="text" className='m-4 p-2'/>
              <button
              className="m-4 w-40 rounded bg-red-500 p-2 text-white">Apply Coupon</button>
            </div>
            <h4 className='p-4 text-2xl'>Related Products</h4>
          </div>
        </div>
      </div>
    </>
  )
};


export default ProductDetail;
