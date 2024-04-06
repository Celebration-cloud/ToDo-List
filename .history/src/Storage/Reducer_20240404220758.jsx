import initialState from "./InitialState"

export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "FIRE_": 
            return {}
        default: return state
    }
}