import React from 'react'

const AnimeSelect = (props) => {
    let array = []
    if (props.array && props.array.length > 1) {
        array = props.array
        console.log(array)
    }else{
        console.log("gabisa wok")
    }
    return (
        <label htmlFor="" className='d-flex gap-2 align-items-center my-2'>
            <i className='bi bi-sliders2'></i>
            {/* {props.label} */}
            {props.name}
            <select name="" id="" className='form-select'
                onChange={props.func}>
                <option value={props.default} hidden>
                    None
                </option>
                {
                    array.forEach((a) => {
                        return (
                            <option key={a.mal_id} value={a.name}>{a.name}</option>
                        )
                    })
                }
            </select>
        </label>
    )
}

export default AnimeSelect