import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevtools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';

import { /* @TODO */ } from './reducers';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger();
  const devMiddleware = [logger];

  middleware.push(...devMiddleware);
}

const rootReducer = combineReducers({
  // @TODO
});

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const store = createStore(
  persistReducer(rootPersistConfig, rootReducer),
  composeWithDevtools(applyMiddleware(...middleware)),
);

const persistor = persistStore(store);

export { store, persistor };
