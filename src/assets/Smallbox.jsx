import React from 'react'

const Smallbox = (props) => {
    const style = {
        'height': '24dvh',
        'width': '16dvh',
        // 'opacity':'.7',
        'backgroundSize': 'cover',
        'backgroundImage': `url(${props.img})`
    }
    return (
        <div style={style} className=' d-flex align-items-end rounded-4 overflow-hidden'>
            <div className="textBox w-100 p-2 d-flex align-items-end">
                <span className='boxText text-black'>{props.title}</span>
            </div>
        </div>
    )
}

export default Smallbox