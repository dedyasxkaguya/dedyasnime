import React from 'react'

const Animebox = (props) => {
    console.log(props.data)
    let favArray = []
    if (localStorage.getItem("favNime")) {
        favArray = JSON.parse(localStorage.getItem("favNime"))
        console.log("Data berhasil diambil dari memory")
    } else {
        // favArray = JSON.parse(localStorage.getItem("favNime"))
        console.log("Data tidak ada di memory")
    }
    const handleFav = (e) => {
        if(!favArray.includes(props.data)){
            favArray.push(props.data)
            console.log(props.data)
            localStorage.setItem("favNime",JSON.stringify(favArray))
            e.target.classList.remove("btn-light")
            e.target.classList.add("btn-dark")
        }else{
            console.log("Data Sudah Ada Di Memory")
        }
    }
    return (
        <div id={props.mal_id} className='d-flex flex-column my-2 shadow rounded-4 p-1 pt-4 justify-content-between'>
            <div className="text-center">
                <h5 className='textTitle fw-semibold m-0'>{props.title}</h5>
                <h6 className='text-secondary fw-light'>{props.engTitle}</h6>
            </div>
            <div className="statusBox text-center p-2 mt-2">
                {/* Oct 2, 2025 ? |  eps, 23 min */}
                {props.status} | {props.eps} eps {props.epsd.split(" ")[0]} {props.epsd.split(" ")[1]}
            </div>
            <div className="genresBox d-flex justify-content-center align-items-center p-2 gap-2">
                {props.genres.map((genre) => {
                    return (
                        <div className="genre bg-secondary-subtle p-2 rounded-pill">
                            {genre.name}
                        </div>
                    )
                })}
            </div>
            <div className="d-flex justify-content-center">
                <img src={props.image} alt="" className='animeImg m-2 rounded-3' />
                <span className='animeDesc'>{props.description}
                    <br /><br />
                    <div className='infoNime d-flex flex-column p-2'>
                        <span className='infoSpan'>
                            <b>Studios : </b>
                            {props.studios.map((studio) => {
                                return (
                                    <span>
                                        {studio.name} ,
                                    </span>
                                )
                            })}
                        </span>
                        <span className='infoSpan'>
                            <b>Source : </b>
                            {props.source}
                        </span>
                        <span className='infoSpan'>
                            <b>Themes : </b>
                            {props.themes.map((theme) => {
                                return (
                                    <span>{theme.name} ,</span>
                                )
                            })}
                        </span>
                        <span className='infoSpan'>
                            <b>Demographic : </b>
                            {props.demographic.map((demo) => {
                                return (
                                    <span>{demo.name}</span>
                                )
                            })}
                        </span>
                    </div>
                </span>
            </div>
            <div className="d-flex pop justify-content-around align-items-center py-2 rounded-3">
                <span>
                    <i className="bi bi-star mx-2"></i>
                    {props.score}
                </span>
                <span>
                    <i className="bi bi-person-fill mx-2"></i>
                    {props.members}
                </span>
                <button type="button" className='btn btn-light'
                    onClick={(e) => handleFav(e)}>
                    <i className='bi bi-heart mx-2'></i>
                    Add Favorites
                </button>
            </div>
        </div>
    )
}

export default Animebox