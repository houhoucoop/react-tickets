import { shallow } from 'enzyme';
import React from 'react';
import { MainSection } from '../MainSection';

describe('MainSection', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MainSection />);
  });
  it('should render 1 <table>', () => {
    expect(wrapper.find('table').length).toBe(1);
  });
});
