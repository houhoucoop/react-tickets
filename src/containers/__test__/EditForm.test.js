import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import EditForm from '../EditForm';

const mockStore = configureStore();

describe('EditForm', () => {
  let wrapper;
  let store;
  beforeEach(() => {
    store = mockStore();
    store.dispatch = jest.fn();
    wrapper = shallow(<EditForm store={store} />);
  });
  it('mapStateToProps is definded', () => {
    expect(wrapper.props().actionsConnect).toBeDefined();
  });
});
