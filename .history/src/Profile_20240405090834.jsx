import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { fireAuthOut } from "./fireAction";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
function Profile() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      try {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            dispatch({ type: "fire/in", payload: user });
          } else {
            dispatch({ type: "fire/in", payload: null });
          }
        });
        dispatch({ type: "fire/error", payload: null });
      } catch (error) {
        dispatch({ type: "fire/error", payload: error.message });
      }
    }, [dispatch]);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
        <button onClick={fireAuthOut}>
          Sign Out
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Profile
