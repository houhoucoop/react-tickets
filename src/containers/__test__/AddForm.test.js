import React from 'react';
import { shallow } from 'enzyme';
import AddForm from '../AddForm';

describe('AddForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddForm />);
  });
  it('form reset should return as', () => {
    expect(wrapper.find('#subject').at(0).text()).toBe('');
    expect(wrapper.find('#category option').at(0).text()).toBe('Billing');
    expect(wrapper.find('#assignee option').at(0).text()).toBe('Erwin');
    expect(wrapper.find('#priority option').at(0).text()).toBe('Normal');
  });
  it('should render 1 add <button>', () => {
    expect(wrapper.find('button').at(0).text()).toBe('Add Ticket');
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
