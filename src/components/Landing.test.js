import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import Landing from './Landing';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Landing />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <Landing />
      </Provider>
    )
  });
});