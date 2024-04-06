import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
async function fireAuth(dispatch, getState) {
  try {
    const { data } = await 
    dispatch({ type: "", payload: data });
  } catch (error) {
    dispatch({ type: actionType, payload: error.message });
  }
}
export default fireAuth;
