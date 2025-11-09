import React from 'react'

const SingleList = (props) => {
  return (
    <ul className='list-group mb-2'>
      <li className="list-group-item">
        <span className="fw-semibold">
          {props.title} :
        </span> {props.string}
      </li>
    </ul>
  )
}

export default SingleList