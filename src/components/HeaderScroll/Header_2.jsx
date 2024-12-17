import React, { useState } from 'react'
import '../HeaderScroll/Header2.css'
import Logo from '../../assets/Logo/company1.png'
import { Link, NavLink } from 'react-router-dom'

function Header_2() {
    const [activeLink, setActiveLink] = useState("");

    const handleSetActive = (linkName) => {
        setActiveLink(linkName);
    };
    return (
        <div>
            <div className='conatiner-fluid main-header'>
                <nav className="navbar navbar-expand-sm scond-header">
                    <div className="container-fluid d-flex justify-content-between">
                        <Link to={'/'}><img src={Logo} alt="" height={'90px'} /></Link>
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav me-auto"></ul>
                            <div className="d-flex align-items-center">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item dropdown">
                                        <Link to="/" className={`nav-link text-dark underline-link-1 ${activeLink === "/" ? "active" : ""}`} aria-expanded="false" onClick={() => handleSetActive("/")}>
                                            SERVICES
                                            <i className="fa-solid fa-caret-down ms-2" style={{ color: "#000" }}></i>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link to="/hire" className="dropdown-item">
                                                    Hire React Native Developer
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Custom Mobile App Development
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/career" className={`nav-link text-dark underline-link-1 ${activeLink === "career" ? "active" : ""}`}
                                            onClick={() => handleSetActive("career")}>CAREER
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/about" className={`nav-link text-dark underline-link-1 ${activeLink === "about" ? "active" : ""}`}
                                            onClick={() => handleSetActive("about")}>
                                            ABOUT US
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/contact_us" className={`nav-link text-dark underline-link-1 ${activeLink === "contact_us" ? "active" : ""}`}
                                            onClick={() => handleSetActive("contact_us")}>
                                            CONTACT US
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <button type="button" style={{ backgroundColor: "black", border: "none", fontWeight: 'bold', color: "white" }} className="btn btn-warning p-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Request a Quote
                            </button>
                        </div>

                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Header_2