/* eslint-disable react/prop-types */
import reactLogo from "../../../assets/react.svg";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
// import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Nav({ nav }) {
  // const dispatch = useDispatch()
  const navigate = useNavigate();
  const profile = useSelector((store) => store.toDoList.user);
  const [errorEl, setErrorEl] = useState(null);
  
  
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.head} to="/">
        <img src={reactLogo} className="logo" alt="React logo" />
        <h3>To-Do List</h3>
      </NavLink>
      {errorEl && <p>{errorEl}</p>}
      {nav !== "login" && profile && (
        <div className={styles.details}>
          <p>{profile.displayName}</p>
          <button onClick={logout}>Sign Out</button>
        </div>
      )}
    </nav>
  );
}

export default Nav;
