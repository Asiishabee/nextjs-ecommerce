import { ADD_TO_CART, REMOVE_PRODUCT_FROM_CART, UPDATE_PRODUCT_QUANTITY } from "../../const/const";
import { Product } from "../../models/products";



export const addToCart = (product: Product, quantity = 1) => {
   
  return {
    type: ADD_TO_CART,
    payload: { product, quantity },
  };
};

export const updateProductQuantity = (productId: number, quantity = 1) => {
  return {
    type: UPDATE_PRODUCT_QUANTITY,
    payload: { productId, quantity },
  };
};

export const deleteProduct = (productId: number) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: productId,
});