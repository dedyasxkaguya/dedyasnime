import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Navbar'
import Anime from './pages/Anime'
import Manga from './pages/Manga'
import Character from './pages/Character'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/anime' element={<Anime />}></Route>
        <Route path='/manga' element={<Manga />}></Route>
        <Route path='/characters' element={<Character />}></Route>
      </Routes>
    </>
  )
}

export default App
