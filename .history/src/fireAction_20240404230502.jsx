import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./Client";
async function fireAuth(dispatch, getState) {
  try {
    const data = await signInWithPopup(auth)
    dispatch({ type: "fire/in", payload: data });
  } catch (error) {
    dispatch({ type: "fire/error", payload: error.message });
  }
}
export default fireAuth;
