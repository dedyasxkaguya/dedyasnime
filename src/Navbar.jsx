import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import logo from './assets/logo.png'
import Flex from './assets/Flex'
import axios from 'axios'
const Navbar = () => {
    // let isMenu = false
    const [user, setUser] = useState()
    let { id } = useParams()
    const { id_user } = useParams()
    if (!id && id_user) {
        id = id_user
    }
    useEffect(() => {
        if (id == undefined) {
             console.log('Blyat')
        } else {
            axios.get(`http://127.0.0.1:8000/api/user/${id}`)
                .then(data => {
                    const fetched = data.data
                    setUser(fetched)
                    console.log(fetched)
                })
        }
    }, [])

    const handleRefresh = () => {
        document.querySelector(".offcanvas1").style.display = 'none'
    }
    const handleMenu = () => {
        document.querySelector(".offcanvas1").style.display = 'flex'
    }

    const HandleProfile = () => {
        if (id) {
            if (id == 'undefined') {
                return (
                    <div className="d-flex gap-4 align-items-center">
                        <Link to={'/login'} className='btn btn-light'>
                            Login
                        </Link>
                        <Link to={'/register'} className='btn btn-outline-dark'>
                            Register
                        </Link>
                    </div>
                )
            }
            const imageLink = `http://127.0.0.1:8000/${user?.image}`
            return (
                <Link to={`/profile/${id ? id : ''}`} className="btn btn-light shadow p-2 rounded-pill d-flex gap-2 align-items-center">
                    @ {user?.username}
                    <img src={imageLink} alt="" className='profile-images rounded-circle' />
                </Link>
            )
        } else {
            return (
                <div className="d-flex gap-4 align-items-center">
                    <Link to={'/login'} className='btn btn-light'>
                        Login
                    </Link>
                    <Link to={'/register'} className='btn btn-outline-dark'>
                        Register
                    </Link>
                </div>
            )
        }
    }
    const HandleMobileProfile = () => {
        if (id) {
            const imageLink = `http://127.0.0.1:8000/${user?.image}`
            return (
                <Link to={`/profile/${id ? id : ''}`} className="btn btn-light shadow p-2 rounded-pill d-flex gap-2 align-items-center">
                    <img src={imageLink} alt="" className='profile-images rounded-circle' />
                    <span className='me-2'>@ {user?.name}</span>
                </Link>
            )
        } else {
            return (
                <div className="d-flex gap-2 align-items-center">
                    <Link to={'/login'} className='btn btn-light'>
                        Login
                    </Link>
                    <Link to={'/register'} className='btn btn-outline-light'>
                        Register
                    </Link>
                </div>
            )
        }
    }

    return (
        <>
            <nav id='nav0' className='navbar p-2 px-4'>
                <img id='logo' src={logo} alt="" />
                <div className="d-flex rounded-4 text-decoration-none p-2 shadow-lg gap-4">
                    <Link to={`/${id ? id : ''}`}>
                        <button className='pagesbtn p-2 text-decoration-none rounded-3'>
                            Home
                        </button>
                    </Link>
                    {/* <Link to={"/anime"}>
                        <button className='pagesbtn p-2 text-decoration-none rounded-3'>
                            Anime
                        </button>
                    </Link> */}
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Anime
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to={`/anime/${id ? id : ''}`} className='dropdown-item'>
                                    Seasonal Anime
                                </Link>
                            </li>
                            <li>
                                <Link to={`/anime/top/${id ? id : ''}`} className='dropdown-item'>
                                    Top Anime
                                </Link>
                            </li>
                            <li>
                                <Link to={'/anime/fav'} className='dropdown-item'>
                                    Favorites Anime
                                </Link>
                            </li>
                            <li>
                                <Link to={`/anime/search/${id ? id : ''}`} className='dropdown-item'>
                                    Search Anime
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to={`/manga/${id ? id : ''}`}>
                        <button className='pagesbtn p-2 text-decoration-none rounded-3'>
                            Manga
                        </button>
                    </Link>
                    <Link to={`/characters/${id ? id : ''}`}>
                        <button className='pagesbtn p-2 text-decoration-none rounded-3'>
                            Characters
                        </button>
                    </Link>
                </div>
                <Flex>
                    {/* <button type='button' id='' className='btn btn-outline-dark rounded-5 px-4 py-2'>
                        Favorites
                        <i className='bi bi-heart mx-2 '></i>
                    </button> */}
                    {/* <div className="p-1 px-2 rounded-5 d-flex gap-2 align-items-center justify-content-start w-fit border border-black">Search */}
                    <label htmlFor="">
                        {/* <Flex>
                            <i className='bi bi-search'></i>
                            <input type="text" name="search" id="search" className='form-control rounded-5' placeholder='search' />
                        </Flex> */}
                        <HandleProfile />
                    </label>
                </Flex>
            </nav>
            <nav id='nav1' className='navbar p-3'>
                <span className='fw-semibold text-white'>
                    <HandleMobileProfile />
                </span>
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" onClick={() => handleMenu()}>
                    Menu
                    <i className='bi bi-list ms-2'></i>
                </button>

                <div className="offcanvas offcanvas-end offcanvas1" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                            DedyasNime menu</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div id='canvas0' className="offcanvas-body d-flex flex-column justify-content-between">
                        <div className="">
                            <Link to={`/${id ? id : ''}`}>
                                <button className='pagesbtn0 w-100 p-2 text-decoration-none text-start fw-semibold d-flex justify-content-between' onClick={() => handleRefresh()}>
                                    Home
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </Link>
                            <div className="dropdown w-100">
                                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Anime
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to={`/anime/${id ? id : ''}`} className='dropdown-item' onClick={() => handleRefresh()}>
                                            Seasonal Anime
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={`/anime/top/${id ? id : ''}`} className='dropdown-item' onClick={() => handleRefresh()}>
                                            Top Anime
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={`/anime/fav/${id ? id : ''}`} className='dropdown-item' onClick={() => handleRefresh()}>
                                            Favorites Anime
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={`/anime/search/${id ? id : ''}`} className='dropdown-item' onClick={() => handleRefresh()}>
                                            Search Anime
                                        </Link>
                                    </li>
                                    <li>
                                    </li>
                                </ul>
                            </div>
                            {/* </Link> */}
                            <Link to={`/manga/${id ? id : ''}`}>
                                <button className='pagesbtn0 w-100 p-2 text-decoration-none text-start fw-semibold d-flex justify-content-between' onClick={() => handleRefresh()}>
                                    Manga
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </Link>
                            <Link to={`/characters/${id ? id : ''}`}>
                                <button className='pagesbtn0 w-100 p-2 text-decoration-none text-start fw-semibold d-flex justify-content-between' onClick={() => handleRefresh()}>
                                    Characters
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </Link>

                        </div>
                        <HandleMobileProfile />
                    </div>
                </div>
                {/* <button type='button' id='' className='btn btn-outline-dark rounded-3 p-2'>
                    <i className='bi bi-heart '></i>
                </button> */}
            </nav>
        </>
    )
}

export default Navbar