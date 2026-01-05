import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
// import pp from '../../public/ppig.jpg'
const Register = () => {
    const [previewUrl, setUrl] = useState('../../public/blank.jpg')
    const [previewImage, setImage] = useState('https://placehold.co/600x400?text=?')
    const [nation, setNation] = useState([])

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/independent?status=true&fields=name')
            .then(data => {
                const fetched = data.data
                setNation(fetched)
            })
    }, [])

    const handleUsername = (e) => {
        const warn = document.getElementById('userwarn')
        if(e.target.value.includes(' ')){
            warn.style.display='inline'
        }else{
            warn.style.display='none'
        }
    }
    const handlePassword = (e) => {
        const warn = document.getElementById('passwordwarn')
        if(e.target.value.length<6){
            warn.style.display='inline'
        }else{
            warn.style.display='none'
        }
    }

    const handleLogin = () => {
        Swal.fire({
            icon: 'info',
            title: 'Wait a second...',
            showConfirmButton: false
        })
        setTimeout(() => {
            const nameElem = document.getElementById("name")
            const emailElem = document.getElementById("email")
            const fileElem = document.getElementById("file")
            const passwordElem = document.getElementById("password")
            const selectedNation = document.getElementById('selectedNation')
            if (nameElem.value && emailElem.value && passwordElem.value && previewImage && selectedNation.value) {
                const formdata = new FormData()
                if (nameElem.value.includes(' ')) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Warning',
                        text: 'Dont include space at your username'
                    })
                    return
                }
                formdata.append('name', nameElem.value)
                formdata.append('email', emailElem.value)
                formdata.append('password', passwordElem.value)
                formdata.append('image', fileElem.files[0])
                formdata.append('flag', previewImage)
                formdata.append('nationality', selectedNation.value)
                try {
                    axios.post('http://127.0.0.1:8000/api/user/register', formdata)
                        .then(data => {
                            const fetched = data.data
                            console.log(data)
                            Swal.fire({
                                icon: 'success',
                                title: 'Success',
                                text: `Successfully registered as ${fetched.data.name} ,\n redirecting in 2 seconds`,
                                showConfirmButton: false
                            })
                            setTimeout(() => {
                                location.href = `/${fetched.data.id}`
                            }, 2000);
                        })
                        .catch(err=>{
                            console.log(err)
                            Swal.fire({
                                icon:'error',
                                title:'Error',
                                text:'There is a mistake when registering your account',
                                footer:err.response.data.message
                            })
                        })
                } catch (e) {
                    Swal.fire({
                        icon: 'error',
                        title: 'error',
                        text: e,
                        showConfirmButton: false
                    })
                }
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Warning',
                    text: 'You need to fill all of the form'
                })
                return
            }
        }, 1000);
    }
    const handleImage = (e) => {
        const imgUrl = URL.createObjectURL(e.target.files[0])
        setUrl(imgUrl)
    }
    const handleNationality = (e) => {
        setImage('https://placehold.co/600x400?text=...')
        setTimeout(() => {
            console.log(`https://restcountries.com/v3.1/name/${e.target.value}?fields=flags`)
            axios.get(`https://restcountries.com/v3.1/name/${e.target.value}?fields=flags`)
                .then(data => {
                    const fetched = data.data
                    setImage(fetched[0].flags.png)
                })
        }, 1000);
    }
    return (
        <div className='d-flex align-items-center' style={{ height: '100dvh' }}>
            <form action="" className='w-75 mx-auto my-4 d-flex gap-2 flex-column p-2 shadow rounded-3'>
                <div className="d-flex align-items-center gap-4">
                    <h1>Register</h1>
                    <img src={previewUrl} alt="" className='preview-image rounded-circle border shadow' />
                </div>
                <h6 className='fw-light'>Fill out some form to continue</h6>
                <input type="text" id='name' className='form-control' placeholder='Username' onChange={(e)=>handleUsername(e)}/>
                <span style={{ fontSize:'8px' , display:'none'}} className='text-danger' id='userwarn'>Username cant have space</span>
                <input type="email" id='email' className='form-control' placeholder='Email' />
                <input type="password" id='password' className='form-control' placeholder='Password' onChange={(e)=>handlePassword(e)}/>
                <span style={{ fontSize:'8px' , display:'none'}} className='text-danger' id='passwordwarn'>Password must have 6 characters</span>
                {/* <span className='p-2 box-border bg-light border rounded-2' style={{ boxSizing: 'border-box' }}>Choose profile picture</span> */}
                <label htmlFor="">Profile Picture <span className='text-secondary'>(optional)</span>
                    <input type="file" name="" id='file' className='form-control' accept='image/*' onChange={(e) => handleImage(e)} />
                </label>
                <div className="d-flex align-items-center gap-4">
                    <img src={previewImage} alt="" className='flag-image-preview border rounded shadow' />
                    <select name="" id="selectedNation" className='form-select' onChange={(e) => handleNationality(e)}>
                        <option value="default">Select a nationality</option>
                        {
                            nation.map((n) => {
                                return (
                                    <option value={n.name.official}>{n.name.common}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <Link to={'/login'} className='text-secondary'>
                    Already have an account ?
                </Link>
                <button type="button" className='btn btn-primary' onClick={() => handleLogin()}>Register</button>
            </form>
        </div>
    )
}

export default Register