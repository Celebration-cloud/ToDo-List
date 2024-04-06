import { applyMiddleware, compose } from "redux"
import {thunk} from "redux-thunk"
import fireReducer from "./Reducer"
import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./TodoReducer";

const store = configureStore(
  {
    reducer: {
      fireAuth: fireReducer,
      toDoList: toDoReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  },
  compose(applyMiddleware(thunk))
);

export default store