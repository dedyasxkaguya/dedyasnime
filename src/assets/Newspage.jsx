import React from 'react'

const Newspage = (props) => {
    return (
        <>
            <div className='d-flex gap-2 my-2'>
                <img src={props.image} alt="" className='object-fit-contain' />
                <span className=''>
                    <p className='fw-semibold'>
                        {props.title}
                    </p>
                    <p className='m-0'>
                        {props.text}
                    </p>
                    <p className="m-0 text-secondary fw-light">
                        {props.note}
                    </p>
                </span>
            </div>
            <hr />
        </>
    )
}

export default Newspage