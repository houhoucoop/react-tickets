import * as types from '../../constants/ActionTypes';
import reducer from '../index';

describe('reducer', () => {
  it('should return [] as initial value', () => {
    const newState = reducer(undefined, {
      type: 'unknown',
    });
    expect(newState).toEqual([]);
  });
  it('should handle FETCH_ITEM', () => {
    const state = {
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
    const action = {
      type: types.FETCH_ITEM,
      payload: [item],
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({
      tableItems: [item],
    });
  });
});
