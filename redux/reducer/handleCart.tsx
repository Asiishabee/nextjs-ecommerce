import { ADD_TO_CART, REMOVE_PRODUCT_FROM_CART, UPDATE_PRODUCT_QUANTITY } from "../../const/const";
import { Action } from "../../models/actionModel";
import { Product } from "../../models/products";


export const handleCart = (state = [], action:Action) =>{

  switch (action.type) {
    case ADD_TO_CART: {
      const { product: productToAdd, quantity = 1 } = action.payload;
      const productsInCart = [...state];

      let isProductInCart = false;
      for (let i = 0; i < productsInCart.length; i++) {
        const product:Product = productsInCart[i];

        if (product.id === productToAdd.id) {
          product.quantity = product.quantity + quantity;
          isProductInCart = true;
          break;
        }
      }

      if (!isProductInCart) {
        productToAdd.quantity = parseInt(quantity);
        productsInCart.push(productToAdd);
      }
      return productsInCart;
    }

    case UPDATE_PRODUCT_QUANTITY: {
      const { productId, quantity: quantityToSet = 1 } = action.payload;
      const productsInCart = [...state];

      for (let i = 0; i < productsInCart.length; i++) {
        const product:Product = productsInCart[i];

        if (product.id === productId) {
          product.quantity = parseInt(quantityToSet);
          break;
        }
      }

      return productsInCart;
    }

    case REMOVE_PRODUCT_FROM_CART: {
      console.log(state, "is delete");
      return state.filter((product) => product.id !== action.payload);
      
    }
   default:
      return state;
  }

}