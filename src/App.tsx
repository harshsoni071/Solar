import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import React from 'react'
import GetHelp from './components/My/GetHelp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' bg-[#eee] mx-auto w-[400px] h-[100vh]' >
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Layout/>}/>
          <Route path='/getHelp' element={<GetHelp/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
