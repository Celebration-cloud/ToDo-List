import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./Client";
const provider = new GoogleAuthProvider()
async function fireAuth(dispatch, getState) {
  try {
    const data = await signInWithPopup(auth, provider)
    const user = data.user
    dispatch({ type: "fire/in", payload: user});
  } catch (error) {
    dispatch({ type: "fire/error", payload: error.message });
  }
}
export const fireAuthOut = userData => async (dispatch, getState) => {
    try {
        dispatch({ type: actionType, })
        const { data } = await axios.post(URL, userData)
        dispatch({ type: actionType, payload: data })
    } catch (error) {
         dispatch({ type: actionType, payload: error.message })
    }
}
export default fireAuth;
