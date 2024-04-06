import { useState } from "react";
import styles from "./Update.module.css";
import { useParams, useSearchParams } from "react-router-dom";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Update() {
  const [searchparams] = useSearchParams();
  const id = useParams("id");
  const title = searchparams.get("title");
  const description = searchparams.get("description");
  const users = useSelector((store) => store.toDoList.user);
  document.title = `To-Do List || Update`;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: title,
    description: description,
    error: null,
  });
  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await updateDoc(doc(db, users.displayName, id.id), {
        Title: formData.title,
        Description: formData.description,
        Updated: serverTimestamp(),
      });
      setFormData({ error: null });
      navigate("/profile/toDoList");
    } catch (error) {
      setFormData({ error: error.message });
    }
  }
  return (
    <div className={styles.createSection}>
      <h4>Update To-do List</h4>
      {formData.error && (
        <h4
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "10px",
          }}
        >
          {formData.error}
        </h4>
      )}
      <form onSubmit={handleSubmit} className={styles.createForm}>
        <label className={styles.createTitleLabel} htmlFor="title">
          Title*
        </label>
        <br />
        <input
          className={styles.createTitleInput}
          type="text"
          id="title"
          required
          onChange={handleInputChange}
          name="title"
          value={formData.title}
        />
        <br />
        <label className={styles.createDescriptionHead} htmlFor="description">
          Description*
        </label>
        <br />
        <textarea
          className={styles.createDescriptionInput}
          type="text"
          required
          id="description"
          onChange={handleInputChange}
          value={formData.description}
          name="description"
        />
        <br />
        <button onChange={handleInputChange} className={styles.createButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Update;
