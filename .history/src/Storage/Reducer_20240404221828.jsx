import initialState from "./InitialState"

const fireReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "fire/in": 
            return {us}
        default: return state
    }
}
export default fireReducer