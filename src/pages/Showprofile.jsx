import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import Swal from 'sweetalert2'

const Showprofile = () => {
    const [user, setUser] = useState()
    const [comment, setComment] = useState([])
    const { name } = useParams()
    // const [nation, setNation] = useState([])
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        // axios.get('https://restcountries.com/v3.1/independent?status=true&fields=name')
        //     .then(data => {
        //         const fetched = data.data
        //         setNation(fetched)
        //     })
        axios.get(`http://127.0.0.1:8000/api/user/search/${name}`)
            .then(data => {
                const fetched = data.data
                setUser(fetched[0])
                console.log(fetched[0].id)
                console.log(name)
                axios.get(`http://127.0.0.1:8000/api/comment/user/${fetched[0].id}`)
                    .then(data => {
                        const fetched = data.data
                        setComment(fetched)
                    })
                axios.get(`http://127.0.0.1:8000/api/user/fav/${name}`)
                    .then(data => {
                        const fetch = data.data
                        setFavorites(fetch)
                        console.log(fetch)
                    })
            })
    }, [])
    const HandleComment = () => {
        if (comment.length == 0) {
            return (
                `${user?.name} hasn't commented yet `
            )
        }
        return
    }

    const imageLink = `http://127.0.0.1:8000/${user?.image}`
    return (
        <>
            <Navbar />
            <div className='d-flex mobileFlex' style={{ minHeight: '90dvh' }}>
                <div className="p-4 sideBar w-fit bg-gray d-flex align-items-center gap-4 flex-column bg-light">
                    <div className='px-4 p-2 bg-white rounded-pill shadow'>
                        <span className='text-secondary'>Profile</span> @{user?.name}
                    </div>
                    <img src={imageLink} alt="" className='big-profile-images-0 rounded-circle skeleton' id='Showprofile' />
                    <div className="text-center fs-5">
                        <span>
                            @{user?.name}
                        </span>
                        <br />
                        <span className='text-secondary'>
                            {user?.full_name}
                        </span>
                    </div>
                    <label>
                        <div className="d-flex gap-2 ">
                            <img src={user?.flag} alt="" className='flag-image-preview border rounded shadow' />
                            <input type="text" name="" id="" value={user?.nationality} disabled className='form-control' />
                        </div>
                    </label>
                </div>
                <div className="p-4 d-flex flex-column justify-content-between" style={{ width:'100dvw' }}>
                    <div className="d-flex gap-4 flex-column">
                        <div className="">
                            <span className='p-2 fw-bold'>
                                Favorites Anime
                            </span>
                            <div className="favoriteBox favoriteBox0 p-2 my-2">
                                {/* <HandleComment /> */}
                                {favorites.map((c) => {
                                    return (
                                        <>
                                            <div className='rounded-4 d-flex flex-column justify-content-center align-items-center' >
                                                <img src={c.image} alt="" className='rounded-2' style={{ maxWidth: '10dvw' }} />
                                                <span className='fw-semibold text-truncate' style={{ maxWidth: '10dvw' }}>{c.title}</span>
                                                {/* <span>{c.image}</span> */}
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="">
                            <span className='p-2 fw-bold'>
                                Top Comments
                            </span>
                            <div className="overflow-scroll overflow-x-hidden commentBox p-2 my-2">
                                <HandleComment />
                                {comment.map((c) => {
                                    return (
                                        <>
                                            <div className='p-2 my-2 rounded-2 border'>
                                                <span className='fw-semibold'>{c?.anime_name ? c?.anime_name : c.anime_id}</span>
                                                <br />
                                                <span>{c.comment}</span>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showprofile