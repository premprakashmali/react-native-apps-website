import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import './Hire_section.css'
import Footer from '../../components/Footer/Footer'
import Header_2 from '../../components/HeaderScroll/Header_2';

function Hire_page() {
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
            <div className='hire-container-1'>
                <Header />

                {/* Second Header */}
                <div className={`second-header ${showSecondHeader ? 'visible' : ''}`}>
                    <Header_2 />
                </div>
            </div>

            <div className="hire-tittle-1 ms-3 mt-5" style={{ position: 'absolute' }}>
            <h4 className='text-start' style={{marginLeft:"20px",fontSize:"30px"}}>Hire Developer</h4>
            </div>
            <div className='hire-opacity-image-1'></div>

            {/* -------------------------------Modal-Inquiry-form------------------------ */}

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-body p-4">
                            <button type="button" className="btn-close rounded-2 p-2" data-bs-dismiss="modal" aria-label="Close" style={{ position: "absolute", top: "15px", right: "15px", backgroundColor: "#fff", }}></button>
                            <div className="row g-4">
                                <div className="col-lg-6 col-md-12 d-flex ">
                                    <div className="modal-back-img"></div>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <div className="query-form">
                                        <h4 className="mb-4">Please Enter Your Inquiry</h4>
                                        <form className="row g-3">
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                            <div className="col-12">
                                                <input type="email" className="form-control" placeholder="Email Address" />
                                            </div>
                                            <div className="col-12">
                                                <input type="text" className="form-control" placeholder="Mobile Number" />
                                            </div>
                                            <div className="col-12">
                                                <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                                            </div>

                                            <div className="col-12 d-flex justify-content-end">
                                                <button style={{ backgroundColor: "black", border: "none", fontWeight: 800, }} type="submit" className="btn btn-primary text-light rounded-5 px-4 py-2" >
                                                    Send Inquiry
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------------------------Modal-Inquiry-form------------------------ */}

            <div className="form-section form-background p-4">
                <div className="form-container mx-auto p-4 rounded shadow">
                    <h2 className="form-title text-center mb-4">Hire a React Native Developer!</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label text-light">Full Name</label>
                            <input type="text" id="fullName" className="form-input w-100 p-2 rounded-2" placeholder="Enter your full name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-light">Email Address</label>
                            <input type="email" id="email" className="form-input w-100 p-2 rounded-2" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label text-light">Mobile Number</label>
                            <input type="tel" id="phone" className="form-input w-100 p-2 rounded-2" placeholder="Enter your mobile number" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="projectDetails" className="form-label text-light">Description</label>
                            <textarea id="projectDetails" rows="4" className="form-input w-100 p-2 rounded-2" placeholder="Please provide some of your terms" required></textarea>
                        </div>
                        <div className="text-start">
                            <button type="submit" className="p-2 btn-custom  rounded">
                                Submit Your Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div className='opacityimage'></div> */}
            <Footer />
        </div>
    )
}

export default Hire_page