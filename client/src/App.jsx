import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Words from './components/Words.jsx'
import './App.css'
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Words />} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
