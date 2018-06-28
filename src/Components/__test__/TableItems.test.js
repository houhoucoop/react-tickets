import React from 'react';
import { shallow } from 'enzyme';
import TableItems from '../TableItems';

describe('TableItem', () => {
  let tableItems, wrapper, tagTbody;
  beforeEach(() => {
    tableItems = [{
      id: '1',
      category: 'Marketing',
      subject: 'A new rating has been received',
      assignee: 'Erwin',
      priority: 'Medium',
      status: 'Open'
    }];
    wrapper = shallow(<TableItems tableItems={tableItems} />);
    tagTbody = wrapper.find('tbody');
  });
  it('should render 1 <tbody>', () => {
    expect(tagTbody.length).toBe(1);
  });
});