
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
