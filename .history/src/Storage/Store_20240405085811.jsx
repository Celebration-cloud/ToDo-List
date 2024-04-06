import { applyMiddleware  } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import fireReducer from "./Reducer"
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        fireAuth: fireReducer,
    },
},composeWithDevTools(applyMiddleware(thunk)))

export default store