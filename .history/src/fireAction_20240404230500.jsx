import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
async function fireAuth(dispatch, getState) {
  try {
    const data = await signInWithPopup(au)
    dispatch({ type: "fire/in", payload: data });
  } catch (error) {
    dispatch({ type: "fire/error", payload: error.message });
  }
}
export default fireAuth;
