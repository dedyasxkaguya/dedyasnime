import React from 'react'

const AnimeTable = (props) => {
    return (
        <tr>
            <td className='text-center fw-bold'>
                <div className='my-4'>
                    {props.rank}
                </div>
            </td>
            <td className='tableTitle'>
                <div className='d-flex gap-2 '>
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
            <td>
                <div className="my-4">
                    <i className='bi bi-bookmark-fill mx-2'></i>
                    {props.favorites}
                </div>
            </td>
            <td className='tableStatus'>
                <div className="my-4">
                    <button type="button" className='btn btn-light rounded-5 text-center'>
                        <i className='bi bi-heart my-1 mx-0'></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default AnimeTable