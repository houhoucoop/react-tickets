import * as actions from '../index';

describe('actions', () => {
  it('should create an action to add a item', () => {
    const item = {
      id: 'dddd',
      subject: 'A new rating has been received',
      category: 'Marketing',
      assignee: 'Erwin',
      priority: 'Medium',
      status: 'Open',
      update: false,
    };
    const expectedAction = {
      type: actions.ADD_ITEM,
      item,
    };
    expect(actions.addItem(item)).toEqual(expectedAction);
  });
  it('should create an action to delete a item', () => {
    const id = 'SkMB2fHEmm';
    const expectedAction = {
      type: actions.DELETE_ITEM,
      id,
    };
    expect(actions.deleteItem(id)).toEqual(expectedAction);
  });
  it('should create an action to save a item', () => {
    const item = {
      id: 'dddd',
      subject: 'A new rating has been received',
      category: 'Marketing',
      assignee: 'Erwin',
      priority: 'Medium',
      status: 'Open',
      update: true,
    };
    const expectedAction = {
      type: actions.SAVE_ITEM,
      item,
    };
    expect(actions.saveItem(item)).toEqual(expectedAction);
  });
});
