import { configureStore } from "@reduxjs/toolkit";
import apiMiddleware from "./middlewares/apiMiddleware";
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiMiddleware),
});

export default store;
