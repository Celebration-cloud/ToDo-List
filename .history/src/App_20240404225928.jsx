import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
          <Routes>
            <Route path='/' element={<Logi} />
            <Route path='/:name' element={<Profile/>} />
            <Route path='*' element={<h1>Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
