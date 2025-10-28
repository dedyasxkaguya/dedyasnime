import React, { useEffect, useState } from 'react'
import Loading from '../Loading'
import Flex from '../assets/Flex';
import axios from 'axios';
import Smallbox from '../assets/Smallbox';
import Bigbox from '../assets/Bigbox';

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [anime, setAnime] = useState([])
  const [manga, setManga] = useState([])
  const [topAnime, setTopAnime] = useState([])
  const [topManga, setTopManga] = useState([])
  const [season, setSeason] = useState("fall")
  let apiUrl = `https://api.jikan.moe/v4/seasons/2025/${season}`
  let mangaUrl = 'https://api.jikan.moe/v4/manga'
  let topAnimeUrl = 'https://api.jikan.moe/v4/top/anime'
  let topMangaUrl = 'https://api.jikan.moe/v4/top/manga'


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500);
    console.log(loading)
    axios.get(apiUrl)
      //GetAnime
      .then(response => {
        const fetchData = response.data.data
        setAnime(fetchData)
        console.log(anime)
      })
    //GetManga
    setTimeout(() => {

      axios.get(mangaUrl)
        .then(response => {
          const fetchData = response.data.data
          setManga(fetchData)
          console.log(manga)
        })
    }, 500);
    //GetTopAnime
    axios.get(topAnimeUrl)
      .then(response => {
        const fetchData = response.data.data
        setTopAnime(fetchData)
        console.log(topAnime)
      })
    //GetTopManga
    setTimeout(() => {

      axios.get(topMangaUrl)
        .then(response => {
          const fetchData = response.data.data
          setTopManga(fetchData)
          console.log(topAnime)
        })
    }, 500);
  }, [apiUrl, mangaUrl, topAnimeUrl, topManga])
  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <>
      <div className="p-2">
        <h4>Welcome To DedyasNimeList</h4>
        <hr />
        <div className="d-flex justify-content-center gap-2">
          <main>
            <h6 className='title text-capitalize'>{season} 2025 Anime</h6>
            <Flex dir="col" id="flex1">
              {anime.map((a) => {
                return (
                  <Smallbox img={a.images.webp.large_image_url} title={a.title} />
                )
              })}
            </Flex>
            <h6 className='title text-capitalize mt-4'>Manga Mirai</h6>
            <Flex dir="col" id="flex2">
              {manga.map((a) => {
                return (
                  <Smallbox img={a.images.webp.large_image_url} title={a.title} />
                )
              })}
            </Flex>
          </main>
          <section id='sideBar' className='p-2 rounded-1'>
            <Bigbox title="Top Airing Anime" id="bigBox1">
              {
                topAnime.map((a) => {
                  return (
                    <div className="d-flex text-xs">
                      <img src={a.images.webp.large_image_url} alt="" className='topAnimeImg mx-2' />
                      <div className="d-flex flex-column">
                        <span><b>{a.title}</b> Rank #({a.rank})</span>
                        <span>{a.type} {a.episodes} Eps
                          <i className='bi bi-star mx-1'></i>{a.score}</span>
                        <span>{a.members} Members</span>
                      </div>
                    </div>
                  )
                })
              }
            </Bigbox>
            <br />
            <Bigbox title="Top Manga" id="bigBox2">
              {
                topManga.map((a) => {
                  return (
                    <div className="d-flex text-xs">
                      <img src={a.images.webp.large_image_url} alt="" className='topAnimeImg mx-2' />
                      <div className="d-flex">
                        <p>{a.title} #({a.rank})</p>
                      </div>
                    </div>
                  )
                })
              }
            </Bigbox>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home