import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  it('should render 1 <header>', () => {
    expect(wrapper.find('header').length).toBe(1);
  });
  it('should render 1 <nav>', () => {
    expect(wrapper.find('nav').length).toBe(1);
  });
  it('should render 1 <span>', () => {
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('span').at(0).text()).toBe('React Ticket');
  });
  it('should render 1 <button>', () => {
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').at(0).text()).toBe('Add Ticket');
  });
});