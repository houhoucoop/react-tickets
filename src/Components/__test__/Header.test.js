import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
  let wrapper,
      tagH1;
  beforeEach(() => {
    wrapper = shallow(<Header />);
    tagH1 = wrapper.find('h1');
  });
  it('should render 1 <H1>', () => {
    expect(tagH1.exists()).toBe(true);
    expect(tagH1.length).toBe(1);
  });
  it('should return text as', () => {
    expect(tagH1.text()).toBe('React-Ticket');
  });
});