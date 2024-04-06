import initialState from "./InitialState"

export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "fire/in": 
            return {}
        default: return state
    }
}