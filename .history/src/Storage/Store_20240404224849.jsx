import { applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import {configureStore} from "react-redux"
import thunk from "redux-thunk"
import fireReducer from "./Reducer"

const reduxStore = configureStore(
    {
        
        fireAuth: fireReducer
    },
    composeWithDevTools(applyMiddleware(thunk)))

export default reduxStore