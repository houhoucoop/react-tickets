import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('should have 1 `className="App"`', () => {
    expect(wrapper.find('.App').length).toBe(1);
  });
  it('should render 1 <table>', () => {
    expect(wrapper.find('table').length).toBe(1);
  });
});
