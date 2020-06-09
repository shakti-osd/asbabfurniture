import {
  ADD_ITEM,
  REMOVE_ITEM
} from './types';

// Add Item
export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
  });
  
// Remove Item  
export const removeItem = item => ({
type: REMOVE_ITEM,
payload: item
});