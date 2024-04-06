import { NavLink } from "react-router-dom";
import styles from "./Tabs.module.css";
function Tabs() {
  return (
    <div className={styles.tabs}>
      <NavLink to="/ToDoList">To-Do List</NavLink>
      <NavLink to="/Create">Create</NavLink>
    </div>
  );
}

export default Tabs;
