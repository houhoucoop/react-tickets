import React from 'react';
import { mount } from 'enzyme';
import { TableItem } from '../TableItem';

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
    wrapper = mount(
      <TableItem
        key="1"
        tableItem={tableItem}
      />,
    );
  });
  it('state isEditing', () => {
    expect(wrapper.state().isEditing).toBe(false);
    wrapper.find('.edit-btn').simulate('click');
    expect(wrapper.state().isEditing).toBe(true);
  });
  it('show edit form when click edit button', () => {
    wrapper.setState({ isEditing: true });
    expect(wrapper.find('select').length).toBe(4);
    expect(wrapper.find('textarea').length).toBe(1);
    expect(wrapper.find('.save-btn').length).toBe(1);
    expect(wrapper.find('.cancel-btn').length).toBe(1);
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
