import React, { useState } from 'react'
import '../Header/Header.css'
import uk_Flag from '../../assets/Icons/united-kingdom.png'
import IN_Flag from '../../assets/Icons/flag.png'
import Logo from '../../assets/Logo/Accel.png'
import Mail from '../../assets/Icons/mail.png'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    const [activeLink, setActiveLink] = useState("");

    const handleSetActive = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <div>
            <div className='conatiner-fluid main-header'>
                <div className="container-fluid top-header py-2">
                    <div className="d-flex justify-content-end info align-items-center">
                        <div className="d-flex align-items-center me-2">
                            <img src={uk_Flag} alt="UK Flag" height="22px" width="22px" className="me-2 mt-1" />
                            <h2 className="mb-0 fs-6">+1-205-625-54126</h2>
                            <div style={{ color: 'white', marginLeft: "10px" }}>
                                |
                            </div>
                        </div>
                        <div className="d-flex align-items-center me-2">
                            <img src={IN_Flag} alt="India Flag" height="22px" width="22px" className="me-2 mt-1" />
                            <h2 className="mb-0 fs-6">+91-9680294478</h2>
                            <div style={{ color: 'white', marginLeft: "10px" }}>
                                |
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src={Mail} alt="India Flag" height="22px" width="20px" className="me-2 mt-1" />
                            <h2 className="mb-0 fs-6">Accel@gamil.com</h2>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-sm navbar-light">
                    <div className="container-fluid d-flex justify-content-between">
                        <NavLink to={'/'}><img src={Logo} alt="" height={'90px'} /></NavLink>
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav me-auto"></ul>
                            <div className="d-flex align-items-center">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item dropdown">
                                        <Link to="/" className={`nav-link text-light underline-link ${activeLink === "/" ? "active" : ""}`} aria-expanded="false" onClick={() => handleSetActive("/")}>
                                            SERVICES
                                            <i className="fa-solid fa-caret-down ms-2" style={{ color: "#fff" }}></i>
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
                                        <NavLink to="/career" className={`nav-link text-light underline-link ${activeLink === "career" ? "active" : ""}`}
                                            onClick={() => handleSetActive("career")}>CAREER
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/about" className={`nav-link text-light underline-link ${activeLink === "about" ? "active" : ""}`}
                                            onClick={() => handleSetActive("about")}>
                                            ABOUT US
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/contact_us" className={`nav-link text-light underline-link ${activeLink === "contact_us" ? "active" : ""}`}
                                            onClick={() => handleSetActive("contact_us")}>
                                            CONTACT US
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <button type="button" style={{ backgroundColor: "#ffa500", border: "none", fontWeight: 800, color: "white" }} className="btn btn-warning p-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Request a Quote
                            </button>
                        </div>

                    </div>
                </nav>
            </div>
        </div>


    )
}

export default Header