import {persistReducer, persistStore} from 'redux-persist';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '@stores/rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ROOT_STATE_STORAGE_KEY = 'root';

const persistConfig = {
  key: ROOT_STATE_STORAGE_KEY,
  storage: AsyncStorage,
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// @ts-ignore
const rootStore = createStore(
  persistedReducer,
  // @ts-ignore
  compose(applyMiddleware(thunk)),
);

const persistor = persistStore(rootStore);

export {rootStore, persistor};
