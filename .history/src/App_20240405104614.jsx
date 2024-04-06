import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Profile from './Profile'
import Login from './Login'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Client'
import { useDispatch, use } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const profile = useSelector((store) => store.fireAuth.user);
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
  
  }, [dispatch])
  

  return (
     <BrowserRouter>
          <Routes>
            <Route path='/Login' element={<Login/>} />
            <Route path='/' element={''}>
              <Route index element={<Navigate replace to=':name'/>}/>
              <Route path=':name' element={<Profile/>} />
            </Route>
            
            <Route path='*' element={<h1>Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
