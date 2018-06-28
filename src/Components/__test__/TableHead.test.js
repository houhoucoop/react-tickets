import React from 'react';
import { shallow } from 'enzyme';
import TableHead from '../TableHead';

describe('TableItem', () => {
  let tableHead,
      wrapper, 
      tagTh;
  beforeEach(() => {
    tableHead = {
      name: 'ID'
    };
    wrapper = shallow(<TableHead key="1" tableHead={tableHead}/>);
    tagTh = wrapper.find('th');
  });
  it('should render single <th>', () => {
    expect(tagTh.length).toBe(1);
  });
  it('should return text as', () => {
    expect(tagTh.at(0).text()).toBe('ID');
  });
});