/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ReduxProvider } from 'react-redux';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

import { store, persistor } from './lib/store/configureStore';

const Root = () => (
  <ReduxProvider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </ReduxProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
