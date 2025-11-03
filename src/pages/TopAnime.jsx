import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AnimeTable from '../assets/AnimeTable'

const TopAnime = () => {
  const [anime, setAnime] = useState([])
  const [anime1, setAnime1] = useState([])
  useEffect(() => {
    setTimeout(() => {
      axios.get("https://api.jikan.moe/v4/top/anime")
        .then(res => {
          const fetched = res.data.data;
          console.log(fetched);
          setAnime(fetched)
        }
        )
    }, 1000);
    setTimeout(() => {
      axios.get("https://api.jikan.moe/v4/top/anime?page=2")
        .then(res => {
          const fetched = res.data.data;
          console.log(fetched);
          setAnime1(fetched)
        }
        )
    }, 2000);
  }, [])
  return (
    <div className='p-2'>
      <div className="border border-black p-2 rounded-4">
        <h6 className='fw-bold m-2'>Top Anime</h6>
        <div className="border border-black-subtle p-2 m-2 rounded-3">
          <h5 className='fw-semibold m-0'>
            Top Anime Series
          </h5>
          <div className="tableContainer">
            <table className='table table-striped mx-auto'>
              <thead>
                <tr className='animeTableHead'>
                  <td scope='col'>No</td>
                  <td scope='col' className='tableTitle'>Title</td>
                  <td scope='col'>Score</td>
                  <td scope='col' className='tableMember'>Member</td>
                  <td scope='col' className='tableStatus'>Status</td>
                </tr>
              </thead>
              <tbody>
                {anime.map((a) => {
                  return (
                    <AnimeTable title={a.title} images={a.images.webp.large_image_url} rank={a.rank} episodes={a.episodes} type={a.type} members={a.members} aired={a.aired.string} score={a.score} favorites={a.favorites} />
                  )
                })}
              </tbody>
            </table>
            <table className='table table-striped mx-auto'>
              <thead>
                <tr className='animeTableHead'>
                  <td scope='col'>No</td>
                  <td scope='col' className='tableTitle'>Title</td>
                  <td scope='col'>Score</td>
                  <td scope='col'>Member</td>
                  <td scope='col' className='tableStatus'>Status</td>
                </tr>
              </thead>
              <tbody>
                {anime1.map((a) => {
                  return (
                    <AnimeTable title={a.title} images={a.images.webp.large_image_url} rank={a.rank} episodes={a.episodes} type={a.type} members={a.members} aired={a.aired.string} score={a.score} favorites={a.favorites} />
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopAnime