import React, { useEffect, useRef, useState } from 'react';
import '../Home/Home.css';
import Header from '../../components/Header/Header';
import Typed from 'typed.js';
import Header_2 from '../../components/HeaderScroll/Header_2';
import Footer from '../../components/Footer/Footer';
import health from '../../assets/Icons/health.png'
import education from '../../assets/Icons/book-of-black-cover-closed.png'
import network from '../../assets/Icons/network.png'
import ecommerce from '../../assets/Icons/online-shop.png'
import resturant from '../../assets/Icons/cafe.png'
import banking from '../../assets/Icons/bank-building.png'
import gaming from '../../assets/Icons/games.png'
import ticket from '../../assets/Icons/ticket.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {
    const el = useRef(null);
    const typed = useRef(null);
    const [showSecondHeader, setShowSecondHeader] = useState(false);

    useEffect(() => {
        typed.current = new Typed(el.current, {
            strings: ['React Native Mobile Application', 'Cross-Platform Mobile Development', 'iOS/Android App using  React Native'],
            typeSpeed: 50,
            backSpeed: 29,
            loop: true,
        });

        return () => {
            typed.current.destroy();
        };
    }, []);

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


    useEffect(() => {
        AOS.init({ once: true });
    }, []);
    

    return (
        <div>
            <div className='image-container'>
                <Header />

                {/* Second Header */}
                <div className={`second-header ${showSecondHeader ? 'visible' : ''}`}>
                    <Header_2 />
                </div>


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


                {/* ------------------------------Main-content--------------------------- */}
                <div className="container-fluid section">
                    <div className="section-conatin">
                        <div className="tittle-1">
                            <span className='typewrite' ref={el}></span>
                        </div>
                        <div className="tittle-2 mt-2">
                            <p>Integration of cutting-edge techniques like Blockchain, (IoT) <br /> and AI with proficiency.</p>
                        </div>
                        <div className="started-btn">
                            <button class="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Get started</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------Main-content--------------------------- */}


            {/* ----------------------For-opacity---------------------- */}
            <div className='opacity-image'></div>
            {/* ----------------------For-opacity---------------------- */}



            {/* ---------------------------Software Development Services--------------------------- */}
            <div className='heading-services mt-5 '>
                <h1>Software Development Services</h1>
            </div>
            <div className="card-container me-5" data-aos="fade-up"
                data-aos-offset="10"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center" >
                <div className="card ">
                    <div className="card-inner ">
                        <div className="card-front d-flex justify-content-center">
                            <div className='img-bg'>
                                <div class="rotation-container">
                                    <img src="https://www.darkbears.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadvance-computing.de501c2d.png&w=96&q=75" alt="Main Image" class="main-image" />
                                    <div class="rotating-dots">
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                    </div>

                                </div>
                                <div>
                                    <h3 className="expertise-card-title mt-5">Advanced Computing</h3>
                                </div>
                            </div>
                        </div>
                        <div className="card-back">
                            <h3 className="card-title">Advanced Computing</h3>
                            <p className="card-description text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio, sit totam ipsum pariatur ex. Earum minus voluptatum ipsa possimus!</p>
                            <a href="#" className="btn-read">Read More →</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="card-front d-flex justify-content-center">
                            <div>
                                <div class="rotation-container">
                                    <img src="https://www.darkbears.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmobile.daa7f32f.png&w=96&q=75" alt="Main Image" class="main-image" />
                                    <div class="rotating-dots">
                                        <div class="sec-dot1"></div>
                                        <div class="sec-dot2"></div>
                                        <div class="sec-dot3"></div>
                                    </div>
                                </div>
                                <h3 className="expertise-card-title1 mt-5">Mobile &amp; Wearables</h3>
                            </div>

                        </div>
                        <div className="card-back">
                            <h3 className="card-title">Mobile &amp; Wearables</h3>
                            <p className="card-description text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio, sit totam ipsum pariatur ex. Earum minus voluptatum ipsa possimus!</p>
                            <a href="#" className="btn-read">Read More →</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="card-front d-flex justify-content-center">
                            <div>
                                <div class="rotation-container">
                                    <img src="https://www.darkbears.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fweb-ecommerce.b32dfce5.png&w=96&q=75" alt="Main Image" class="main-image" />
                                    <div class="rotating-dots">
                                        <div class="thid-dot1"></div>
                                        <div class="thid-dot2"></div>
                                        <div class="thid-dot3"></div>
                                    </div>
                                </div>
                                <h3 className="expertise-card-title2 mt-5">Web &amp; Ecommerce</h3>
                            </div>
                        </div>
                        <div className="card-back">
                            <h3 className="card-title">Web &amp; Ecommerce</h3>
                            <p className="card-description text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio, sit totam ipsum pariatur ex. Earum minus voluptatum ipsa possimus!</p>
                            <a href="#" className="btn-read">Read More →</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------------------Software Development Services--------------------------- */}


            {/* ----------------------------Our Expertise-------------------------- */}




            <section className="coursel-slider py-5 " style={{ backgroundColor: "#fff5ee" }} data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">
                <div className="container">
                    <h1 className="text-center mb-4 feature-tittle">Our Expertise</h1>
                    <div id="ExpertiseCarousel" className="carousel slide" data-bs-ride="carousel">
                        <button className="carousel-control-prev " type="button" data-bs-target="#ExpertiseCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#ExpertiseCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-inner ms-5">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card2 text-center rounded-3" style={{ height: "29rem", width: "20rem", backgroundColor: "#fff" }}>
                                            <img src="https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994_640.jpg" className="card-img-top mx-auto" alt="image 1" style={{ width: "100%", height: "60%", backgroundSize: "contain", borderRadius: "10px 10px 0px 0px" }} />
                                            <div className="card-body mt-4">
                                                <h5 className="card-title text-dark">Social Media App</h5>
                                                <p className="card-text text-dark">ConnectHub: A Social Media App for Real-Time Connections
                                                </p>
                                                <button class="button2">Explore</button>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card2 text-center rounded-3" style={{ height: "29rem", width: "20rem", backgroundColor: "#fff" }}>
                                            <img src="https://cdn.pixabay.com/photo/2021/11/22/20/20/online-6817350_1280.jpg" className="card-img-top mx-auto" alt="image 2" style={{ width: "100%", height: "60%", backgroundSize: "contain", borderRadius: "10px 10px 0px 0px" }} />
                                            <div className="card-body mt-4">
                                                <h5 className="card-title text-dark">E-commerce App</h5>
                                                <p className="card-text text-dark">ShopEase: Your E-commerce Companion
                                                </p>
                                                <button class="button2">Explore</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card2 text-center rounded-3" style={{ height: "29rem", width: "20rem", backgroundColor: "#fff" }}>
                                            <img src="https://cdn.pixabay.com/photo/2020/04/19/15/15/smartphone-5064084_640.jpg" className="card-img-top mx-auto" alt="image 3" style={{ width: "100%", height: "60%", backgroundSize: "contain", borderRadius: "10px 10px 0px 0px" }} />
                                            <div className="card-body mt-4">
                                                <h5 className="card-title text-dark">Real-Time Chat App</h5>
                                                <p className="card-text text-dark">ChatSphere: A Real-Time Chat Application
                                                </p>
                                                <button class="button2">Explore</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card2 text-center" style={{ height: "29rem", width: "20rem", backgroundColor: "#fff" }}>
                                            <img src="https://www.jefit.com/home_page/feature4.png" className="card-img-top mx-auto" alt="image 4" style={{ width: "100%", height: "60%", backgroundSize: "contain", borderRadius: "10px 10px 0px 0px" }} />
                                            <div className="card-body mt-4">
                                                <h5 className="card-title text-dark">Fitness Tracking App</h5>
                                                <p className="card-text text-dark">FitTrack: The Ultimate Fitness Tracker Application
                                                </p>
                                                <button class="button2">Explore</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card2 text-center" style={{ height: "29rem", width: "20rem", backgroundColor: "#fff" }}>
                                            <img src="https://cdn.pixabay.com/photo/2020/05/12/13/49/online-learning-5163107_640.jpg" className="card-img-top mx-auto" alt="image 4" style={{ width: "100%", height: "60%", backgroundSize: "contain", borderRadius: "10px 10px 0px 0px" }} />
                                            <div className="card-body mt-4">
                                                <h5 className="card-title text-dark">Online Learning Platform</h5>
                                                <p className="card-text text-dark">Online Learning Platform
                                                </p>
                                                <button class="button2">Explore</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card2 text-center" style={{ height: "29rem", width: "20rem", backgroundColor: "#fff" }}>
                                            <img src="https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_960_720.jpg" className="card-img-top mx-auto" alt="image 4" style={{ width: "100%", height: "60%", backgroundSize: "contain", borderRadius: "10px 10px 0px 0px" }} />
                                            <div className="card-body mt-4">
                                                <h5 className="card-title text-dark">Event Management App</h5>
                                                <p className="card-text text-dark">ChatSphere: A Real-Time Event Management
                                                </p>
                                                <button class="button2">Explore</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* ----------------------------Our Expertise-------------------------- */}


            {/* ----------------------------Industries We Have Serves-------------------------- */}


            <div className="card-section-bg" data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">
                <section className="container py-5 mt-5">
                    <h2 className="text-center text-primary mb-4 conte-tittle-1">Industries We Have Served</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-4 justify-content-center mt-5">
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

            {/* ----------------------------Industries We Have Serves-------------------------- */}









            {/* --------------------Contact-us-form --------------------- */}
            <div className='container-fluid img-fixed-back'>
                <br />
                <div className="container my-5 contact-us mt-5" data-aos="fade-up"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    <div className="row justify-content-center align-items-center">
                        <h2 className="text-center contact-heading mb-4">Contact Us</h2>

                        <div className="col-lg-5 col-md-6">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input type="text" className="form-control  rounded-1" id="name" placeholder="Enter your name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control rounded-1" id="email" placeholder="Enter your email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Mobile Number</label>
                                    <input type="tel" className="form-control  rounded-1" id="phone" placeholder="Enter your Mobile number" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control rounded-1" id="message" rows={5} placeholder="Type your message here" required defaultValue={""} />
                                </div>
                                <div className='cont-btn'>
                                    <button type="submit" className="btn p-2 text-light">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-4 mt-1">
                            <div>
                                <img src="https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127_960_720.jpg" className="img-fluid rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------------Contact-us-form --------------------- */}







            {/* ----------------------------Blog----------------------- */}
            <div className="blog-section mt-5" data-aos="fade-up"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                <div className='blog-tittle mt-5'>
                    <h1 style={{ color: "#007bff" }}>Blog</h1>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src="https://www.darkbears.com/_next/image?url=https%3A%2F%2Fdarkbearslive.s3.amazonaws.com%2Fblog_image%2Fblog_image-1726131717410-The%2520Evolution%2520of%2520Cybersecurity%2520in%2520the%2520Age%2520of%2520IoT.png&w=640&q=75        " alt="Blog Image 1" className="card-img" />
                        <div className="date-badge">6/12/2024</div>
                        <div className="card-content">
                            <h3 className="card-title">The Evolution of Cybersecurity in the Age of IoT</h3>
                            <p className="card-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio, sit totam ipsum pariatur ex. Earum minus voluptatum ipsa possimus!                            </p>
                            <a href="#" className="read-more">Read More →</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg" alt="Blog Image 2" className="card-img" />
                        <div className="date-badge">6/12/2024</div>
                        <div className="card-content">
                            <h3 className="card-title">The Ultimate Guide to Digital Marketing</h3>
                            <p className="card-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio, sit totam ipsum pariatur ex. Earum minus voluptatum ipsa possimus!
                            </p>
                            <a href="#" className="read-more">Read More →</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://cdn.pixabay.com/photo/2016/11/10/16/18/android-1814600_960_720.jpg" alt="Blog Image 3" className="card-img" />
                        <div className="date-badge">6/12/2024</div>
                        <div className="card-content">
                            <h3 className="card-title">WooCommerce Alternatives to Manage Online Stores</h3>
                            <p className="card-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio, sit totam ipsum pariatur ex. Earum minus voluptatum ipsa possimus!
                            </p>
                            <a href="#" className="read-more">Read More →</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------------------Blog----------------------- */}
            <Footer />
        </div>
    );
}

export default Home;
