// action types
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SAVE_ITEM = 'SAVE_ITEM';

// action creators
export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    item,
  };
}
export function deleteItem(id) {
  return {
    type: 'DELETE_ITEM',
    id,
  };
}
export function saveItem(item) {
  return {
    type: 'SAVE_ITEM',
    item,
  };
}
