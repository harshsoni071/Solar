import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Layout/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
