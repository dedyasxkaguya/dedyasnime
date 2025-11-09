import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleAnime from '../assets/SingleAnime'
import List from '../assets/List'
import SingleList from '../assets/SingleList'

const DetailsAnime = () => {
    const [nime, setNime] = useState({})
    const id = localStorage.getItem("idNime")
    const idNime = localStorage.getItem("idNime")
    let genre
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
    const premiered = season + "-" + year
    if (!nime || !nime.title) {
        return <div>Memuat data anime...</div>;
    }
    let typeIcon
    if (nime.type.toLowerCase() == 'tv') {
        typeIcon = <i className='bi bi-tv'></i>
    } else if (nime.type.toLowerCase() == 'movie') {
        typeIcon = <i className='bi bi-film'></i>
    } else {
        typeIcon = <i className='bi bi-cast'></i>
    }
    return (
        <div className=''>
            <img src={nime.images.jpg.large_image_url} alt="" id="heroImg" />
            <div className="mainContainer bg-white">
                <div className="detailTitle rounded-top-4 p-4">
                    <div className="rounded-4 shadow-lg p-2">
                        <div className="d-flex w-75">
                            <img src={image} alt="" className='littleImg rounded-3' />
                            <div className="d-flex flex-column mx-2">
                                <span className='fs-2 fw-bold'>{nime.title}</span>
                                <span className='text-secondary'>
                                    {nime.title_english}
                                </span>
                                <p className='w-50 deksSyn'>{nime.synopsis}</p>
                                <div className="deksGen">
                                    <div className="genreGrid d-flex gap-2 justify-content-start">
                                        {nime.genres?.map((genre) => {
                                            return (
                                                <div className='p-2 bg bg-secondary-subtle rounded-pill text-black'>{genre.name}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="genreGrid d-flex gap-2 mx-auto justify-content-center mb-4">
                    {nime.genres?.map((genre) => {
                        return (
                            <div className='p-2 bg bg-secondary-subtle rounded-pill text-black'>{genre.name}</div>
                        )
                    })}
                </div>
                <div className='p-2'>
                    <SingleList title="Type" string={nime.type} />
                    <SingleList title="Episode"
                        string={nime.episodes ? nime.episodes : "1"} />
                    <SingleList title="Status" string={nime.status} />
                    <SingleList title="Aired" string={nime.aired.string} />
                    <SingleList title="Premiered" string={premiered} />
                    <iframe src={nime.trailer.embed_url} frameborder="0"
                        className='w-100 rounded-3 p-2'></iframe>
                    <List title="Producers" array={nime.producers} />
                    <List title="Licensors" array={nime.licensors} />
                    <List title="Studios" array={nime.studios} />
                    <SingleList title="Source" string={nime.source} />
                    <List title="Theme" array={nime.themes} />
                    <List title="Demographics" array={nime.demographics} />
                    <SingleList title="Duration" string={nime.duration} />
                    <SingleList title="Rating" string={nime.rating} />
                    <div className="synopsis p-2 border border-secondary-subtle rounded-2">
                        <h5>Synopsis</h5>
                        <p className='m-2'>{nime.synopsis}</p>
                    </div>
                    <br />
                    <ul className="list-group">
                        <li className="list-group-item fw-semibold">
                            Opening & Ending
                        </li>
                        {nime.theme?.openings?.map((o) => {
                            const link = `https://youtube.com/results?search_query=${o}`
                            const linkName = o.split('"')[1]
                            const linkArtist = o.split('"')[2]
                            return (
                                <li className='list-group-item'>
                                    <a href={link} target='_blank' className='btn btn-danger m-2'>
                                        <i className='bi bi-youtube me-2'></i>
                                        {linkName}
                                    </a>
                                    <br />
                                    <span className='mx-2 text-secondary'>
                                        {linkName}
                                        {linkArtist}
                                    </span>
                                </li>
                            )
                        })}
                        {nime.theme?.endings?.map((o) => {
                            const link = `https://youtube.com/results?search_query=${o}`
                            const EndingName = o.split('"')[1]
                            const linkArtist = o.split('"')[2]
                            return (
                                <li className='list-group-item'>
                                    <a href={link} target='_blank' className='btn btn-danger m-2'>
                                        <i className='bi bi-youtube me-2'></i>
                                        {EndingName}
                                    </a><br />
                                    <span className='mx-2 text-secondary'>{linkArtist}</span>
                                    <br />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DetailsAnime