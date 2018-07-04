import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import Header from './Components/Header';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should have 1 `className="App"`', () => {
    expect(wrapper.find('.App').length).toBe(1);
  });
  it('should render 1 <table>', () => {
    expect(wrapper.find('table').length).toBe(1);
  });
});
