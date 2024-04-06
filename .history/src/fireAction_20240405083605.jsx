import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./Client";
const provider = new GoogleAuthProvider()
import {useNavigate} from 'react-router-dom'
const navigate 
async function fireAuth(dispatch, getState) {
  try {
    const data = await signInWithPopup(auth, provider)
    const user = data.user
    dispatch({ type: "fire/in", payload: user});
    dispatch({ type: "fire/error", payload: null });
  } catch (error) {
    dispatch({ type: "fire/error", payload: error.message });
  }
}
async function fireAuthOut(dispatch, getState) {
    try {
        dispatch({ type: "fire/out", payload: null})
        signOut(auth);
        dispatch({ type: "fire/error", payload: null });
    } catch (error) {
         dispatch({ type: "fire/error", payload: error.message })
    }
}
async function session(dispatch, getState) {
    try {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            dispatch({ type: "fire/in", payload: user });
          } else {
            na
            dispatch({ type: "fire/in", payload: null });
          }
        })
        dispatch({ type: "fire/error", payload: null });
    } catch (error) {
         dispatch({ type: "fire/error", payload: error.message });
    }
}
export default fireAuth;
export {fireAuthOut, session}