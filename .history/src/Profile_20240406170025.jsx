import { useEffect } from "react";
import "./App.css";
import styles from './Homepage.module.css'
import {Outlet, useNavigate} from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./Client";
import Nav from "./Nav";
import Tabs from "./Tabs";
function Profile() {
    // const profile = useSelector((store) => store.fireAuth.user)
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
