import React, { useEffect, useState } from 'react'
import Loading from '../Loading'
import Flex from '../assets/Flex';
import axios from 'axios';
import Smallbox from '../assets/Smallbox';
import Bigbox from '../assets/Bigbox';


//data
// import fall_anime from '../data/fall_anime_data.json'
import News from '../assets/News';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';


const Userhome = () => {
    const [loading, setLoading] = useState(true)
    const [anime, setAnime] = useState([])
    const [manga, setManga] = useState([])
    const [topAnime, setTopAnime] = useState([])
    const [topManga, setTopManga] = useState([])
    const [user, setUser] = useState()
    // const [season, setSeason] = useState("fall")

    let { id } = useParams()

    let apiUrl = `https://api.jikan.moe/v4/seasons/2025/fall`
    let mangaUrl = 'https://api.jikan.moe/v4/manga'
    let topAnimeUrl = 'https://api.jikan.moe/v4/top/anime'
    let topMangaUrl = 'https://api.jikan.moe/v4/top/manga'
    let userUrl = `http://127.0.0.1:8000/api/user/${id}`

    useEffect(() => {
        // AOS.init()
        setTimeout(() => {
            setLoading(false)
        }, 500);

        //user

        axios.get(userUrl)
            .then(data => {
                const fetched = data.data
                console.log(fetched)
                setUser(fetched)
            })

        //anime

        try {
            axios.get(apiUrl)
                //GetAnime
                .then(response => {
                    const fetchData = response.data.data
                    setAnime(fetchData)
                })
        } catch {
            console.log("Gagal rek")
        }
        //GetManga
        setTimeout(() => {
            try {
                axios.get(mangaUrl)
                    .then(response => {
                        const fetchData = response.data.data
                        setManga(fetchData)
                    })
            } catch {
                console.log("Gagal rek")
            }
        }, 1000);
        //GetTopAnime
        setTimeout(() => {
            axios.get(topAnimeUrl)
                .then(response => {
                    const fetchData = response.data.data
                    setTopAnime(fetchData)
                })
        }, 2000);
        //GetTopManga
        setTimeout(() => {

            axios.get(topMangaUrl)
                .then(response => {
                    const fetchData = response.data.data
                    setTopManga(fetchData)
                })
        }, 3000);
    }, [])
    // }, [apiUrl, mangaUrl, topAnimeUrl, topManga])
    if (loading) {
        return (
            <Loading />
        )
    }
    // const handleLeftFlex = (e) => {
    //   let scroll = e.target.nextElementSibling.style.right
    //   console.log(scroll)
    //   scroll = scroll.split("%")
    //   let nextScroll = Number(scroll[0]) + 80
    //   if (nextScroll <= 400) {
    //     console.log(nextScroll)
    //     e.target.nextElementSibling.style.right = `${nextScroll}%`
    //     console.log(e.target.nextElementSibling.style.right)
    //   }
    // }
    return (
        <>
            <Navbar/>
            <div className="p-2">
                <h4 className='p-4'>Welcome To DedyasNimeList {user?.name}</h4>
                <hr />
                <div className="d-flex justify-content-center gap-2">
                    <main className='p-4 border border-secondary-subtle m-2 rounded-4' data-aos="fade-up">
                        <h4 className='title text-capitalize'>Fall 2025 Anime</h4>
                        {/* <Flex dir="col"> */}
                        {/* <i onClick={(e) => handleLeftFlex(e)}
                className="bi arrow bi-chevron-right p-2 rounded-circle bg-white text-center"></i> */}
                        <Flex dir="col" id="flex1">
                            {anime.map((a) => {
                                return (
                                    <Smallbox img={a.images.webp.large_image_url} title={a.title} />
                                )
                            })}
                        </Flex>
                        {/* <i className="bi arrow bi-chevron-left p-2 rounded-circle bg-white text-center"></i> */}
                        {/* </Flex> */}
                        <h4 className='title text-capitalize mt-4'>Manga Mirai</h4>
                        <Flex dir="col" id="flex2">
                            {manga.map((a) => {
                                return (
                                    <Smallbox img={a.images.webp.large_image_url} title={a.title} />
                                )
                            })}
                        </Flex>
                        <br />
                        <News />
                    </main>
                    <section id='sideBar' className='p-3 rounded-4 m-2' data-aos="fade-up" data-aos-delay="100">
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
                    </section>
                </div>
            </div>
        </>
    )
}

export default Userhome