import initialState from "./InitialState"

export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "fire/": 
            return {}
        default: return state
    }
}