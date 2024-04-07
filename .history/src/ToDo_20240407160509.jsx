import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styles from "./ToDo.module.css";
import { useNavigate } from "react-router-dom";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
  orderBy,
  query,
} from "firebase/firestore";
import db from "./Client";
function ToDo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((store) => store.fireAuth.user);
  const status = useSelector((store) => store.toDoList.status);

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [errorEl, setErrorEl] = useState();
  const [isLoading, setIsLoading] = useState(false)
  document.title = `To-Do List || List`;


  
  // const profile = useSelector((store) => store.toDoList.user);
  // console.log(profile);

  useEffect(() => {
    async function data() {
      try {
        setIsLoading(true)
        onSnapshot(
          query(collection(db, users.displayName), orderBy("Checked", "asc")),
          (snapshot) => {
            const result = snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));

            if (!result) throw new Error(`internet error`);
            setIsLoading(false)
            setData(result);
            setErrorEl(null);
          }
        );
        dispatch({
          type: "todo/data",
          payload: data,
        });
      } catch (error) {
        setErrorEl(error.message);
      }
    }
    data();
  }, [dispatch, users]);

  function handleEdit(items) {
    navigate(
      `/${users.displayName}/ToDoList/${items.id}?title=${items.Title}&description=${items.Description}`
    );
  }
  async function handleDelete(id) {
    try {
      await deleteDoc(doc(db, users.displayName, id));
      // Update the state by removing the deleted item
      const newTodo = data.filter((item) => item.id !== id);
      dispatch({ type: "todo/error", payload: null });
      dispatch({ type: "todo/delete", payload: newTodo });
    } catch (error) {
      dispatch({ type: "todo/error", payload: error.message });
    }
  }
  async function handleCheck(id) {
    try {
      data.map((item) =>
        item.id === id
          ? updateDoc(doc(db, users.displayName, id), {
              Checked: !item.Checked,
            })
          : item
      );
      const checked = data.map((item) =>
        item.id === id ? { ...item, Checked: !item.Checked } : item
      );
      dispatch({ type: "todo/checked", payload: checked });
    } catch (error) {
      console.log(error);
      dispatch({ type: "todo/error", payload: error });
    }
  }

  return (
    <div className={styles.content}>
      <h4>To-Do List</h4>
      <div className={styles.group}>
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input onChange={(e) => setSearch(e.target.value)} className={styles.input} type="search" placeholder="Search" />
      </div>

      <section className={styles.itemSection}>
        {isLoading && <p>Loading...</p>}
        {errorEl && <p>{errorEl}</p>}
        {status !== "loading" && errorEl && data < 1 && <p>No To-Do List</p>}
        {data?.map((item) => (
          <div
            style={
              item.Checked ? { backgroundColor: "aqua", color: "black" } : {}
            }
            className={styles.item}
            key={item.id}
          >
            <div className={styles.inputResult}>
              <input
                checked={item.Checked}
                value={item.Checked}
                onChange={() => handleCheck(item.id)}
                className={styles.itemCheck}
                type="checkbox"
              />
              <ul className={styles.itemsDes} key={item.id}>
                <li>
                  <h3>{item.Title}</h3>
                </li>
                <li>
                  {item.Description.split("\n").map((item, idx) => {
                    return (
                      <span key={idx}>
                        {item}
                        <br />
                      </span>
                    );
                  })}
                </li>
              </ul>
            </div>
            <div className={styles.buttons}>
              <button
                onClick={() => handleEdit(item)}
                className={styles.itemEdit}
              >
                Edit
              </button>
              <button
                className={styles.itemDelete}
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
            <div className={styles.time}>
              <p>
                {`Created at ${new Date(
                  item.CreatedAt.seconds * 1000
                ).toDateString()} ${new Date(
                  item.CreatedAt.seconds * 1000
                ).toTimeString()}`}
              </p>
              <p>
                {item.Updated &&
                  `Updated at ${new Date(
                    item.Updated.seconds * 1000
                  ).toDateString()} ${new Date(
                    item.Updated.seconds * 1000
                  ).toTimeString()}`}
              </p>
            </div>

            {item.isEdited && <p>hello</p>}
          </div>
        ))}
      </section>
    </div>
  );
}

export default ToDo;
