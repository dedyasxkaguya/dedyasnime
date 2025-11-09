import axios from 'axios'
import React, { useEffect } from 'react'
import LargeAnimeBox from '../assets/LargeAnimeBox'
const FavoriteAnime = () => {
    let favNimeArr = []
    let favNime = []
    console.log(localStorage.getItem("favNime").length)
    if (localStorage.getItem("favNime").length > 1) {
        favNime = JSON.parse(localStorage.getItem("favNime"))
        console.log(favNime)
    } else {
        localStorage.setItem("favNime", JSON.stringify([35853]))
        console.log("Tidak ada data di memory")
    }

    return (
        <div>
            <h1>
                Favorite Anime
            </h1>
            <div className="grid0 gap-2">
                {favNime.map((nime) => {
                    try {

                        // <Animebox data={nime} title={nime.title} image={nime.images.webp.large_image_url} engTitle={nime.title_english} status={nime.aired.string} eps={nime.episodes} epsd={nime.duration} genres={nime.genres} studios={nime.studios} source={nime.source} demographic={nime.demographics} themes={nime.themes} score={nime.score} members={nime.members} description={nime.synopsis} mal_id={nime.mal_id}/>
                        return (
                            <LargeAnimeBox title={nime.title} image={nime.images.webp.large_image_url} engTitle={nime.title_english} status={nime.aired.string} eps={nime.episodes} epsd={nime.duration} genres={nime.genres} studios={nime.studios} source={nime.source} demographic={nime.demographics} themes={nime.themes} score={nime.score} members={nime.members} description={nime.synopsis} />
                        )
                    } catch {
                        console.log("Ya begitulah")
                        return
                    }
                })}
            </div>
        </div>
    )
}

export default FavoriteAnime
