import {
    ADD_WISHLIST_ITEM,
    REMOVE_WISHLIST_ITEM
  } from '../actions/types';



  const INITIAL_STATE = {
    hidden: true,
    wishlistItems: []
  };
  
  const wishlistReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {     
      case ADD_WISHLIST_ITEM:
        return {
          ...state,
          wishlistItems: addItemToWishlist(state.wishlistItems, action.payload)
        };
      case REMOVE_WISHLIST_ITEM:
        return {
          ...state,
          wishlistItems: removeItemFromWishlist(state.wishlistItems, action.payload)
        };
      default:
        return state;
    }
  };
  
  export default wishlistReducer;


  export const addItemToWishlist = (wishlistItems, wishlistItemToAdd) => {
     //console.log('wishlistItems', wishlistItems)
    // console.log('wishlistItemToAdd',wishlistItemToAdd)
     const existingWishlistItem = wishlistItems.find(
       wishlistItem => wishlistItem.id === wishlistItemToAdd.id
     );

     if (existingWishlistItem) {
       return wishlistItems.map(wishlistItem =>
         wishlistItem.id === wishlistItemToAdd.id
           ? { ...wishlistItem, wishlist: wishlistItem.wishlist + 1 }
           : wishlistItem
       );
     }
   
     return [...wishlistItems, { ...wishlistItemToAdd, wishlist: 1 }];
   };
   
   export const removeItemFromWishlist = (wishlistItems, wishlistItemToRemove) => {
     const existingWishlistItem = wishlistItems.find(
       wishlistItem => wishlistItem.id === wishlistItemToRemove.id
     );
   
     if (existingWishlistItem.wishlist === 1) {
       return wishlistItems.filter(wishlistItem => wishlistItem.id !== wishlistItemToRemove.id);
     }
   
     return wishlistItems.map(wishlistItem =>
       wishlistItem.id === wishlistItemToRemove.id
         ? { ...wishlistItem, wishlist: wishlistItem.wishlist - 1 }
         : wishlistItem
     );
   };
   