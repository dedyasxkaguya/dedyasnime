import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleAnime from '../assets/SingleAnime'

const DetailsAnime = () => {
    const [nime, setNime] = useState({})
    const id = localStorage.getItem("idNime")
    let genre
    const idNime = localStorage.getItem("idNime")
    console.log(idNime)
    useEffect(() => {
        setTimeout(() => {

            const fetchData = async () => {
                const res = await axios.get(`https://api.jikan.moe/v4/anime/${idNime}/full`)
                const data = await res.data
                setNime(data.data)
                genre = await nime.genres
                if (!res) {
                    console.log("error woy")
                }
            }
            if (id) {
                fetchData()
            }
        }, 1000);
    }, [idNime])

    const getSeason = (num) => {
        if (num > 1 && num <= 3) {
            return "Winter"
        } else if (num > 3 && num <= 6) {
            return "Spring"

        } else if (num > 6 && num <= 9) {
            return "Summer"

        } else if (num > 9 && num <= 12) {
            return "Fall"

        }
    }
    // const season = getSeason(nime.aired.prop.from.month)
    const month = nime.aired?.prop?.from?.month // Menggunakan Optional Chaining
    const year = nime.aired?.prop?.from?.year // Menggunakan Optional Chaining
    const season = month ? getSeason(month) : null
    const image = nime.images?.webp?.large_image_url
    const opening_link = ''
    if (!nime || !nime.title) {
        return <div>Memuat data anime...</div>;
    }
    return (
        <div className=''>
            <img src={nime.images.jpg.large_image_url} alt="" id="heroImg" />
            <div className="mainContainer bg-white">
                <div className="detailTitle rounded-top-4 p-4">
                    <p className='fs-2 fw-bold'>{nime.title}</p>
                    <p className='text-secondary'>
                        {nime.title_english} | {nime.title_japanese}</p>
                    <p>{nime.score}</p>
                    <p>{nime.rank}</p>
                    <p>{nime.popularity}</p>
                    <p>{nime.member}</p>
                <p>{season} {year}</p>
                </div>
                <img src={image} alt="" />
                {nime.genres?.map((genre) => {
                    return (
                        <p>{genre.name}</p>
                    )
                })}
                <div className='p-2'>
                    <p>Type: {nime.type}</p>
                    <p>Episodes: {nime.episode ? nime.episode : "null"}</p>
                    <p>Status: {nime.status}</p>
                    <p>Aired: {nime.aired.string}</p>
                    <p>Premiered: {season} {year}</p>
                    <p>Broadcast: {nime.broadcast.day ? nime.broadcast.day : "- "} at  {nime.broadcast.time ? nime.broadcast.time : "- "}
                        ( {nime.broadcast.timezone ? nime.broadcast.timezone : "- "} )

                    </p>
                    <p>Producers:
                        {nime.producers?.map((p) => {
                            return (
                                <span key={p.mal_id}>{p.name}</span>
                            )
                        })}
                    </p>
                    <p>Licensors:
                        {
                            nime.licensors.map((p) => {
                                return (
                                    <span key={p.mal_id}>{p.name}</span>
                                )
                            })
                        }
                    </p>
                    <p>Studios:
                        {
                            nime.studios.map((s) => {
                                return (
                                    <span key={s.mal_id}>{s.name} , </span>
                                )
                            })
                        }
                    </p>
                    <p>Source: {nime.source}</p>
                    <p>Theme:
                        {
                            nime.themes?.map((t) => {
                                return (
                                    <span key={t.mal_id}>{t.name}</span>
                                )
                            })
                        }
                    </p>
                    <p>Demographic:
                        {
                            nime.demographics?.map((d) => {
                                return (
                                    <span key={d.mal_id}>{d.name}</span>
                                )
                            })
                        }
                    </p>
                    <p>Duration: {nime.duration}.</p>
                    <p>Rating: {nime.rating}</p>
                    <p>Synopsis : {nime.synopsis}</p>
                    <iframe src={nime.trailer.embed_url} frameborder="0"></iframe>
                    <br />
                    {nime.theme?.openings?.map((o) => {
                        const link = `https://youtube.com/results?search_query=${o}`
                        return (
                            <>
                                <a href={link}>Opening</a><br />
                            </>
                        )
                    })}
                    <br />
                    {nime.theme?.endings?.map((o) => {
                        const link = `https://youtube.com/results?search_query=${o}`
                        return (
                            <>
                                <a href={link} target='_blank'>Ending</a>
                                <br />
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DetailsAnime