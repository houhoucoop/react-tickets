import React from 'react';
import { shallow } from 'enzyme';
import { TableItems } from '../TableItems';

describe('TableItem', () => {
  let tableItems;
  let wrapper;
  beforeEach(() => {
    tableItems = [{
      id: 'rkQZyTFGX',
      subject: 'A new rating has been received',
      category: 'Marketing',
      assignee: 'Erwin',
      priority: 'Medium',
      status: 'Open',
      update: false,
    }];
    wrapper = shallow(<TableItems tableItems={tableItems} />);
  });
  it('should return props as', () => {
    expect(wrapper.instance().props.tableItems).toBe(tableItems);
  });
  it('should render 1 <tbody>', () => {
    expect(wrapper.find('tbody').length).toBe(1);
  });
});
