import * as types from '../../actions';
import reducer from '../index';


let state = {
  tableItems: [],
};
const item = {
  id: 'SkczUqEm7',
  subject: 'Billed twice',
  category: 'Billing',
  assignee: 'Jessica',
  priority: 'High',
  status: 'Pending',
  update: false,
};

describe('reducer', () => {
  it('should return [] as initial value', () => {
    const newState = reducer(undefined, {
      type: 'unknown',
    });
    expect(newState).toEqual([]);
  });
  it('should handle ADD_ITEM', () => {
    const action = {
      type: types.ADD_ITEM,
      item,
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({
      tableItems: [item],
    });
  });
  it('should handle DELETE_ITEM', () => {
    state = {
      tableItems: [
        {
          id: 'SkczUqEm7',
          subject: 'A new rating has been received',
          category: 'Marketing',
          assignee: 'Erwin',
          priority: 'Medium',
          status: 'Open',
          update: false,
        },
      ],
    };
    const action = {
      type: types.DELETE_ITEM,
      id: 'SkczUqEm7',
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({
      tableItems: [],
    });
  });
  it('should handle SAVE_ITEM', () => {
    state = {
      tableItems: [
        {
          id: 'SkczUqEm7',
          subject: 'A new rating has been received',
          category: 'Marketing',
          assignee: 'Erwin',
          priority: 'Medium',
          status: 'Open',
          update: false,
        },
      ],
    };
    const action = {
      type: types.SAVE_ITEM,
      item,
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({
      tableItems: [item],
    });
  });
});
