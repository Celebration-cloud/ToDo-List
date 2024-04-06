import { useState } from "react";
import styles from "./Create.module.css";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSelector } from "react-redux";
import db from "./Client";
function Create() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    error: null,
  });
  const users = useSelector((store) => store.toDoList.user);
  document.title = `To-Do List || Create List`;
  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addDoc(collection(db, users.displayName), {
        Title: formData.title,
        Description: formData.description,
        Checked: false,
        CreatedAt: serverTimestamp(),
        merge: true,
      });
      formData({ error: null });
      navigate("/profile/toDoList");
    } catch (error) {
      formData({ error: error.message });
    }
  }
  return (
    <div className={styles.createSection}>
      {formData.error && <p>{formData.error}</p>}
      <h4>Create To-Do List</h4>
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

export default Create;
