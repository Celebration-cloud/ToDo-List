const fireAuth = () => async (dispatch, getState) => {
    try {
        dispatch({ type: , })
        const { data } = await axios.post(URL, userData)
        dispatch({ type: actionType, payload: data })
    } catch (error) {
         dispatch({ type: actionType, payload: error.message })
    }
}
