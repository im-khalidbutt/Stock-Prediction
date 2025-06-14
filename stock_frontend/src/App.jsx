// import { useState } from 'react'
import './App.css'
import './assets/css/style.css'
import {BrowserRouter , Route ,Routes} from "react-router-dom"

import Main from './components/Main'
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes> 
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
