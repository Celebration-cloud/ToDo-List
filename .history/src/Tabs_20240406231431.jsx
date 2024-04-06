/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./Tabs.module.css";
function Tabs({profile}) {
  return (
    <div className={styles.tabs}>
      <NavLink to={`/${profile.displayName}/toDoList`}>To-Do List</NavLink>
      <NavLink to={`/${profile.displayName}/C`}>Create</NavLink>
    </div>
  );
}

export default Tabs;
