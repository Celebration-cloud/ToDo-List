import initialState from "./InitialState"

export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "FIRE_AUTH": 
            return {}
        default: return state
    }
}