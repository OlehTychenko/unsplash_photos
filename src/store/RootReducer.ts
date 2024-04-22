import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {photosApi} from '../api/photos';

const rootReducer = combineReducers({
  [photosApi.reducerPath]: photosApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMidleware =>
      getDefaultMidleware().concat(photosApi.middleware),
  });
};
