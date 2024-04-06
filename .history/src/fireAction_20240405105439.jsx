import { signOut } from "firebase/auth";
import { auth } from "./Client";
impo

async function fireAuthOut(dispatch, getState) {
    try {
        dispatch({ type: "fire/out", payload: null})
        signOut(auth);
        dispatch({ type: "fire/error", payload: null });
        window.location.replace('/Login')
    } catch (error) {
         dispatch({ type: "fire/error", payload: error.message })
    }
}

export {fireAuthOut}