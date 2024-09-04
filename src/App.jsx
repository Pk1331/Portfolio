import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './LandingPage'
const App = () => {
  return (
    <Routes>
        <Route path="/" Component={LandingPage}/>
    </Routes>
  )
}

export default App