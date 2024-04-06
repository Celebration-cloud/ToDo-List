import initialState from "./InitialState"

export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "": 
            return {}
        default: return state
    }
}