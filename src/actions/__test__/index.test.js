import * as types from '../../constants/ActionTypes';
import * as actions from '../index';

describe('actions', () => {
  it('should create ADD_ITEM action', () => {
    const item = {
      id: 'Hyq2-P3GQ',
      subject: 'A new rating has been received',
      category: 'Marketing',
      assignee: 'Erwin',
      priority: 'Medium',
      status: 'Open',
      update: false,
    };
    expect(actions.addItem(item)).toEqual({
      type: types.ADD_ITEM,
      item,
    });
  });
  it('should create DELETE_ITEM action', () => {
    expect(actions.deleteItem('Hyq2-P3GQ')).toEqual({
      type: types.DELETE_ITEM,
      id: 'Hyq2-P3GQ',
    });
  });
  it('should create SAVE_ITEM action', () => {
    const item = {
      id: 'Hyq2-P3GQ',
      subject: 'A new rating has been received',
      category: 'Marketing',
      assignee: 'Erwin',
      priority: 'Medium',
      status: 'Open',
      update: true,
    };
    expect(actions.saveItem(item)).toEqual({
      type: types.SAVE_ITEM,
      item,
    });
  });
});
