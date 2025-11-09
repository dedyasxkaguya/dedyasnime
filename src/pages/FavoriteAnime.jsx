import axios from 'axios'
import React, { useEffect } from 'react'
import LargeAnimeBox from '../assets/LargeAnimeBox'
const FavoriteAnime = () => {
    let favNimeArr = []
    let favNime = []
    try {

        if (localStorage.getItem("favNime").length > 1) {
            favNime = JSON.parse(localStorage.getItem("favNime"))
            console.log(favNime)
        } else {
            localStorage.setItem("favNime", JSON.stringify([35853]))
            console.log("Tidak ada data di memory")
        }
    } catch {
        console.log("Tidak ada data")
        return(
            <p className='m-4 fw-semibold fs-4'>Belum ada anime favorit</p>
        )
    }
    const deleteData = () => {
        swal.fire({
            "icon": "question",
            "title": "Are you sure",
            "text": "This action cant be undo",
            "confirmButtonColor": "#dc3545",
            "confirmButtonText": "Yes , I am sure",
            "showCancelButton": true,
            "cancelButtonColor": "#20c997"
        }).then(result => {
            if (result.isConfirmed) {
                localStorage.clear()
                swal.fire({
                    'icon': "success",
                    "title": "Berhasil",
                    "text": "Data telah dihapus"
                })
                navigation.reload();
            }
        })
    }
    return (
        <div>
            <h1 className='m-4'>
                Favorite Anime
            </h1>
            <div className="grid0 gap-2 p-4">
                {favNime.map((nime) => {
                    try {

                        // <Animebox data={nime} title={nime.title} image={nime.images.webp.large_image_url} engTitle={nime.title_english} status={nime.aired.string} eps={nime.episodes} epsd={nime.duration} genres={nime.genres} studios={nime.studios} source={nime.source} demographic={nime.demographics} themes={nime.themes} score={nime.score} members={nime.members} description={nime.synopsis} mal_id={nime.mal_id}/>
                        return (
                            <LargeAnimeBox title={nime.title} image={nime.images?.jpg?.large_image_url} engTitle={nime.title_english} status={nime.aired.string} eps={nime.episodes} epsd={nime.duration} genres={nime.genres} studios={nime.studios} source={nime.source} demographic={nime.demographics} themes={nime.themes} score={nime.score} members={nime.members} description={nime.synopsis} id={nime.mal_id} />
                        )
                    } catch {
                        console.log("Ya begitulah")
                        return
                    }
                })}
            </div>
            <button className="btn btn-outline-danger m-4" onClick={() => deleteData()}>
                Delete All Data
            </button>
        </div>
    )
}

export default FavoriteAnime
