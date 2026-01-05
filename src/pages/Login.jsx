import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Login = () => {
    const handleLogin = () => {
        Swal.fire({
            icon: 'info',
            title: 'Wait a second...',
            showConfirmButton: false
        })
        // const nameElem = document.getElementById("name")
        setTimeout(() => {

            const emailElem = document.getElementById("email")
            const passwordElem = document.getElementById("password")

            const formdata = new FormData()
            // formdata.append('name', nameElem.value)
            formdata.append('email', emailElem.value)
            formdata.append('password', passwordElem.value)
            axios.post('http://127.0.0.1:8000/api/user/login', formdata)
                .then(data => {
                    const fetched = data.data
                    console.log(fetched.data)
                    if (fetched.status) {
                        Swal.fire({
                            'icon': 'success',
                            'title': 'Success',
                            'text': `Succesfully login as ${fetched.data.name} , redirecting in 2 seconds`,
                            showConfirmButton:false,
                            toast:true
                        })
                        setTimeout(() => {
                            location.href = `/${fetched.data.slug}`
                        }, 2000);
                    } else {
                        Swal.fire({
                            'icon': 'error',
                            'title': 'Error',
                            'text': `Incorrect email or password`
                        })
                    }
                })
        }, 1000);
    }
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100dvh' }}>
            <form action="" className='w-75 mx-auto d-flex gap-2 flex-column p-2 shadow rounded-3'>
                <h1>Login</h1>
                <h6 className='fw-light'>Welcome back to DedyasNime</h6>
                <input type="email" id='email' className='form-control' placeholder='Email' />
                <input type="password" id='password' className='form-control' placeholder='Password' />
                {/* <input type="file" name="" id='file' className='form-control' /> */}
                <Link to={'/register'} className='text-secondary'>
                    Doesnt have an account ?
                </Link>
                <button type="button" className='btn btn-primary' onClick={() => handleLogin()}>Login</button>
            </form>
        </div>
    )
}

export default Login