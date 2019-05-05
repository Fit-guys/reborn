import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import { user, ui } from './reducers';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger();
  const devMiddleware = [logger];

  middleware.push(...devMiddleware);
}

const rootReducer = combineReducers({
  user,
  ui,
});

const rootPersistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

const persistor = persistStore(store);

export { store, persistor };
