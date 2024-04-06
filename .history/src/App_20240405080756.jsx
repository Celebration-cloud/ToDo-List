import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './Profile'
import Login from './Login'

function App() {

  return (
     <BrowserRouter>
          <Routes>
            <Route path='/' element={} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/:name' element={<Profile/>} />
            <Route path='*' element={<h1>Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
