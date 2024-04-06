import { applyMiddleware, compose } from "redux"
import {thunk} from "redux-thunk"
import fireReducer from "./Reducer"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore(
  {
    reducer: {
      fireAuth: fireReducer,
      toD
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  },
  compose(applyMiddleware(thunk))
);

export default store