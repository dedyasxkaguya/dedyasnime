import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Navbar'
import Anime from './pages/Anime'
import TopAnime from './pages/TopAnime'
import Manga from './pages/Manga'
import Character from './pages/Character'
import SearchAnime from './pages/SearchAnime'
import FavoriteAnime from './pages/FavoriteAnime'
import DetailsAnime from './pages/DetailsAnime'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/anime' element={<Anime />}></Route>
        <Route path='/anime/top' element={<TopAnime/>}></Route>
        <Route path='/anime/search' element={<SearchAnime/>}></Route>
        <Route path='/anime/fav' element={<FavoriteAnime/>}></Route>
        <Route path='/anime/details' element={<DetailsAnime/>}></Route>
        <Route path='/manga' element={<Manga />}></Route>
        <Route path='/characters' element={<Character />}></Route>
      </Routes>
    </>
  )
}

export default App
