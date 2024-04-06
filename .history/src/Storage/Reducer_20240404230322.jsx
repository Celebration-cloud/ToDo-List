import initialState from "./InitialState"

const fireReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "fire/in": 
            return {...stateuser: payload}
        case "fire/out": 
            return {user: payload}
        case "fire/error": 
            return {error: payload}

        default: return state
    }
}
export default fireReducer