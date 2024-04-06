import initialState from "./InitialState"

const fireReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "fire/in": 
            return {...state, user: payload}
        case "fire/out": 
            return {...state, user: payload}
        case "fire/error": 
            return {...stateerror: payload}

        default: return state
    }
}
export default fireReducer