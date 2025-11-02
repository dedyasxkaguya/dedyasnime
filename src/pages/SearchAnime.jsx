import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LargeAnimeBox from '../assets/LargeAnimeBox'
const SearchAnime = () => {
    const [anime, setAnime] = useState([])

    useEffect(() => {
        setTimeout(() => {
            axios.get("https://api.jikan.moe/v4/anime?q=kaguya")
                .then(res => {
                    console.log(res.data)
                    const fetched = res.data.data
                    setAnime(fetched)
                })
        }, 1000);
    }, [])
    const handleSearch = (e) => {
        document.getElementById("loading1").style.display = 'flex'
        setTimeout(() => {
            axios.get(`https://api.jikan.moe/v4/anime?q=${e.target.value}&sfw=true`)
                .then(res => {
                    console.log(res.data)
                    const fetched = res.data.data
                    setAnime(fetched)
                })
            document.getElementById("loading1").style.display = 'none'
        }, 2000);
    }
    return (
        <div className='p-4'>
            <h2>SearchAnime</h2>
            <input type="text" name="search" id="search" className='form-control rounded-3' placeholder='Enter Animes Name' onChange={(e) => handleSearch(e)} />
            <div id='loading1' className="loadingAnime text-center align-items-center justify-content-center flex-column">
                <span>Fetching the API</span>
                <span>Please Wait A Second....</span>
            </div>
            <div className="grid0 gap-2">
                {
                    anime.map((a) => {
                        return (
                            <LargeAnimeBox title={a.title} image={a.images.webp.large_image_url} engTitle={a.title_english} status={a.aired.string} eps={a.episodes} epsd={a.duration} genres={a.genres} studios={a.studios} source={a.source} demographic={a.demographics} themes={a.themes} score={a.score} members={a.members} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchAnime