import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import {configureStore} from "react-redux"
import thunk from "redux-thunk"



const reduxStore = configureStore(
    fir,
    {},
    composeWithDevTools(applyMiddleware(thunk)))

export default reduxStore