import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Header_2 from '../../components/HeaderScroll/Header_2';
import '../Contact_us/contact.css'
import Uk_Flag from '../../assets/Icons/united-kingdom.png'
import IN_Flag from '../../assets/Icons/flag.png'
import Mail from '../../assets/Icons/email (1).png'
import location from '../../assets/Icons/loaction_black.png'
import Select from "react-select";


function Contact_us() {
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

    const countryOptions = [
        {
            value: "+91",
            label: (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={IN_Flag} alt="UK Flag" style={{ width: "20px", marginRight: "10px" }} />
                    +91
                </div>
            ),
        },
        {
            value: "+1",
            label: (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={Uk_Flag} alt="US Flag" style={{ width: "20px", marginRight: "10px" }} />
                    +1
                </div>
            ),
        },
    ];

    const [count, setCount] = useState(0);
    const [iscount, setISCount] = useState(0);

    useEffect(() => {
        const counterInterval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount >= 300) {
                    clearInterval(counterInterval);
                    return prevCount;
                }
                return prevCount + 1;
            });
        }, 10);

        return () => clearInterval(counterInterval);
    }, []);


    useEffect(() => {
        const counterInterval = setInterval(() => {
            setISCount(prevCount => {
                if (prevCount >= 5) {
                    clearInterval(counterInterval);
                    return prevCount;
                }
                return prevCount + 1;
            });
        }, 100);

        return () => clearInterval(counterInterval);
    }, []);


    return (
        <div>
            <div className='image-container-1'>
                <Header />

                {/* Second Header */}
                <div className={`second-header ${showSecondHeader ? 'visible' : ''}`}>
                    <Header_2 />

                </div>

                <div className="contact-heading-1  ms-3 mt-5">
                    <h2 className="contact-heading-1 mt-5">Contact Us</h2>
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

            {/* --------------------Contact us form --------------------- */}

            <div className='contact-first-contain'>
                <section class="our-contact">
                    <div class="contacts-header">
                        <span class="contact-subtitle">Contact Us</span>
                        <h2>GET IN TOUCH WITH <span class="highlight">US</span></h2>
                        <p class="contact-tagline">We're here to help you.</p>
                        <p class="contact-description">
                            Have questions or need assistance? Reach out to us, and our team will be happy to provide the support and solutions you need. Whether you're looking for more information about our services, need technical assistance, or simply want to connect, we’re here to make your experience seamless and successful. Drop us a message, and let's get started on your journey to digital growth!
                        </p>
                    </div>
                    <div class="stats">
                        <div class="stat-item">
                            <h3 class="counter" data-target="500">{count}</h3>
                            <p>Happy Clients</p>
                        </div>
                        <div class="stat-item">
                            <h3 class="counter" data-target="12">{iscount}</h3>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                </section>
            </div>




            <div className="contact-bg">
                <div className="container-fluid p-0" >
                    <br />
                    <div className="container  contact-us-1 mt-1" data-aos="fade-up"
                        data-aos-offset="50"
                        data-aos-delay="0"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        <div className="row justify-content-center align-items-center form-bg mx-0">
                            <div className="col-lg-5 col-md-6">
                                <form>
                                    <div className="col-12 mb-3">
                                        <label htmlFor="name" className="form-label form-col">NAME</label>
                                        <input type="text" className="w-100 p-2 rounded-5 input-border" id="name" placeholder=" Name" required />
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-6 mb-3">
                                            <label htmlFor="email" className="form-label form-col">EMAIL</label>
                                            <input type="email" className="w-100 p-2 rounded-5 input-border" id="email" placeholder=" Email" required />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label htmlFor="phone" className="form-label form-col">MOBILE NUMBER</label>
                                            <input type="tel" className="w-100 p-2 rounded-5 input-border" id="phone" placeholder=" Mobile number" />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label htmlFor="" className="form-label form-col">COUNTRY CODE</label>
                                            <Select
                                                options={countryOptions}
                                                classNamePrefix="custom-select"
                                            />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label htmlFor="phone" className="form-label form-col">SELECT SERVICES</label>
                                            {/* <input type="tel" className="w-100 p-2 rounded-5 input-border" id="phone" placeholder=" Mobile number"/> */}
                                            <select name="" id="" className='input-border w-100 p-2 rounded-5 '>
                                                <option value="">Mobile Application</option>
                                                <option value=""></option>
                                                <option value=""></option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className="col-12 mb-3">
                                        <label htmlFor="message" className="form-label form-col">Message</label>
                                        <textarea className="w-100 p-2 rounded-4 input-border" id="message" rows={5} placeholder="Give a short description, what you want from us" required />
                                    </div>
                                    <div className="">
                                        <button type="submit" className="btn bg-light p-2 text-dark rounded-1" style={{ fontWeight: 800 }}>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>


                            <div className="col-lg-4 col-md-6 ms-5" >
                                <div className="contact-info p-4 rounded-1">
                                    <div className="location">
                                        <h4>Locations</h4>
                                        <div className="location-item">
                                            <div className="location-details">
                                                <div className="d-flex align-items-center">
                                                    <img src={Uk_Flag} alt="USA Flag" className="me-2" height="20px" />
                                                    <h5 className="mb-0">USA</h5>
                                                </div>
                                                <p className="mt-2" style={{ fontWeight: "bold" }}>
                                                    <img src={location} alt="" height="20px" className="me-2" />
                                                    Lorem ipsum dolor sit amet consectetur ?
                                                </p>
                                                <p style={{ fontWeight: "bold" }}>
                                                    <i className="fa-solid fa-phone me-2" style={{ color: "#000", fontSize: "15px" }}></i>
                                                    +1-11-111-1111
                                                </p>
                                                <a href="mailto:info@darkbears.com" style={{ fontWeight: "bold" }}>
                                                    <img src={Mail} alt="" height="20px" className="me-2" />
                                                    info@Accel.com
                                                </a>
                                            </div>
                                        </div>
                                        <div className="location-item mt-4">
                                            <div className="location-details">
                                                <div className="d-flex align-items-center">
                                                    <img src={IN_Flag} alt="India Flag" className="me-2" height={'20px'} />
                                                    <h5 className="mb-0">India</h5>
                                                </div>
                                                <p className="mt-2" style={{ fontWeight: "bold" }}>
                                                    <img src={location} alt="" height="20px" className="me-2" />
                                                    Lorem ipsum dolor sit amet consectetur ?
                                                </p>
                                                <p style={{ fontWeight: "bold" }}>
                                                    <i className="fa-solid fa-phone me-2" style={{ color: "#000", fontSize: "15px" }}></i>
                                                    +1-11-111-1111
                                                </p>
                                                <a href="mailto:info@darkbears.com" style={{ fontWeight: "bold" }}>
                                                    <img src={Mail} alt="" height="20px" className="me-2" />
                                                    info@Accel.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="business-hours mt-4" style={{ fontWeight: "bold" }}>
                                        <h4>Business Hours</h4>
                                        <p>Monday - Friday 9am to 6pm</p>
                                        <p>Saturday, Sunday - Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className='container-fluid px-0'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27841607.697473545!2d61.00083698256399!3d19.729113061269327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1734077713913!5m2!1sen!2sin" width="100%" height="450px" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer />


        </div>
    )

}

export default Contact_us