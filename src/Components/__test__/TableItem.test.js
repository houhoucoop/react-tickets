import React from 'react';
import { shallow } from 'enzyme';
import TableItem from '../TableItem';

describe('TableItem', () => {
  let tableItem, 
      wrapper, 
      tagTr, 
      tagTd;
  beforeEach(() => {
    tableItem = {
      id: '1',
      category: 'Marketing',
      subject: 'A new rating has been received',
      assignee: 'Erwin',
      priority: 'Medium',
      status: 'Open'
    };
    wrapper = shallow(<TableItem key={1} tableItem={tableItem}/>);
    tagTr = wrapper.find('tr');
    tagTd = wrapper.find('td');
  });
  it('should render 1 <tr>', () => {
    expect(tagTr.length).toBe(1);
  });
  it('should render 6 <td> inside <tr>', () => {
    expect(tagTd.length).toBe(6);
  });
  it('should return text as', () => {
    expect(tagTd.at(0).text()).toBe('1');
    expect(tagTd.at(1).text()).toBe('Marketing');
    expect(tagTd.at(2).text()).toBe('A new rating has been received');
    expect(tagTd.at(3).text()).toBe('Erwin');
    expect(tagTd.at(4).text()).toBe('Medium');
    expect(tagTd.at(5).text()).toBe('Open');
  });
});