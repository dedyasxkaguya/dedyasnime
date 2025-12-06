import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import Navbar from '../Navbar'
import Aos from 'aos'

const LargeAnimeBox = (props) => {
    useEffect(() => {
        Aos.init({})
    }, [])

    const { id } = useParams()

    let favArray = []
    if (localStorage.getItem("favNime")) {
        favArray = JSON.parse(localStorage.getItem("favNime"))
    }
    console.log(favArray.includes(props.data))
    let style0 = {
        "backgroundImage": `url("${props.image}")`,
        "backgroundSize": "cover"
    }
    props.genres.map((g) => {
        if (g.name.toLowerCase().includes("ecchi")) {
            return
        }
    })
    const handleId = () => {
        localStorage.setItem("idNime", props.id)
    }
    const handleFav = (e) => {
        if (!favArray.includes(props.data)) {
            favArray.push(props.data)
            localStorage.setItem("favNime", JSON.stringify(favArray))
            e.target.classList.remove("btn-light")
            e.target.classList.add("btn-dark")
            Swal.fire({
                "icon": "success",
                "title": "Berhasil",
                "text": `${props.title} Telah ditambahkan ke anime favorit`
            })
        } else {
            console.log("Data Sudah Ada Di Memory")
            Swal.fire({
                "icon": "info",
                "title": "Gagal",
                "text": `${props.title} Telah ada dalam list anime favorit`
            })
        }
    }
    return (
        <>
            <div className='d-flex flex-column my-2 shadow rounded-4 p-2 justify-content-center' data-aos="fade-up">
                {/* <img src={props.image} alt="" className='animeImgLarge m-2 rounded-3' /> */}
                <div className="text-center d-flex align-items-end rounded-4 headerAnimeImg" style={style0}>
                    <div className="titleBg p-4 d-flex justify-content-end flex-column">
                        <h5 className='textTitle fw-semibold m-0'>{props.title}</h5>
                        <h6 className='text-secondary fw-light'>{props.engTitle}</h6>
                    </div>
                </div>
                <div className="statusBox text-center p-2 mt-2">
                    {/* Oct 2, 2025 ? |  eps, 23 min */}
                    {props.status} | {props.eps} eps {props.epsd.split(" ")[0]} {props.epsd.split(" ")[1]}
                </div>
                <div className="genresBox d-flex justify-content-center align-items-center p-2 gap-2">
                    {props.genres.map((genre) => {
                        return (
                            <div className="genre bg-secondary-subtle p-2 rounded-pill">
                                {genre.name}
                            </div>
                        )
                    })}
                </div>
                <div className="d-flex">
                    <span className='largeAnimeDesc'>{props.description}<br /><br />
                        <div className='infoNime d-flex flex-column p-2'>
                            <span className='infoSpan'>
                                <b>Studios : </b>
                                {props.studios.map((studio) => {
                                    return (
                                        <span>
                                            {studio.name} ,
                                        </span>
                                    )
                                })}
                            </span>
                            <span className='infoSpan'>
                                <b>Source : </b>
                                {props.source}
                            </span>
                            <span className='infoSpan'>
                                <b>Themes : </b>
                                {props.themes.map((theme) => {
                                    return (
                                        <span>{theme.name} ,</span>
                                    )
                                })}
                            </span>
                            <span className='infoSpan'>
                                <b>Demographic : </b>
                                {props.demographic.map((demo) => {
                                    return (
                                        <span>{demo.name}</span>
                                    )
                                })}
                            </span>
                        </div>
                    </span>
                </div>
                <div className="d-flex pop justify-content-around align-items-center pb-2 rounded-3 my-2">
                    <span>
                        <i className="bi bi-star mx-2"></i>
                        {props.score}
                    </span>
                    <span>
                        <i className="bi bi-person-fill mx-2"></i>
                        {props.members}
                    </span>
                    <button type="button" className='btn btn-light'
                        onClick={(e) => handleFav(e)}>
                        <i className='bi bi-heart mx-2'></i>
                        Add Favorites
                    </button>
                </div>
                <Link to={`/anime/details/${id}`} className='btn btn-outline-primary rounded-3 mt-2' onClick={() => handleId()}>
                    <i className='bi bi-search mx-2'></i>
                    See Details
                </Link>
            </div>
        </>
    )
}

export default LargeAnimeBox