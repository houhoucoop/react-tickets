import { FETCH_ITEM } from '../constants/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ITEM:
      return {
        tableItems: action.payload,
      };
    default:
      return state;
  }
};
