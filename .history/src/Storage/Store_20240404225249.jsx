import { applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import fireReducer from "./Reducer"
import { configureStore } from "@reduxjs/toolkit";


const reduxStore = configureStore({
    reducer: {
        fireAuth: fireReducer,
    },
    composeWithDevTools(applyMiddleware(thunk))
})

export default reduxStore
const reduxStore = configureStore(
    {
        sr
        fireAuth: fireReducer
    },
    )

export default reduxStore