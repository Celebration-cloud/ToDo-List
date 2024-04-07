/* eslint-disable react/prop-types */
import reactLogo from "./assets/react.svg";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Client";
function Nav({ nav }) {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const profile = useSelector((store) => store.fireAuth.user);
  const error = useSelector((store) => store.fireAuth.error);
  const [errorEl] = useState(error);
  
  async function fireAuthOut() {
    try {
      signOut(auth);
      navigate("/Login");
      dispatch({ type: "fire/error", payload: null });
    } catch (error) {
      dispatch({ type: "fire/error", payload: error.message });
    }
  }

  return (
    <nav className={styles.nav}>
      <NavLink className={styles.head} to="/">
        <img src={reactLogo} style={{width: ""}} className="logo" alt="React logo" />
        <h3>To-Do List</h3>
      </NavLink>
      {errorEl && <p>{errorEl}</p>}
      {nav !== "login" && profile && (
        <div className={styles.details}>
          <p>{profile.displayName}</p>
          <button onClick={fireAuthOut}>Sign Out</button>
        </div>
      )}
    </nav>
  );
}

export default Nav;
