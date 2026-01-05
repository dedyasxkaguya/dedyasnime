import React from 'react'
import { useParams } from 'react-router-dom'

const Smallbox = (props) => {
    const style = {
        'height': '24dvh',
        'width': '16dvh',
        // 'opacity':'.7',
        'backgroundSize': 'cover',
        'backgroundImage': `url(${props.img})`
    }
    const { id } = useParams()
    const handleDetail = () => {
        location.href = `/${id}/anime/details/${props.id}`
    }


    return (
        <div style={style} className='d-flex align-items-end rounded-4' onClick={() => handleDetail()}>
            <div className="textBox w-100 p-2 d-flex align-items-end">
                <span className='boxText text-black text-truncate'>{props.title}</span>
            </div>
        </div>
    )
}

export default Smallbox