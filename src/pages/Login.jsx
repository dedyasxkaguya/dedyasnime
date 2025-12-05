import axios from 'axios'
import React from 'react'
import Swal from 'sweetalert2'

const Login = () => {
    const handleLogin = () => {
        // const nameElem = document.getElementById("name")
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
                if(fetched.status){
                    Swal.fire({
                        'icon':'success',
                        'title':'Success',
                        'text':`Succesfully login as ${fetched.data.name} , redirecting in 2 seconds`
                    })
                    setTimeout(() => {
                        location.href=`/${fetched.data.id}`
                    }, 2000);
                }
            })
    }
    return (
        <div>
            <form action="" className='w-75 mx-auto my-4 d-flex gap-2 flex-column p-2 shadow rounded-3'>
                <h1>Login</h1>
                <h6 className='fw-light'>Welcome back to DedyasNime</h6>
                <input type="email" id='email' className='form-control' placeholder='email' />
                <input type="password" id='password' className='form-control' placeholder='password' />
                {/* <input type="file" name="" id='file' className='form-control' /> */}
                <button type="button" className='btn btn-primary' onClick={() => handleLogin()}>Register</button>
            </form>
        </div>
    )
}

export default Login