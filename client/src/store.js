import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './reducers/index';

const middlewares = [logger,thunk];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);

export default { store, persistStore };
