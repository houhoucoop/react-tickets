import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Header from './Components/Header';
import Table from './Components/Table';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should render the Header', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.exists()).toBe(true);
  });
  it('should render the Table', () => {
    const wrapper = shallow(<Table />);
    expect(wrapper.exists()).toBe(true);
  });
});