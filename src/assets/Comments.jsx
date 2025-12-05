import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Comments = (props) => {
    const [item, setItem] = useState()
    const [user, setUser] = useState()

    const getUser = async (id) => {
        const fetch = await axios.get(`http://127.0.0.1:8000/api/user/${id}`)
        const res = await fetch.data

        console.log(res)
        setUser(res)


    }
    const getComment = async () => {
        const fetch = await axios.get(`http://127.0.0.1:8000/api/comment/${props.id}`)
        const res = await fetch.data

        console.log(res)
        setItem(res)
        getUser(res.user_id)
    }

    useEffect(() => {
        getComment();
    }, [])

    const imageLink = `http://127.0.0.1:8000/${user?.image}`
    return (
        <div key={props.id} className='d-flex gap-2 p-2 rounded-3 shadow flex-column'>
            <div className="d-flex gap-2">
                <img src={imageLink} alt="" className='comment-image rounded-circle' />
                <span>{item?.username}</span>
            </div>
            <span>{item?.comment}</span>
        </div>
    )
}

export default Comments