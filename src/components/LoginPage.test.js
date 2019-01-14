import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import LoginPage from './LoginPage';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe('<LoginPage />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    )
  });
});