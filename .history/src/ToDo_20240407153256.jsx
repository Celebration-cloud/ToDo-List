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
    <div>
      <h4>To-Do List</h4>
      <div cla="flex items-center justify-center p-5">
  <div class="rounded-lg bg-gray-200 p-5">
    <div cla="flex">
      <div cla="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
        <svg viewBox="0 0 20 20" aria-hidden="true" cla="pointer-events-none absolute w-5 fill-gray-500 transition">
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
        </svg>
      </div>
      <input type="text" cla="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0" placeholder="" id=""/>
      <input type="button" value="Search" cla="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"/>
    </div>
  </div>
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
