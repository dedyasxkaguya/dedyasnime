import React from 'react'

const Bigbox = ({ id, title, children }) => {
    let smallDiv = `small${id} d-flex gap-2 flex-column`
    return (
        <div id={id}>
            <h6>{title}</h6>
            <hr />
            <div className={smallDiv}>
                {children}
            </div>
        </div>
    )
}

export default Bigbox