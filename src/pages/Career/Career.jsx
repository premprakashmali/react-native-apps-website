import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Header_2 from '../../components/HeaderScroll/Header_2';
import '../Career/career.css'
import health from '../../assets/Icons/health.png'
import education from '../../assets/Icons/book-of-black-cover-closed.png'
import network from '../../assets/Icons/network.png'
import ecommerce from '../../assets/Icons/online-shop.png'
import resturant from '../../assets/Icons/cafe.png'
import banking from '../../assets/Icons/bank-building.png'
import gaming from '../../assets/Icons/games.png'
import ticket from '../../assets/Icons/ticket.png'

function Career() {
    const [showSecondHeader, setShowSecondHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setShowSecondHeader(true);
            } else {
                setShowSecondHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <div className='image-container-1'>
                <Header />

                {/* Second Header */}
                <div className={`second-header ${showSecondHeader ? 'visible' : ''}`}>
                    <Header_2 />

                </div>

                <div className="career-tittle  ms-3 mt-5" style={{}}>
                    <h4 className='career-tittle'>Career</h4>
                </div>


            </div>

            <div className='opacity-image-1'></div>

            {/* -------------------------------Modal-Inquiry-form------------------------ */}

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-body p-4 d-flex">
                            <button type="button" className="btn-close rounded-2 p-2" data-bs-dismiss="modal" aria-label="Close" style={{ position: 'absolute', top: '15px', right: '15px', backgroundColor: "#17c4a7" }}></button>
                            <div className="modal-back-img">
                            </div>
                            <div className="query-form">
                                <h4 className="mb-4">Please Enter Your Inquiry</h4>
                                <form className="row g-3">
                                    <div className="col-12">
                                        <input type="text" className="form-control " placeholder="First Name" />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control " placeholder="Last Name" />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" className="form-control " placeholder="Email Address" />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control " placeholder="Mobile Number" />
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control " rows="4" placeholder="Your Message"></textarea>
                                    </div>

                                    <div className="d-flex justify-content-end">
                                        <button style={{ backgroundColor: "#17c4a7", border: "none", fontWeight: 800 }} type="submit" className="btn btn-primary text-dark rounded-5 p-2">
                                            Send Inquiry
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------------------------Modal-Inquiry-form------------------------ */}
            <div style={{ backgroundColor: "black" }}>
                <div className="career-main-container text-center py-5">
                    <div className="career-main-title">
                        <h2 className="career-title mb-4">"Stay tuned, we’ll be posting soon!"</h2>
                        <p className="career-subtitle mb-4">
                            Exciting opportunities are just around the corner. Keep an eye out for our latest updates and join us on our journey!
                        </p>
                        <img
                            src="https://files.oaiusercontent.com/file-3sNFAsLaAodA4EfVeZUdhg?se=2024-12-10T09%3A31%3A43Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D298e78cc-4194-402b-8f59-5680e2d3b46b.webp&sig=82YwtfQZwjqBE4Ug0gJYuoCeI6/LTP9WO441I7PWo0Y%3D"
                            className="img-fluid img-posting card-img-top rounded mb-4"
                            alt="Stay Tuned Image"
                        />
                        <div className="action-buttons">
                            <button className="btn btn-outline">Explore Careers</button>
                            <button className="btn btn-outline ms-3">Get Notified</button>
                        </div>
                    </div>
                </div>


                <div className="card-section-bg">
                    <section className="container py-5 mt-5">
                        <h2 className="text-center text-primary mb-4 conte-tittle-1">Industries We Have Served</h2>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 g-4 justify-content-center mt-5">
                            <div className="col d-flex justify-content-center">
                                <div className="card1 text-center rounded-0" style={{ width: '12rem' }}>
                                    <img src={health} className="card-img-top mt-4" alt="Healthcare" style={{ height: '60px', width: '60px', margin: 'auto' }} />
                                    <div className="card-body">
                                        <p className="card-text">Healthcare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <div className="card1 text-center rounded-0" style={{ width: '12rem' }}>
                                    <img src={education} className="card-img-top mt-4" alt="Education" style={{ height: '60px', width: '60px', margin: 'auto' }} />
                                    <div className="card-body">
                                        <p className="card-text">Education</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <div className="card1 text-center rounded-0" style={{ width: '12rem' }}>
                                    <img src={network} className="card-img-top mt-4" alt="Social Networking" style={{ height: '60px', width: '60px', margin: 'auto' }} />
                                    <div className="card-body">
                                        <p className="card-text">Social Networking</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <div className="card1 text-center rounded-0" style={{ width: '12rem' }}>
                                    <img src={resturant} className="card-img-top mt-4" alt="Food & Restaurant" style={{ height: '60px', width: '60px', margin: 'auto' }} />
                                    <div className="card-body">
                                        <p className="card-text">Food &amp; Restaurant</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <div className="card1 text-center rounded-0" style={{ width: '12rem' }}>
                                    <img src={banking} className="card-img-top mt-4" alt="Banking & Finance" style={{ height: '60px', width: '60px', margin: 'auto' }} />
                                    <div className="card-body">
                                        <p className="card-text">Banking &amp; Finance</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <div className="card1 text-center rounded-0" style={{ width: '12rem' }}>
                                    <img src={gaming} className="card-img-top mt-4" alt="Gaming & Leisure" style={{ height: '60px', width: '60px', margin: 'auto' }} />
                                    <div className="card-body">
                                        <p className="card-text">Gaming &amp; Leisure</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <div className="card1 text-center rounded-0" style={{ width: '12rem' }}>
                                    <img src={ticket} className="card-img-top mt-4" alt="Events & Tickets" style={{ height: '60px', width: '60px', margin: 'auto' }} />
                                    <div className="card-body">
                                        <p className="card-text">Events &amp; Tickets</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <div className="card1 text-center rounded-0" style={{ width: '12rem' }}>
                                    <img src={ecommerce} className="card-img-top mt-4" alt="Ecommerce, Retail & B2B" style={{ height: '60px', width: '60px', margin: 'auto' }} />
                                    <div className="card-body">
                                        <p className="card-text">Ecommerce, Retail &amp; B2B</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div>
            </div>

            <Footer />


        </div>
    )
}

export default Career