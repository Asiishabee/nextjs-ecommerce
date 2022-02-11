import {  RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Product } from "../models/products";
import { updateProductQuantity, deleteProduct } from "../redux/action/cartAction";



  const Cart = () => {
      const calculateProductsTotal = (products: Array<Product>) => products.reduce((total, product) => total + product.price * product.quantity,0 );
      const cartProducts = useSelector((state:RootStateOrAny) => state.handleCart);
      const dispatch = useDispatch();
 return (

    <div className="">
         {cartProducts.length > 0 && (
           <div className="flex m-4 justify-around border-b-2">
<h1 className="font-bold text-2xl w-1/5">Item</h1>
<h1 className="font-bold text-2xl w-1/5"> Name</h1>
<h1 className="font-bold text-2xl w-1/5">Price</h1>
<h1 className="font-bold text-2xl w-1/5">Qty</h1>
<h1 className="font-bold text-2xl w-1/5">Total</h1>
<h1 className="font-bold text-2xl w-1/5">Remove</h1>
           </div>
            )}
          {cartProducts.map((product:Product)=>{
            return(
              <div className="flex m-4 my-10 justify-around border-b-2 p-2 ">
              <div className="w-1/5"><img className="w-10 " src={product.image} alt={product.title} /></div>
              <h1 className=" text-2xl text w-1/5">{product.title.substring(0, 25)}... </h1>
              <h1 className=" text-2xl w-1/5">{product.price} </h1>
              <input type="number" defaultValue={product.quantity}
                              min="1"
                              step="1" className="border w-1/5" onChange={(e) => {
                                dispatch(
                                  updateProductQuantity(
                                    product.id,
                                    e.target.value
                                  )
                                );
                              }}/>
              <h1 className=" text-2xl w-1/5">Rs: 
                              {product.quantity * product.price} </h1>
                              <button className="text-red-500 w-1/5 text-left" onClick={dispatch.bind(null, deleteProduct(product.id))}>remove</button>
              </div>
              
              
            )

          })}
           
           <div className="w-2/5 m-4 bg-gray-100 rounded p-4">
             <h1 className="my-4 font-bold text-2xl">Order  Details</h1>
             <div className="flex justify-between border-b-2 my-4">
               <h4>Sub Total:</h4>
               <h4 className="font-bold"> RS: {calculateProductsTotal(cartProducts)}</h4>
             </div>

             <div className="flex justify-between border-b-2 my-4">
               <h4>Shipping</h4>
               <h4 className="font-bold"> Free</h4>
             </div>
             <div className="flex justify-between border-b-2 my-4">
               <h4> Total:</h4>
               <h4 className="font-bold"> RS: {calculateProductsTotal(cartProducts)}</h4>
             </div>
           </div>
         
          {cartProducts.length === 0 && <p className="p-4">Cart is empty<button className="bg-gray-200 p-2 mx-4">Go To Shop</button></p>}
        </div>
  );
}

export default Cart

