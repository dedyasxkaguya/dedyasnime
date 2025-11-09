import { React, useEffect, useEffectEvent, useState } from 'react'
import Loading
  from '../Loading';
import axios from 'axios';
import Charbox from '../assets/Charbox';
const Character = () => {
  const [load, isLoad] = useState(true)
  const [char0, setChar0] = useState([])
  const [char1, setChar1] = useState([])
  const [char2, setChar2] = useState([])
  const [char3, setChar3] = useState([])
  const [char4, setChar4] = useState([])
  const [anime, setAnime] = useState("suzume")
  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/characters?q=suzume&order_by=favorites&sort=desc")
      .then(res => {
        // if (res.status = 429) {
        //   navigation.reload()
        // }
        const fetched = res.data.data
        setChar0(fetched)
      })
      .catch(err=>{
        console.log(err.status)
        console.log(err)

      })
    setTimeout(() => {
      axios.get("https://api.jikan.moe/v4/characters?q=suzume&page=2&order_by=favorites&sort=desc")
        .then(res => {
          const fetched = res.data.data
          setChar1(fetched)
        })
      document.getElementById("loading2").style.display = 'none'
    }, 1000);
    setTimeout(() => {
      axios.get("https://api.jikan.moe/v4/characters?q=suzume&page=3&order_by=favorites&sort=desc")
        .then(res => {
          const fetched = res.data.data
          setChar2(fetched)
        })

    }, 2000);
    setTimeout(() => {
      axios.get("https://api.jikan.moe/v4/characters?q=suzume&page=4&order_by=favorites&sort=desc")
        .then(res => {
          const fetched = res.data.data
          setChar3(fetched)
        })

    }, 3000);
    setTimeout(() => {
      axios.get("https://api.jikan.moe/v4/characters?q=suzume&page=5&order_by=favorites&sort=desc")
        .then(res => {
          const fetched = res.data.data
          setChar4(fetched)
        })

    }, 4000);
  }, [])
  const handlesearch = (e) => {
    document.getElementById("loading2").style.display = 'flex'
    setTimeout(() => {

      axios.get(`https://api.jikan.moe/v4/characters?q=${e.target.value}&order_by=favorites&sort=desc`)
        .then(res => {
          const fetched = res.data.data
          setChar0(fetched)
          document.getElementById("loading2").style.display = 'none'
          setAnime(e.target.value)
        })
      setTimeout(() => {
        axios.get(`https://api.jikan.moe/v4/characters?q=${e.target.value}&page=2&order_by=favorites&sort=desc`)
          .then(res => {
            const fetched = res.data.data
            setChar1(fetched)
          })
      }, 1000);
      setTimeout(() => {
        axios.get(`https://api.jikan.moe/v4/characters?q=${e.target.value}&page=3&order_by=favorites&sort=desc`)
          .then(res => {
            const fetched = res.data.data
            setChar2(fetched)
          })

      }, 2000);
      setTimeout(() => {
        axios.get(`https://api.jikan.moe/v4/characters?q=${e.target.value}&page=4&order_by=favorites&sort=desc`)
          .then(res => {
            const fetched = res.data.data
            setChar3(fetched)
          })

      }, 3000);
      setTimeout(() => {
        axios.get(`https://api.jikan.moe/v4/characters?q=${e.target.value}&page=5&order_by=favorites&sort=desc`)
          .then(res => {
            const fetched = res.data.data
            setChar4(fetched)
          })

      }, 4000);
    }, 1000);
  }
  if (load) {
    setTimeout(() => {
      isLoad(false)
    }, 500);
    return (
      <Loading />
    )
  }
  return (
    <div className='p-4'>
      <h1>Character</h1>
      <input type="text" className='form-control rounded-2 my-2' placeholder='Search Anime Character' onChange={(e) => handlesearch(e)} />
      <h6 className='my-4'>Showing result of "{anime}"</h6>
      <div id='loading2' className="loadingAnime text-center align-items-center justify-content-center flex-column">
        <span>Fetching the API</span>
        <span>Please Wait A Second....</span>
      </div>
      <div id="charGrid" className='gap-4'>
        {char0.map((c) => {
          return (
            <Charbox images={c.images.jpg.image_url} name={c.name} name_kanji={c.name_kanji} url={c.url} about={c.about} />
          )
        })}
        {char1.map((c) => {
          return (
            <Charbox images={c.images.jpg.image_url} name={c.name} name_kanji={c.name_kanji} url={c.url} about={c.about} />
          )
        })}
        {char2.map((c) => {
          return (
            <Charbox images={c.images.jpg.image_url} name={c.name} name_kanji={c.name_kanji} url={c.url} about={c.about} />
          )
        })}
        {char3.map((c) => {
          return (
            <Charbox images={c.images.jpg.image_url} name={c.name} name_kanji={c.name_kanji} url={c.url} about={c.about} />
          )
        })}
        {char4.map((c) => {
          return (
            <Charbox images={c.images.jpg.image_url} name={c.name} name_kanji={c.name_kanji} url={c.url} about={c.about} />
          )
        })}
      </div>
    </div>
  )
}

export default Character