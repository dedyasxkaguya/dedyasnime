import { React, useState, useEffect } from 'react'
import Loading from '../Loading.jsx'
import AnimeTable from '../assets/AnimeTable.jsx'
import axios from 'axios'
const Manga = () => {
  const [load, isLoad] = useState(true)
  const [manga, setManga] = useState([])
  const [manga1, setManga1] = useState([])
  useEffect(() => {
    setTimeout(() => {
      axios.get("https://api.jikan.moe/v4/top/manga")
        .then(res => {
          const fetched = res.data.data;
          console.log(fetched);
          setManga(fetched)
        }
        )
    }, 1000);
    setTimeout(() => {
      axios.get("https://api.jikan.moe/v4/top/manga?page=2")
        .then(res => {
          const fetched = res.data.data;
          console.log(fetched);
          setManga1(fetched)
        }
        )
    }, 2000);
  }, [])
  if (load) {
    setTimeout(() => {
      isLoad(false)
    }, 500);
    return (
      <Loading />
    )
  }
  return (
    <div className='p-2 tableBox mx-auto my-4'>
      <div className="border border-black p-2 rounded-4">
        <h6 className='fw-bold m-2'>Top Manga</h6>
        <div className="border border-black-subtle p-2 m-2 rounded-3">
          <h5 className='fw-semibold m-0'>
            Top Manga Series
          </h5>
          <div className="tableContainer">
            <table className='table table-striped mx-auto'>
              <thead>
                <tr className='animeTableHead'>
                  <td scope='col'>No</td>
                  <td scope='col' className='tableTitle'>Title</td>
                  <td scope='col'>Score</td>
                  <td scope='col' className='tableMember'>Member</td>
                </tr>
              </thead>
              <tbody>
                {manga.map((a) => {
                  return (
                    <AnimeTable title={a.title} images={a.images.webp.large_image_url} rank={a.rank} episodes={a.episodes} type={a.type} members={a.members} aired={a.published.string} score={a.score} favorites={a.favorites} />
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
                </tr>
              </thead>
              <tbody>
                {manga1.map((a) => {
                  return (
                    <AnimeTable title={a.title} images={a.images.webp.large_image_url} rank={a.rank} episodes={a.episodes} type={a.type} members={a.members} aired={a.published.string} score={a.score} favorites={a.favorites} />
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

export default Manga