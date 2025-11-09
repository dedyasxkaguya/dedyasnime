import React from 'react'

const List = (props) => {
    return (
        <ul className='list-group mb-2'>
            <li className="list-group-item fw-semibold ">{props.title}</li>
            {props.array?.map((p) => {
                return (
                    <li className='list-group-item' key={p.mal_id}>{p.name}</li>
                )
            })}
        </ul>
    )
}

export default List