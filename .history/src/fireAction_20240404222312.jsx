export const actionName= userData => async (dispatch, getState) => {
    try {
        dispatch({ type: actionType, })
        const { data } = await axios.post(URL, userData)
        dispatch({ type: actionType, payload: data })
    } catch (error) {
         dispatch({ type: actionType, payload: error.message })
    }
}