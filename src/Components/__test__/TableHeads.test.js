import React from 'react';
import { shallow } from 'enzyme';
import TableHeads from '../TableHeads';

describe('TableItem', () => {
  let tableHeads,
      wrapper,
      tagThead,
      tagTr;
  beforeEach(() => {
    tableHeads = [{
      name: 'ID'
    }, {
      name: 'Category'
    }, {
      name: 'Subject'
    }, {
      name: 'Assignee'
    }, {
      name: 'Priority'
    }, {
      name: 'Status'
    }];
    wrapper = shallow(<TableHeads tableHeads={tableHeads} />);
    tagThead = wrapper.find('thead');
    tagTr = wrapper.find('tr');
  });
  it('should render 1 <thead>', () => {
    expect(tagThead.length).toBe(1);
  });
  it('should render 1 <tr>', () => {
    expect(tagTr.length).toBe(1);
  });
});