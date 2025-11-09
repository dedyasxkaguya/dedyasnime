import React from 'react'

const Charbox = (props) => {
    let style = {
        "backgroundImage": `url(${props.images})`,
        "height": "60dvh",
        "backgroundSize": "cover",
    }
    return (
        <div style={style} className='rounded-5 d-flex justify-content-center align-items-end'>
            <div className="d-flex gap-2 charBox justify-content-end align-items-center p-2 flex-column">
                <span className='charTitle fw-bold fs-4'>{props.name}</span>
                <span className='text-secondary fw-light'>{props.name_kanji}</span>
                <div className="btns d-flex gap-2">
                    <a href={props.url} className='btn btn-primary shadow' target='_blank'>
                        Visit MyAnimeLIst
                    </a>
                    <a href={props.images} download={props.name} className='btn btn-light shadow'>
                        Download
                        <i className='bi bi-download mx-2'></i>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Charbox