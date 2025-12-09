import Aos from 'aos'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const Animebox = (props) => {
    const { id } = useParams()
    const [favorites, setFavorites] = useState([])
    const [user, setUser] = useState()
    useEffect(() => {
        Aos.init({
        });
        axios.get(`http://127.0.0.1:8000/api/user/${id}`)
            .then(data => {
                const fetched = data.data
                setUser(fetched)
                axios.get(`http://127.0.0.1:8000/api/user/fav/${fetched.name}`)
                    .then(data => {
                        const fetch = data.data
                        console.log(fetch)
                        setFavorites(fetch)
                    })
            })
    }, [])
    // let favArray = []
    // if (localStorage.getItem("favNime")) {
    //     favArray = JSON.parse(localStorage.getItem("favNime"))
    // } 
    // const handleFav = (e) => {
    //     if (!favArray.includes(props.data)) {
    //         favArray.push(props.data)
    //         localStorage.setItem("favNime", JSON.stringify(favArray))
    //         e.target.classList.remove("btn-light")
    //         e.target.classList.add("btn-dark")
    //         Swal.fire({
    //             "icon":"success",
    //             "title":"Berhasil",
    //             "text":`${props.title} Telah ditambahkan ke anime favorit`
    //         })
    //     } else {
    //         console.log("Data Sudah Ada Di Memory")
    //         Swal.fire({
    //             "icon":"info",
    //             "title":"Gagal",
    //             "text":`${props.title} Telah ada dalam list anime favorit`
    //         })
    //     }
    // }
    const handleFav = () => {
        Swal.fire({
            icon:'info',
            title:'Wait A Second...',
            showConfirmButton:false
        })
        let isFound = false
        favorites.map((f) => {
            if (f.title.toLowerCase().includes(props.title.toLowerCase())) {
                console.log('sudah ada')
                isFound = true

                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: `You already add ${props.title} to your favorites`
                })
                return
            }
            return
        })
        if (!isFound) {

            console.log('sedang mencoba')
            const formData = new FormData()

            formData.append('user_id', id)
            formData.append('user_name', user.name)
            formData.append('image', props.image)
            formData.append('title', props.title)

            axios.post('http://127.0.0.1:8000/api/fav/add', formData)
                .then(data => {
                    const fetched = data.data
                    console.log(fetched)
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: `You succesfully add ${props.title} to your favorites`
                    })
                })
            return
        }

    }
    return (
        <div id={props.mal_id} className='d-flex flex-column my-2 shadow rounded-4 p-1 pt-4 justify-content-between' data-aos='fade-up'>
            <div className="text-center">
                <h5 className='textTitle fw-semibold m-0'>{props.title}</h5>
                <h6 className='text-secondary fw-light'>{props.engTitle}</h6>
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
            <div className="d-flex justify-content-center">
                <img src={props.image} alt="" className='animeImg m-2 rounded-3' />
                <div className='animeDesc d-flex flex-column justify-content-between'>
                    {props.description}
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
                                    <span>{theme.name} , </span>
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
                </div>
            </div>
            <div className="d-flex pop justify-content-around align-items-center py-2 rounded-3">
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
        </div>
    )
}

export default Animebox