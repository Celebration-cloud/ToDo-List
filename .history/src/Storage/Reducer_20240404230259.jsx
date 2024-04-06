import initialState from "./InitialState"

const fireReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "fire/in": 
            return {user: payload}
        case "fire/out": 
            return {user: payload}
        case "fire/error": 
            return {err: payload}

        default: return state
    }
}
export default fireReducer