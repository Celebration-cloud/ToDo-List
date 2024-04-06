import initialState from "./InitialState"

export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "fire/in": 
            return {}
        default: return state
    }
}