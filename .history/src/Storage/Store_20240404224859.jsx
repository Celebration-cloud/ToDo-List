import { applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import {configureStore} from "react-redux"
import thunk from "redux-thunk"
import fireReducer from "./Reducer"

const reduxStore = configureStore(
    {
        const nameInitialState = {}
        ${export }const name = (state = nameInitialState, action) => {
            switch (action.type) {
                case ACTION_TYPE_1:
                    return state
                case ACTION_TYPE_2:
                    return state
                default:
                    return state
            }
        }
        fireAuth: fireReducer
    },
    composeWithDevTools(applyMiddleware(thunk)))

export default reduxStore