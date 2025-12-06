import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../Navbar'

const Profile = () => {
    const [user, setUser] = useState()
    const [comment, setComment] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/user/${id}`)
            .then(data => {
                const fetched = data.data
                setUser(fetched)
            })
        axios.get(`http://127.0.0.1:8000/api/comment/user/${id}`)
            .then(data => {
                const fetched = data.data
                setComment(fetched)
            })
    }, [])
    const imageLink = `http://127.0.0.1:8000/${user?.image}`
    return (
        <>
            <Navbar />
            <div className='d-flex' style={{ minHeight: '90dvh' }}>
                <div className="p-4 sideBar w-25 bg-gray d-flex align-items-center gap-4 flex-column bg-light">
                    <div className='px-4 p-2 bg-white rounded-pill shadow'>
                        <span className='text-secondary'>Profile</span> @{user?.name}
                    </div>
                    <img src={imageLink} alt="" className='big-profile-images rounded-circle' />
                </div>
                <div className="mainBar p-4 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-4">
                        <div className="">
                            <span className='p-2 fw-bold'>
                                Profile Setting
                            </span>
                            <form action="" className='p-4 d-flex gap-2 flex-column w-100'>
                                <label>Username</label>
                                <input type="text" id='name' placeholder={user?.name} className='form-control' />
                                <label>Email</label>
                                <input type="email" id='email' placeholder={user?.email} className='form-control' disabled />
                            </form>
                        </div>
                        <div className="">
                            <span className='p-2 fw-bold'>
                                Top Comments
                            </span>
                            <div className="overflow-scroll overflow-x-hidden commentBox p-2 my-2">
                                {comment.map((c) => {
                                    return (
                                        <div className='p-2 my-2 rounded-2 border'>
                                            <span className='fw-semibold'>{c?.anime_name ? c?.anime_name : c.anime_id }</span>
                                            <br />
                                            <span>{c.comment}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex gap-4">
                        <Link to={'/'} className='btn btn-danger'>Logout</Link>
                        <button type="button" className='btn btn-outline-danger'>Delete account</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile