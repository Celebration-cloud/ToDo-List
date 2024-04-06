import initialState from "./InitialState"

export const fireReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "fire/in": 
            return {}
        default: return state
    }
}