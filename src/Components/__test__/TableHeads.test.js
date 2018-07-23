import React from 'react';
import { shallow } from 'enzyme';
import TableHeads from '../TableHeads';

describe('TableItem', () => {
  let tableHeads;
  let wrapper;
  beforeEach(() => {
    tableHeads = [{
      id: '1',
      name: 'ID',
      class: 'w-12',
    }, {
      id: '2',
      name: 'Subject',
      class: 'w-25',
    }, {
      id: '3',
      name: 'Category',
      class: 'w-12',
    }, {
      id: '4',
      name: 'Assignee',
      class: 'w-10',
    }, {
      id: '5',
      name: 'Priority',
      class: 'w-10',
    }, {
      id: '6',
      name: 'Status',
      class: 'w-12',
    }, {
      id: '7',
      name: 'Action',
      class: 'w-19',
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
