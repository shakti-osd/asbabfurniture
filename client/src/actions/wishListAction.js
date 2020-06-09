import {
    ADD_WISHLIST_ITEM,
    REMOVE_WISHLIST_ITEM
  } from './types';
  
  // Add Item
  export const addWishlistItem = item => ({
      type: ADD_WISHLIST_ITEM,
      payload: item
    });
    
  // Remove Item  
  export const removeWishlistItem = item => ({
  type: REMOVE_WISHLIST_ITEM,
  payload: item
  });