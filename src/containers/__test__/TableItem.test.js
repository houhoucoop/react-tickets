import React from 'react';
import { shallow } from 'enzyme';
import TableItem from '../TableItem';
import { deleteItem } from '../../actions';

describe('TableItem', () => {
  let tableItem;
  let wrapper;
  beforeEach(() => {
    tableItem = {
      id: 'rkQZyTFGX',
      subject: 'A new rating has been received',
      category: 'Marketing',
      assignee: 'Erwin',
      priority: 'Medium',
      status: 'Open',
      update: false,
    };
    wrapper = shallow(
      <TableItem
        key="1"
        tableItem={tableItem}
        deleteItem={deleteItem}
      />,
    );
  });
  it('should return props as', () => {
    expect(wrapper.instance().props.tableItem).toBe(tableItem);
  });
  it('should render 1 <tr>', () => {
    expect(wrapper.find('tr').length).toBe(1);
  });
  it('should render 7 <td> inside <tr>', () => {
    expect(wrapper.find('td').length).toBe(7);
  });
});
