import React, { useEffect, useState } from 'react'
import Flex from "../assets/Flex.jsx"
import Loading from '../Loading.jsx'
import axios from 'axios'
import Animebox from '../assets/Animebox.jsx'
import "../pages/Anime.css"
const Anime = () => {
  const [load, isLoad] = useState(true)
  const [seasons, setSeasons] = useState([])
  const [season, setSeason] = useState("fall")
  const [years, setYears] = useState([])
  const [year, setYear] = useState("2025")
  const [animes, setAnimes] = useState([])
  const dataSeasons = [
    "winter",
    "spring",
    "summer",
    "fall"
  ]
  const dataYears = [
    2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025
  ]
  useState(() => {
    setYears(dataYears);
    setSeasons(dataSeasons);
    axios.get(`https://api.jikan.moe/v4/seasons/${year}/${season}`)
      .then(res => {
        let fetched = res.data.data;
        console.log(fetched.length)
        if (fetched && fetched.length > 0) {
          setAnimes(fetched);
        } else {
          console.log("err0");
        }
      })
  }, [season, year]);
  const handleYear = (e) => {
    document.getElementById("loading0").style.display = 'flex'
    setYear(e.target.value)
    setTimeout(() => {
      axios.get(`https://api.jikan.moe/v4/seasons/${e.target.value}/${season}`)
        .then(res => {
          setAnimes(res.data.data)
        })
    }, 1000);
    setTimeout(() => {
      document.getElementById("loading0").style.display = 'none'
    }, 2000);
  }
  const handleSeason = (e) => {
    document.getElementById("loading0").style.display = 'flex'
    setSeason(e.target.value)
    setTimeout(() => {
      axios.get(`https://api.jikan.moe/v4/seasons/${year}/${e.target.value}`)
        .then(res => {
          setAnimes(res.data.data)
        })
    }, 1000);
    setTimeout(() => {
      document.getElementById("loading0").style.display = 'none'
    }, 2000);
  }
  // setYears()
  if (load) {
    setTimeout(() => {
      isLoad(false)
    }, 500);
    return (
      <Loading />
    )
  }
  return (
    <div className="p-2 px-0 animeBody mx-auto">
      <h1>Anime</h1>
      <Flex>
        <select name="searchSeason" id="searchSeason" className='form-select' onChange={(e) => handleSeason(e)}>
          <option value="default" hidden>Select Season</option>
          {seasons.map((s) => {
            return (
              <option value={s} className=''>{s}</option>
            )
          })}
        </select>
        <select name="searchYear" id="searchYear" className='form-select'
          onChange={(e) => handleYear(e)}>
          <option value="default" hidden>Select Year</option>
          {years.map((s) => {
            return (
              <option value={s} className=''>{s}</option>
            )
          })}
        </select>
      </Flex>
      <h5 className='my-4'>Showing anime on {season} {year}</h5>
      <div id='loading0' className="loadingAnime text-center align-items-center justify-content-center flex-column">
        <span>Fetching the API</span>
        <span>Please Wait A Second....</span>
      </div>
      <div className="grid0 gap-2">
        {
          animes.map((a) => {
            return (
              <Animebox data={a} title={a.title} image={a.images.webp.large_image_url} engTitle={a.title_english} status={a.aired.string} eps={a.episodes} epsd={a.duration} genres={a.genres} studios={a.studios} source={a.source} demographic={a.demographics} themes={a.themes} score={a.score} members={a.members} description={a.synopsis} mal_id={a.mal_id}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Anime