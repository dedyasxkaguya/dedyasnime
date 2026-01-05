import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleAnime from '../assets/SingleAnime'
import List from '../assets/List'
import SingleList from '../assets/SingleList'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import Comments from '../assets/Comments'
import Swal from 'sweetalert2'

const DetailsAnime = () => {
    const [nime, setNime] = useState({})
    const [user, setUser] = useState()
    const [isLogin, areLogin] = useState(false)
    const [comments, setComments] = useState([])
    const [favorites, setFavorites] = useState()
    // const [isFav, setFav] = useState(false)
    // const [favBtn, setBtn] = useState('Add Favorites')

    // const id = localStorage.getItem("id_anime")
    // const id_anime = localStorage.getItem("id_anime")

    const { id } = useParams()
    const { id_anime } = useParams()

    // const getComments = async () => {
    //     const fetch = await axios.get(`http://127.0.0.1:8000/api/comment/anime/${nime.mal_id}`)
    //     const res = await fetch.data
    //     setComments(res)
    // }
    console.log(id_anime)
    useEffect(() => {
        setFavorites([])
        setTimeout(() => {
            console.log(id)
            if (id !== 'undefined') {
                axios.get(`http://127.0.0.1:8000/api/user/${id}`)
                    .then(data => {
                        const fetched = data.data
                        console.log(fetched)
                        setUser(fetched)
                        areLogin(true)
                        if (id == 'undefined') {
                            areLogin(false)
                        }
                        axios.get(`https://api.jikan.moe/v4/anime/${id_anime}/full`)
                            .then(data => {
                                const fetched_nime = data.data
                                setNime(fetched_nime.data)
                            })
                        axios.get(`http://127.0.0.1:8000/api/comment/search/${id_anime}`)
                            .then(data => {
                                const fetched = data.data
                                setComments(fetched)
                                console.log(fetched)
                            })
                    })
            } else {
                axios.get(`https://api.jikan.moe/v4/anime/${id_anime}/full`)
                    .then(data => {
                        const fetched_nime = data.data
                        setNime(fetched_nime.data)
                    })
                axios.get(`http://127.0.0.1:8000/api/comment/search/${id_anime}`)
                    .then(data => {
                        const fetched = data.data
                        setComments(fetched)
                        console.log(fetched)
                    })
            }
        }, 1000);
    }, [id, id_anime])

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

    const handleComment = () => {
        const comment = document.getElementById('comment')
        const formData = new FormData()
        formData.append('username', user.name)
        formData.append('anime_id', nime.mal_id)
        formData.append('anime_name', nime.title)
        formData.append('user_id', user.id)
        formData.append('comment', comment.value)
        axios.post('http://127.0.0.1:8000/api/comment/add', formData)
            .then(data => {
                const fetched = data.data
                console.log(fetched)
                if (fetched) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Your comment has been added',
                        showConfirmButton: false,
                        toast: true
                    })
                    comment.value = ''
                    setTimeout(() => {
                        navigation.reload()
                    }, 2000);
                }
            })
    }

    const handleFav = () => {
        let isFound = false
        favorites.map((f) => {
            if (f.title.toLowerCase().includes(nime.title.toLowerCase())) {
                console.log('sudah ada')
                isFound = true
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: `You already add ${nime.title} to your favorites`
                })
                return
            }
            return
        })
        if (!isFound) {

            console.log('sedang mencoba')
            const formData = new FormData()

            formData.append('user_id', user?.id)
            // formData.append('user_name', user.name)
            formData.append('image', image)
            formData.append('title', nime.title)

            axios.post('http://127.0.0.1:8000/api/fav/add', formData)
                .then(data => {
                    const fetched = data.data
                    console.log(fetched)
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: `You succesfully add ${nime.title} to your favorites`,
                        showConfirmButton: false,
                        timer: 2000,
                        toast: true,
                        timerProgressBar: true
                    })
                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: `${nime.title} already in your favorites`,
                        footer: err,
                        showConfirmButton: false,
                        timer: 2000,
                        toast: true,
                        timerProgressBar: true
                    })
                })
            return
        }

    }

    return (
        <>
            <Navbar />
            <div className=''>
                {/* nime id = {nime.mal_id} */}
                <img src={nime.images.jpg.large_image_url} alt="" id="heroImg" />
                <div className="mainContainer bg-white">
                    <div className="detailTitle rounded-top-4 p-4">
                        <div className="rounded-4 shadow-lg p-2">
                            <div className="d-flex gap-2">
                                <img src={image} alt="" className='littleImg rounded-3' />
                                <div className="d-flex flex-column mx-2 gap-2 justify-content-between">
                                    <div className="">
                                        <span className='fs-2 fw-bold'>{nime.title}</span>
                                        <br />
                                        <span className='text-secondary'>
                                            {nime.title_english} <i className='bi bi-star-fill mx-2 text-warning'></i>{nime.score} ({nime.scored_by})
                                        </span>
                                    </div>
                                    <div className="">
                                        <div className="deksGen">
                                            <div className="genreGrid d-flex gap-2 justify-content-start">
                                                {nime.genres?.map((genre) => {
                                                    return (
                                                        <div className='p-2 bg bg-secondary-subtle rounded-pill text-black'>{genre.name}</div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        {/* <button type="button" className='btn btn-outline-primary'
                                            onClick={(e) => handleFav(e)}>
                                            <i className='bi bi-heart mx-2'></i>
                                            Add Favorites
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-4">
                        <div className='p-2 col-md-6'>
                            <button type="button" className='btn btn-outline-primary mb-2 w-100'
                                onClick={(e) => handleFav(e)}>
                                <i className='bi bi-heart mx-2'></i>
                                Add Favorites
                            </button>
                            <SingleList title="Type" string={nime.type} typeIcon={typeIcon} />
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
                        </div>
                        <div className="col-md-6">
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
                            <div className="comments border mt-2 rounded-2 p-2 d-flex flex-column justify-content-between">
                                <label htmlFor="comment" className='cursor-pointer'>Add your comments here</label>
                                <div className="d-flex gap-2 flex-column py-2">
                                    {comments.map(c => {
                                        return (
                                            <div key={c.id} className='d-flex gap-2 border flex-column overflow-hidden rounded'>
                                                <div className="d-flex gap-2 align-items-center p-2 bg-light">
                                                    <img src={`http://127.0.0.1:8000/${c?.user?.image}`} alt="" className='comment-image rounded-circle' />
                                                    <span>@ {c?.username}</span>
                                                </div>
                                                <span className='p-2 px-3'>{c?.comment}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="d-flex">
                                    <input type="text" name='comment' id='comment' placeholder={isLogin ? 'input here' : 'login to access this feature'} className='form-control rounded-start rounded-end-0' disabled={!isLogin} />
                                    <button type="button"
                                        className='btn btn-primary rounded-end rounded-start-0' onClick={() => handleComment()} disabled={!isLogin}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsAnime