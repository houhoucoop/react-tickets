import React from 'react';
import { shallow } from 'enzyme';
import AddForm from '../AddForm';

describe('AddForm', () => {
  let addItems, wrapper;
  beforeEach(() => {
    addItems = [{
      id: 'BJ7jE19MX',
      category: 'Billing',
      subject: 'Billing mistake',
      assignee: 'Erwin',
      priority: 'Normal',
      status: 'Open',
      update: false
    }];
    wrapper = shallow(<AddForm addItems={addItems} />);
  });
  it('should return props as', () => {
    expect(wrapper.instance().props.addItems).toBe(addItems);
  });
  it('form reset should return as', () => {
    expect(wrapper.find('#subject').at(0).text()).toBe('');
    expect(wrapper.find('#category option').at(0).text()).toBe('Billing');
    expect(wrapper.find('#assignee option').at(0).text()).toBe('Erwin');
    expect(wrapper.find('#priority option').at(0).text()).toBe('Normal');
  });
  it('should render 1 <form>', () => {
    expect(wrapper.find('form').length).toBe(1);
  });
  it('should render 3 <select>', () => {
    expect(wrapper.find('select').length).toBe(3);
  });
  it('should render 1 submit button', () => {
    expect(wrapper.find('input[type="submit"]').length).toBe(1);
  });
});