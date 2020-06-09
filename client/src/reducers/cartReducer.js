import {
    ADD_ITEM,
    REMOVE_ITEM
  } from '../actions/types';



  const INITIAL_STATE = {
    hidden: true,
    cartItems: []
  };
  
  const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {     
      case ADD_ITEM:
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        };
      case REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload)
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;


  export const addItemToCart = (cartItems, cartItemToAdd) => {
     //console.log('cartItems', cartItems)
    // console.log('cartItemToAdd',cartItemToAdd)
     const existingCartItem = cartItems.find(
       cartItem => cartItem.id === cartItemToAdd.id
     );
   
     if (existingCartItem) {
       return cartItems.map(cartItem =>
         cartItem.id === cartItemToAdd.id
           ? { ...cartItem, quantity: cartItem.quantity + 1 }
           : cartItem
       );
     }
   
     return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
   };
   
   export const removeItemFromCart = (cartItems, cartItemToRemove) => {
     const existingCartItem = cartItems.find(
       cartItem => cartItem.id === cartItemToRemove.id
     );
   
     if (existingCartItem.quantity === 1) {
       return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
     }
   
     return cartItems.map(cartItem =>
       cartItem.id === cartItemToRemove.id
         ? { ...cartItem, quantity: cartItem.quantity - 1 }
         : cartItem
     );
   };
   