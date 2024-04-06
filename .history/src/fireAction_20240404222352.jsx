export const fireAuth= userData => async (dispatch, getState) => {
    try {
        dispatch({ type: "fire/in", pa})
        const { data } = await axios.post(URL, userData)
        dispatch({ type: actionType, payload: data })
    } catch (error) {
         dispatch({ type: actionType, payload: error.message })
    }
}