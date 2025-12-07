import React from 'react'
import { Link } from 'react-router-dom'

const Bigbox = ({ id, title, mypath, children }) => {
    let smallDiv = `small${id} d-flex gap-2 flex-column`
    return (
        <div id={id}>
            <Link to={mypath} className='btn btn-light rounded-2 p-2'>{ title }</Link>
            <hr />
            <div className={smallDiv}>
                {children}
            </div>
        </div>
    )
}

export default Bigbox