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

export default fireAuth;
