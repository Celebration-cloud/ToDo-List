import initialState from "./InitialState"

export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "FIRE_A": 
            return {}
        default: return state
    }
}