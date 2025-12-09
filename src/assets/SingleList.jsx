import React from 'react'

const SingleList = (props) => {
  if (props.typeIcon) {
    return (
      <ul className='list-group mb-2'>
        <li className="list-group-item">
          <span className="fw-semibold">
            {props.title} :
          </span> 
          <span>{props.string}</span> 
          <span className='mx-2'>{props.typeIcon}</span>
        </li>
      </ul>
    )
  }
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