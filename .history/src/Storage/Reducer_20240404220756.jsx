import initialState from "./InitialState"

export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "FIRE": 
            return {}
        default: return state
    }
}