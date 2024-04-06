import { NavLink } from "react-router-dom";
import styles from "./Tabs.module.css";
function Tabs({profile}) {
  return (
    <div className={styles.tabs}>
      <NavLink to={"/profile/ToDoList"}>To-Do List</NavLink>
      <NavLink to="/profile/Create">Create</NavLink>
    </div>
  );
}

export default Tabs;
