import axios from 'axios';
import * as types from '../constants/ActionTypes';

export const fetchItem = () => (dispatch) => {
  axios.get('/api/items').then((res) => {
    dispatch({
      type: types.FETCH_ITEM,
      payload: res.data,
    });
  }).catch((error) => {
    console.log(error);
  });
};
export const addItem = item => (dispatch) => {
  axios.post('/api/items', item).then((res) => {
    dispatch({
      type: types.FETCH_ITEM,
      payload: res.data,
    });
  }).catch((error) => {
    console.log(error);
  });
};
export const deleteItem = id => (dispatch) => {
  const url = `/api/items/${id}`;
  axios.delete(url).then((res) => {
    dispatch({
      type: types.FETCH_ITEM,
      payload: res.data,
    });
  }).catch((error) => {
    console.log(error);
  });
};

export const saveItem = item => (dispatch) => {
  const url = `/api/items/${item.id}`;
  axios.put(url, item).then((res) => {
    dispatch({
      type: types.FETCH_ITEM,
      payload: res.data,
    });
  }).catch((error) => {
    console.log(error);
  });
};
