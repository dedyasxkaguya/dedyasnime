// import { useState } from 'react'
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
import Register from './pages/register'
import Login from './pages/Login'
import Userhome from './pages/Userhomw'
import Profile from './pages/Profile'
import Showprofile from './pages/Showprofile'

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<Userhome />}></Route>
        <Route path='/anime' element={<Anime />}></Route>
        <Route path='/anime/top' element={<TopAnime />}></Route>
        <Route path='/anime/search' element={<SearchAnime />}></Route>
        <Route path='/anime/fav' element={<FavoriteAnime />}></Route>
        <Route path='/anime/details' element={<DetailsAnime />}></Route>
        <Route path='/manga' element={<Manga />}></Route>
        <Route path='/characters' element={<Character />}></Route>
        <Route path='/anime/:id' element={<Anime />}></Route>
        <Route path='/anime/top/:id' element={<TopAnime />}></Route>
        <Route path='/anime/search/:id' element={<SearchAnime />}></Route>
        <Route path='/anime/fav/:id' element={<FavoriteAnime />}></Route>
        <Route path='/anime/details/:id_user' element={<DetailsAnime />}></Route>
        <Route path='/manga/:id' element={<Manga />}></Route>
        <Route path='/characters/:id' element={<Character />}></Route>

        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/profile/:id' element={<Profile/>}></Route>
        <Route path='/user/:name' element={<Showprofile/>}></Route>
      </Routes>
    </>
  )
}

export default App
