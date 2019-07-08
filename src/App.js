import { ConnectedRouter } from 'connected-react-router';
import { configureStore, getHistory } from 'modules/store';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RoutesComponent from 'view/shared/routes/RoutesComponent';
import { LocaleProvider } from 'antd';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <LocaleProvider>
        <Provider store={store}>
          <ConnectedRouter history={getHistory()}>
            <RoutesComponent />
          </ConnectedRouter>
        </Provider>
      </LocaleProvider>
    );
  }
}
