import React from 'react';
import { shallow } from 'enzyme';
import TableHead from '../TableHead';

describe('TableItem', () => {
  let tableHead,
      wrapper;
  beforeEach(() => {
    tableHead = {
      name: 'ID'
    };
    wrapper = shallow(<TableHead key="1" tableHead={tableHead}/>);
  });
  it('should return props as', () => {
    expect(wrapper.instance().props.tableHead).toBe(tableHead);
  });
  it('should render single <th>', () => {
    expect(wrapper.find('th').length).toBe(1);
  });
  it('should return text as', () => {
    expect(wrapper.find('th').at(0).text()).toBe('ID');
  });
});