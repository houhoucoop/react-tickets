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
});
