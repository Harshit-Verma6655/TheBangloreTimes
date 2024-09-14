import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import News from './pages/News'
import ParticularNews from './pages/ParticularNews'

function App() {


  return (
    <>
      <div className='w-full sm:flex justify-center'>
        <div className='max-w-[1200px]'>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/news' element={<News />} />
            <Route path='/:category' element={<ParticularNews />} />

          </Routes>
        </div>
      </div>


    </>
  )
}

export default App
