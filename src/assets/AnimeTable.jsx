import Aos from 'aos'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const AnimeTable = (props) => {

    useEffect(()=>{
        Aos.init()
    },[])

    const { id } = useParams()

    const handleDetail = () => {
        // localStorage.setItem('idNime',props.id)
        location.href=`/${id ? id : ''}/anime/details/${props.id}`
    }    

    return (
        <tr data-aos="fade-up">
            <td className='text-center fw-bold'>
                <div className='my-4'>
                    {props.rank}
                </div>
            </td>
            <td className='tableTitle'>
                <div className='d-flex gap-2 ' onClick={()=>handleDetail()}>
                    <img src={props.images} alt="" className='leaderboardImg rounded-3' />
                    <div className='d-flex flex-column'>
                        <span className='fw-semibold'>
                            {props.title}
                        </span>
                        <span className='fw-light'>{props.type} ( {props.episodes} eps )</span>
                        <span className='fw-light airedStr'>{props.aired}</span>
                        <span className='fw-light'>{props.members} Members</span>
                    </div>
                </div>
            </td>
            <td>
                <div className="my-4">
                    <i className='bi bi-star-fill mx-2 text-warning'></i>
                    {props.score}
                </div>
            </td>
            <td className='tableMember'>
                <div className="my-4 ">
                    <i className='bi bi-bookmark-fill mx-2'></i>
                    {props.favorites}
                </div>
            </td>
        </tr>
    )
}

export default AnimeTable