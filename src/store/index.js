import { createStore } from 'redux';
import { items } from '../fakeData';
import reducer from '../reducers';

const initialState = {
  tableItems: items,
};
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
