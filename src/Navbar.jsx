import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
import Flex from './assets/Flex'
const Navbar = () => {
    // let isMenu = false
    const handleRefresh = () => {
        document.querySelector(".offcanvas1").style.display = 'none'
    }
    const handleMenu = () => {
        document.querySelector(".offcanvas1").style.display = 'flex'
    }
    return (
        <>
            <nav id='nav0' className='navbar p-3'>
                <img id='logo' src={logo} alt="" />
                <div className="d-flex rounded-4 text-decoration-none p-2 shadow-lg gap-4">
                    <Link to={"/"}>
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
                                <Link to={'/anime'} className='dropdown-item'>
                                    Seasonal Anime
                                </Link>
                            </li>
                            <li>
                                <Link to={'/anime/top'} className='dropdown-item'>
                                    Top Anime
                                </Link>
                            </li>
                            <li>
                                <Link to={'/anime/fav'} className='dropdown-item'>
                                    Favorites Anime
                                </Link>
                            </li>
                            <li>
                                <Link to={'/anime/search'} className='dropdown-item'>
                                    Search Anime
                                </Link>
                            </li>
                        </ul>
                    </div>
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
                <Flex>
                    {/* <button type='button' id='' className='btn btn-outline-dark rounded-5 px-4 py-2'>
                        Favorites
                        <i className='bi bi-heart mx-2 '></i>
                    </button> */}
                    {/* <div className="p-1 px-2 rounded-5 d-flex gap-2 align-items-center justify-content-start w-fit border border-black">Search */}
                    <label htmlFor="">
                        <Flex>
                            <i className='bi bi-search'></i>
                            <input type="text" name="search" id="search" className='form-control rounded-5' placeholder='search' />
                            {/* </div> */}
                        </Flex>
                    </label>
                </Flex>
            </nav>
            <nav id='nav1' className='navbar p-3'>
                {/* <img src={logo} alt="" /> */}
                <span className='fw-semibold text-white'>DedyasNime</span>
                {/* <div className="dropdown dropstart">
                    <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                        <i className='bi bi-list'></i>
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <Link to={"/"}>
                                <span className='dropdown-item p-2 text-decoration-none rounded-3'>
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/anime"}>
                                <span className='dropdown-item p-2 text-decoration-none rounded-3'>
                                    Anime
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/manga"}>
                                <span className='dropdown-item p-2 text-decoration-none rounded-3'>
                                    Manga
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/characters"}>
                                <span className='dropdown-item p-2 text-decoration-none rounded-3'>
                                    Characters
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div> */}
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
                    <div id='canvas0' className="offcanvas-body d-flex flex-column ">
                        <Link to={"/"}>
                            <button className='pagesbtn0 w-100 p-2 text-decoration-none text-start fw-semibold d-flex justify-content-between' onClick={() => handleRefresh()}>
                                Home
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </Link>
                        {/* <Link to={"/anime"}> */}
                            {/* <button className='pagesbtn0 w-100 p-2 text-decoration-none text-start fw-semibold d-flex justify-content-between' onClick={() => handleRefresh()}>
                                Anime
                                <i className="bi bi-chevron-right"></i>
                            </button> */}
                            <div className="dropdown w-100">
                                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Anime
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to={'/anime'} className='dropdown-item' onClick={() => handleRefresh()}>
                                            Seasonal Anime
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/anime/top'} className='dropdown-item' onClick={() => handleRefresh()}>
                                            Top Anime
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/anime'} className='dropdown-item' onClick={() => handleRefresh()}>
                                            Favorites Anime
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/anime'} className='dropdown-item' onClick={() => handleRefresh()}>
                                            Search Anime
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        {/* </Link> */}
                        <Link to={"/manga"}>
                            <button className='pagesbtn0 w-100 p-2 text-decoration-none text-start fw-semibold d-flex justify-content-between' onClick={() => handleRefresh()}>
                                Manga
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </Link>
                        <Link to={"/characters"}>
                            <button className='pagesbtn0 w-100 p-2 text-decoration-none text-start fw-semibold d-flex justify-content-between' onClick={() => handleRefresh()}>
                                Characters
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </Link>
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