import React from 'react';
import { shallow } from 'enzyme';
import TableHeads from '../TableHeads';

describe('TableItem', () => {
  let tableHeads,
      wrapper;
  beforeEach(() => {
    tableHeads = [{
      name: 'ID'
    }, {
      name: 'Subject'
    }, {
      name: 'Category'
    }, {
      name: 'Assignee'
    }, {
      name: 'Priority'
    }, {
      name: 'Status'
    }];
    wrapper = shallow(<TableHeads tableHeads={tableHeads} />);
  });
  it('should return props as', () => {
    expect(wrapper.instance().props.tableHeads).toBe(tableHeads);
  });
  it('should render 1 <thead>', () => {
    expect(wrapper.find('thead').length).toBe(1);
  });
  it('should render 1 <tr>', () => {
    expect(wrapper.find('tr').length).toBe(1);
  });
});