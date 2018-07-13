import * as types from '../constants/ActionTypes';
import db from '../dbconfig';

const dbRef = db.ref().child('items');

export const fetchItem = () => (dispatch) => {
  dbRef.once('value', (snap) => {
    const items = [];
    snap.forEach((item) => {
      items.push(item.val());
    });
    dispatch({
      type: types.FETCH_ITEM,
      payload: items,
    });
  });
};
export const addItem = item => (dispatch) => {
  dbRef.child(item.id).set(
    item,
  );
};
export const deleteItem = id => (dispatch) => {
  dbRef.child(id).remove();
};

export const saveItem = item => (dispatch) => {
  dbRef.child(item.id).update(item);
};
