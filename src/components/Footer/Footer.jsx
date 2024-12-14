import React from 'react'
import location from '../../assets/Icons/pin.png'
import uk_Flag from '../../assets/Icons/united-kingdom.png'
import IN_Flag from '../../assets/Icons/flag.png'
import '../Footer/Footer.css'
import phone from '../../assets/Icons/phone.png'

function Footer() {
    return (
        <div>
            {/* Footer */}
            <footer className="text-center text-lg-start text-muted" style={{backgroundColor:"black"}}>
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block text-light">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href className="me-4 text-light">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href className="me-4 text-light">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href className="me-4 text-light">
                            <i className="fab fa-google" />
                        </a>
                        <a href className="me-4 text-light">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href className="me-4 text-light">
                            <i className="fab fa-linkedin" />
                        </a>
                        <a href className="me-4 text-light">
                            <i className="fab fa-github" />
                        </a>
                    </div>
                </section>

                <section>
                    <div className="container text-center text-md-start mt-5">
                        <div className="row">
                            <div className="col-md-3 col-lg-4 col-xl-5 mx-auto mb-4">
                                <h6 className="d-flex fw-bold text-light">
                                    <h4>Locations</h4>
                                </h6>
                                <div className="text-light d-flex gap-4">
                                    <img src={uk_Flag} alt="uk_Flag" height="30px" />
                                    <p className="fw-bold">USA</p>
                                </div>

                                <div className="d-flex  text-light" style={{ margin:'3px' }}>
                                    <img src={location} className="mt-2" alt="location" height="20px" />
                                    <p style={{ margin: '3px' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, eum!</p>
                                </div>

                                <div className="d-flex text-light" style={{ margin: '3px' }}>
                                    <img src={phone} className="mt-2" alt="phone" height="15px" />
                                    <p style={{ margin: '3px' }}>+1-111-000-1212</p>
                                </div>

                                <div className="text-light d-flex gap-3 mt-4">
                                    <img src={IN_Flag} alt="uk_Flag" height="30px" />
                                    <p className="fw-bold">india</p>
                                </div>

                                <div className="d-flex text-light" style={{ margin: '3px' }}>
                                    <img src={location} className="mt-2" alt="location" height="20px" />
                                    <p style={{ margin: '3px' }}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, saepe!</p>
                                </div>

                                <div className="d-flex text-light" style={{ margin: '3px' }}>
                                    <img src={phone} className="mt-2" alt="phone" height="15px" />
                                    <p style={{ margin: '3px' }}>+1-111-000-1212</p>
                                </div>
                            </div>

                           

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4 text-light">About us</h6>
                                <p><a href="#!" className="text-light">Learn more about our mission, vision, and the services we offer.
                                </a></p>
                                {/* <p><a href="#!" className="text-light">Settings</a></p>
                                <p><a href="#!" className="text-light">Orders</a></p>
                                <p><a href="#!" className="text-light">Help</a></p> */}
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-light">
                                <h6 className="text-uppercase fw-bold mb-4 text-light">Contact</h6>
                                <p><i className="fas fa-home me-3 text-light" /> New York, NY 25152, US</p>
                                <p><i className="fas fa-envelope me-3 text-light" /> info@example.com</p>
                                <p><i className="fas fa-phone me-3 text-light" />+1-111-000-1212</p>
                                <p><i className="fas fa-print me-3 text-light" /> +1-111-000-1212</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4 text-light" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © All Rights Reserved. Copyright 2024 by 
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> Accel.in</a>
                </div>
            </footer>


        </div>
    )
}

export default Footer