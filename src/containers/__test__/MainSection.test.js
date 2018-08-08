import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import MainSection from '../MainSection';

const mockStore = configureStore();

describe('MainSection', () => {
  let wrapper;
  let store;
  beforeEach(() => {
    store = mockStore();
    store.dispatch = jest.fn();
    wrapper = shallow(<MainSection store={store} />);
  });
  it('mapStateToProps return an array', () => {
    const expected = wrapper.props().tableItems;
    expect(wrapper.props().tableItems).toEqual(expect.arrayContaining(expected));
  });
  it('mapStateToProps is definded', () => {
    expect(wrapper.props().actionsConnect).toBeDefined();
  });
});
