import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import Swal from 'sweetalert2'

const Profile = () => {
    const [user, setUser] = useState()
    const [comment, setComment] = useState([])
    const { id } = useParams()
    const [nation, setNation] = useState([])

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/independent?status=true&fields=name')
            .then(data => {
                const fetched = data.data
                setNation(fetched)
            })
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
    const HandleComment = () => {
        if (comment.length == 0) {
            return (
                'You hasn`t commented yet '
            )
        }
        return
    }
    const [flag, setFlag] = useState(false)
    const handleNationality = (e) => {
        console.log(`https://restcountries.com/v3.1/name/${e.target.value}?fields=flags`)
        axios.get(`https://restcountries.com/v3.1/name/${e.target.value}?fields=flags`)
            .then(data => {
                const fetched = data.data
                setFlag(fetched[0].flags.png)
            })
    }

    const handleLogout = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure',
            text: 'Do you want to log out from dedyasnime',
            showCancelButton: true,
            cancelButtonText: 'No , i am not',
            confirmButtonColor: '#198754',
            confirmButtonText: 'Yes',
            cancelButtonColor: '#ffc107'
        }).then(res => {
            if (res.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: 'Redirecting to home screen',
                    showConfirmButton: false
                })
                setTimeout(() => {
                    location.href = '/'
                }, 2000);
            }
        })
    }
    const handleProfile = (e) => {
        const profile = document.getElementById('profile')
        const file = e.target.files[0]
        setTimeout(() => {
            profile.src = URL.createObjectURL(file)
        }, 1000);
    }

    const handleUpdate = () => {
        const name = document.getElementById('name')
        if (name.value == '') {
            name.value = user?.name
        }
        const full_name = document.getElementById('full_name')
        const imageElem = document.getElementById('imageElem')
        let image
        console.log(imageElem.files.length==0)
        if(imageElem.files.length==0){
            console.log('blyat')
            image = null
        }else{
            image = imageElem.files[0]
        }
        const nationality = document.getElementById('nationality')
        const formData = new FormData()
        formData.append('id', user?.id)
        formData.append('name', name.value)
        formData.append('full_name', full_name.value)
        formData.append('image', image)
        formData.append('nationality', nationality.value)
        formData.append('flag', flag ? flag : user?.flag)

        axios.post('http://127.0.0.1:8000/api/user/update',formData)
        .then(data=>{
            const fetched = data.data
            console.log(fetched)
            Swal.fire({
                icon:'success',
                title:'Success',
                text:'Succesfully change your profile information , reload in 2 second'
            })
            setTimeout(() => {
                navigation.reload()
            }, 2000);
        })
        // const pObj = []

        // pObj.push(user?.id)
        // pObj.push(name.value)
        // pObj.push(full_name?.id)
        // pObj.push(image)
        // pObj.push(nationality.value)
        // pObj.push(flag)

        // console.log(pObj)
    }

    const imageLink = `http://127.0.0.1:8000/${user?.image}`
    const username = `@${user?.name}`
    return (
        <>
            <Navbar />
            <div className='d-flex mobileFlex' style={{ minHeight: '90dvh' }}>
                <div className="p-4 sideBar w-25 bg-gray d-flex align-items-center gap-4 flex-column bg-light">
                    <div className='px-4 p-2 bg-white rounded-pill shadow'>
                        <span className='text-secondary'>Profile</span> @{user?.name}
                    </div>
                    <img src={imageLink} alt="" className='big-profile-images rounded-circle' id='profile' />
                    <label htmlFor="" className='' style={{ fontSize: '12px' }}>Change your profile picture
                        <input type="file" name="" id="imageElem" className='form-control' accept='image/*' onChange={(e) => handleProfile(e)} />
                    </label>
                    <button type="button" className='btn btn-outline-success' onClick={() => handleUpdate()}>
                        <i className='bi bi-save me-2'></i>
                        Save Changes
                    </button>
                </div>
                <div className="mainBar p-4 d-flex flex-column justify-content-between">
                    <div className="d-flex gap-4">
                        <div className="">
                            <span className='p-2 fw-bold'>
                                Profile Setting
                            </span>
                            <form action="" className='p-4 d-flex gap-2 flex-column w-100'>
                                <label>Username</label>
                                <input type="text" id='name' placeholder={username} className='form-control' />
                                <label>Full Name</label>
                                <input type="text" id='full_name' placeholder={user?.full_name} className='form-control' />
                                <label>Email</label>
                                <input type="email" id='email' placeholder={user?.email} className='form-control' disabled />
                                <label>Nationality</label>
                                <div className="d-flex gap-4">
                                    <img src={flag ? flag : user?.flag} alt="" className='flag-image-preview border rounded shadow' />
                                    <select name="" id="nationality" className='form-control' onChange={(e) => handleNationality(e)}>
                                        <option value={user?.nationality}>{user?.nationality}</option>
                                        {
                                            nation.map((n) => {
                                                return (
                                                    <option value={n.name.official}>{n.name.common}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </form>
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
                    <div className="d-flex gap-4">
                        <button type='button' className='btn btn-danger' onClick={() => handleLogout()}>Logout</button>
                        <button type="button" className='btn btn-outline-danger'>Delete account</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile