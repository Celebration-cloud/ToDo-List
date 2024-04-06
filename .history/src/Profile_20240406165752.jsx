import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {useNavigate} from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./Client";
import Nav from "./Nav";
function Profile() {
    const [count, setCount] = useState(0);
    const profile = useSelector((store) => store.fireAuth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            dispatch({ type: "fire/in", payload: user });
          } else {
            navigate('/Login')
            dispatch({ type: "fire/in", payload: null });
          }
        });
    }, [dispatch, navigate]);
    // async function fireAuthOut() {
    //   try {
    //     signOut(auth);
    //     navigate("/Login")
    //     dispatch({ type: "fire/error", payload: null });
    //   } catch (error) {
    //     dispatch({ type: "fire/error", payload: error.message });
    //   }
    // }
  return (
    <>
      <Nav nav="profile" />
      <section className={styles.navigating}>
        <Tabs />
        <Outlet />
      </section>
    </>
  );
}

export default Profile
