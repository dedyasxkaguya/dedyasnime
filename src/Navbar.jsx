import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
const Navbar = () => {
    return (
        <nav className='navbar p-3'>
            <img src={logo} alt="" />
            <div className="d-flex rounded-4 text-decoration-none p-2 shadow-lg gap-4">
                <Link to={"/"}>
                    <button className='pagesbtn p-2 text-decoration-none rounded-3'>
                        Home
                    </button>
                </Link>
                <Link to={"/anime"}>
                    <button className='pagesbtn p-2 text-decoration-none rounded-3'>
                        Anime
                    </button>
                </Link>
                <Link to={"/manga"}>
                    <button className='pagesbtn p-2 text-decoration-none rounded-3'>
                        Manga
                    </button>
                </Link>
                <Link to={"/characters"}>
                    <button className='pagesbtn p-2 text-decoration-none rounded-3'>
                        Characters
                    </button>
                </Link>
            </div>
            <button type='button' id='' className='btn btn-outline-dark rounded-5 px-4 py-2'>
                Favorites
                <i className='bi bi-heart mx-2 '></i>
            </button>
        </nav>
    )
}

export default Navbar