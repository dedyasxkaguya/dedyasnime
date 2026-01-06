import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LargeAnimeBox from '../assets/LargeAnimeBox'
import AnimeSelect from '../assets/AnimeSelect'
import Navbar from '../Navbar'
import Aos from 'aos'
const SearchAnime = () => {
    const [anime, setAnime] = useState([])
    const [anime0, setAnime0] = useState([])
    const [anime1, setAnime1] = useState([])
    const [genre, setGenre] = useState([])
    // const [sgenre, setSgenre] = useState("")
    const sgenre = ''
    const types = [
        {
            "mal_id": "0",
            "name": "tv",
        },
        {
            "mal_id": "1",
            "name": "movie",

        },
        {
            "mal_id": "2",
            "name": "ova",

        },
        {
            "mal_id": "3",
            "name": "special",

        },
        {
            "mal_id": "4",
            "name": "ona",

        },
        {
            "mal_id": "5",
            "name": "music",

        },
        {
            "mal_id": "6",
            "name": "tv_special",

        }
    ]
    // setSgenre('')
    useEffect(() => {
        Aos.init({});
        setTimeout(() => {
            axios.get("https://api.jikan.moe/v4/anime?q=conan&sfw=true&genre=0")
                .then(res => {
                    console.log(res.data)
                    const fetched = res.data.data
                    setAnime(fetched)
                })
        }, 1000);
        setTimeout(() => {
            axios.get("https://api.jikan.moe/v4/genres/anime")
                .then(res => {
                    console.log(res.data)
                    const fetched = res.data.data
                    setGenre(fetched)
                })
        }, 2000);
    }, [])
    const handleSearch = (e) => {
        document.getElementById("loading1").style.display = 'flex'
        setTimeout(() => {
            axios.get(`https://api.jikan.moe/v4/anime?q=${e.target.value}&sfw=true&page=1&genres=${sgenre}`)
                .then(res => {
                    console.log(res.data)
                    const fetched = res.data.data
                    setAnime(fetched)
                })
            document.getElementById("loading1").style.display = 'none'
        }, 2000);
        setTimeout(() => {
            axios.get(`https://api.jikan.moe/v4/anime?q=${e.target.value}&sfw=true&page=2&genres=${sgenre}`)
                .then(res => {
                    console.log(res.data)
                    const fetched = res.data.data
                    setAnime0(fetched)
                })
            document.getElementById("loading1").style.display = 'none'
        }, 3000);
        setTimeout(() => {
            axios.get(`https://api.jikan.moe/v4/anime?q=${e.target.value}&sfw=true&page=3&genres=${sgenre}`)
                .then(res => {
                    console.log(res.data)
                    const fetched = res.data.data
                    setAnime1(fetched)
                })
            document.getElementById("loading1").style.display = 'none'
        }, 4000);
    }
    const handleSearchFilter = (e) => {
        document.getElementById("loading1").style.display = 'flex'
        setTimeout(() => {
            axios.get(`https://api.jikan.moe/v4/anime?genres=${e.target.value}&sfw=true&page=1`)
                .then(res => {
                    console.log(res.data)
                    const fetched = res.data.data
                    setAnime(fetched)
                })
            document.getElementById("loading1").style.display = 'none'
        }, 2000);
        setTimeout(() => {
            axios.get(`https://api.jikan.moe/v4/anime?genres=${e.target.value}&sfw=true&page=2`)
                .then(res => {
                    console.log(res.data)
                    const fetched = res.data.data
                    setAnime0(fetched)
                })
            document.getElementById("loading1").style.display = 'none'
        }, 3000);
        setTimeout(() => {
            axios.get(`https://api.jikan.moe/v4/anime?genres=${e.target.value}&sfw=true&page=3`)
                .then(res => {
                    console.log(res.data)
                    const fetched = res.data.data
                    setAnime1(fetched)
                })
            document.getElementById("loading1").style.display = 'none'
        }, 4000);
    }
    //Type
    const handleSearchType = (e) => {
        document.getElementById("loading1").style.display = 'flex'
        setTimeout(() => {
            axios.get(`https://api.jikan.moe/v4/anime?type=${e.target.value}&sfw=true&page=1`)
                .then(res => {
                    console.log(res.data)
                    const fetched = res.data.data
                    setAnime(fetched)
                })
            document.getElementById("loading1").style.display = 'none'
        }, 2000);
        setTimeout(() => {
            axios.get(`https://api.jikan.moe/v4/anime?type=${e.target.value}&sfw=true&page=2`)
                .then(res => {
                    console.log(res.data)
                    const fetched = res.data.data
                    setAnime0(fetched)
                })
            document.getElementById("loading1").style.display = 'none'
        }, 3000);
        setTimeout(() => {
            axios.get(`https://api.jikan.moe/v4/anime?type=${e.target.value}&sfw=true&page=3`)
                .then(res => {
                    console.log(res.data)
                    const fetched = res.data.data
                    setAnime1(fetched)
                })
            document.getElementById("loading1").style.display = 'none'
        }, 4000);
    }
    //status
    const handleSearchStatus = (e) => {
        document.getElementById("loading1").style.display = 'flex'
        setTimeout(() => {
            axios.get(`https://api.jikan.moe/v4/anime?status=${e.target.value}&sfw=true&page=1`)
                .then(res => {
                    console.log(res.data)
                    const fetched = res.data.data
                    setAnime(fetched)
                })
            document.getElementById("loading1").style.display = 'none'
        }, 2000);
        setTimeout(() => {
            axios.get(`https://api.jikan.moe/v4/anime?status=${e.target.value}&sfw=true&page=2`)
                .then(res => {
                    console.log(res.data)
                    const fetched = res.data.data
                    setAnime0(fetched)
                })
            document.getElementById("loading1").style.display = 'none'
        }, 3000);
        setTimeout(() => {
            axios.get(`https://api.jikan.moe/v4/anime?status=${e.target.value}&sfw=true&page=3`)
                .then(res => {
                    console.log(res.data)
                    const fetched = res.data.data
                    setAnime1(fetched)
                })
            document.getElementById("loading1").style.display = 'none'
        }, 4000);
    }
    return (
        <>
            <Navbar />
            <div className='p-4'>
                <h2>Search Anime</h2>
                <input type="text" name="search" id="search" className='form-control rounded-3' placeholder='Enter Animes Name' onChange={(e) => handleSearch(e)} />
                <div className="d-flex flex-col w-100 justify-content-start gap-2">
                    {/* <AnimeSelect default="Filter" name="Genre" />
                <AnimeSelect default="Genre"  name="Type " array={genre}/> */}
                    <label htmlFor="" className='d-flex gap-2 align-items-center my-2'>
                        Genre
                        <i className='bi bi-sliders2'></i>
                        <select name="" id="" className='form-select' onChange={(e) => handleSearchFilter(e)}>
                            <option value="genre" hidden>
                                None
                            </option>
                            {
                                genre.map((a) => {
                                    if (
                                        a.name.toLowerCase().includes("ecchi") ||
                                        a.name.toLowerCase().includes("erotica") ||
                                        a.name.toLowerCase().includes("hentai")
                                    ) {
                                        return
                                    }
                                    return (
                                        <option key={a.mal_id} value={a.mal_id}>{a.name}</option>
                                    )
                                })
                            }
                        </select>
                    </label>
                    <label htmlFor="" className='d-flex gap-2 align-items-center my-2'>
                        Type
                        <i className='bi bi-sliders2'></i>
                        <select name="" id="" className='form-select' onChange={(e) => handleSearchType(e)}>
                            <option value="genre" hidden>
                                None
                            </option>
                            {
                                types.map((a) => {
                                    return (
                                        <option key={a.mal_id} value={a.name} className='text-uppercase'>{a.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </label>
                    <label htmlFor="" className='d-flex gap-2 align-items-center my-2'>
                        Status
                        <i className='bi bi-sliders2'></i>
                        <select name="" id="" className='form-select' onChange={(e) => handleSearchStatus(e)}>
                            <option value="genre" hidden>
                                None
                            </option>
                            <option value="airing">airing</option>
                            <option value="complete">complete</option>
                            <option value="upcoming">upcoming</option>
                        </select>
                    </label>
                </div>
                <div id='loading1' className="loadingAnime text-center align-items-center justify-content-center flex-column">
                    <span>Fetching the API</span>
                    <span>Please Wait A Second....</span>
                </div>
                <div className="grid0 gap-2">
                    {
                        anime.map((a) => {
                            return (
                                <LargeAnimeBox data={a} title={a.title} image={a.images.jpg.large_image_url} engTitle={a.title_english} status={a.aired.string} eps={a.episodes} epsd={a.duration} genres={a.genres} studios={a.studios} source={a.source} demographic={a.demographics} themes={a.themes} score={a.score} members={a.members} description={a.synopsis} id={a.mal_id} />
                            )
                        })
                    }
                    {
                        anime0.map((a) => {
                            return (
                                <LargeAnimeBox data={a} title={a.title} image={a.images.jpg.large_image_url} engTitle={a.title_english} status={a.aired.string} eps={a.episodes} epsd={a.duration} genres={a.genres} studios={a.studios} source={a.source} demographic={a.demographics} themes={a.themes} score={a.score} members={a.members} description={a.synopsis} id={a.mal_id} />
                            )
                        })
                    }
                    {
                        anime1.map((a) => {
                            return (
                                <LargeAnimeBox data={a} title={a.title} image={a.images.webp.large_image_url} engTitle={a.title_english} status={a.aired.string} eps={a.episodes} epsd={a.duration} genres={a.genres} studios={a.studios} source={a.source} demographic={a.demographics} themes={a.themes} score={a.score} members={a.members} description={a.synopsis} id={a.mal_id} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SearchAnime