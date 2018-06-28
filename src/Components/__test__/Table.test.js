import React from 'react';
import { shallow, mount } from 'enzyme';
import Table from '../Table';

describe('Table', () => {
  let wrapper, table, tableClass;
  beforeEach(() => {
    wrapper = mount(<Table />);
    table = wrapper.find('table')
    tableClass = wrapper.find('.App-table')
  });
  it('renders without crashing', () => {
    wrapper;
  });
  it('should render 1 <table>', () => {
    expect(table.length).toBe(1);
  });
  it('should have `className="App-table"`', () => {
    expect(tableClass.length).toBe(1);
  });
});