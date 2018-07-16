import * as types from '../constants/ActionTypes';

// action creators
export const addItem = item => ({ type: types.ADD_ITEM, item });
export const deleteItem = id => ({ type: types.DELETE_ITEM, id });
export const saveItem = item => ({ type: types.SAVE_ITEM, item });
