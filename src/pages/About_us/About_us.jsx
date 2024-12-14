import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Header_2 from '../../components/HeaderScroll/Header_2';
import '../About_us/About.css'

function About_us() {
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

                <div className="about-tittle  ms-3 mt-5">
                    <h4 className='about-tittle'>About Us</h4>
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


            <div >
                <section className="guiding-principles text-center py-5" >
                    <div className="container">
                        <h2 className="fw-bold text-primary guiding-tittle">Guiding Principles</h2>
                        <p className="text-light mt-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt at explicabo suscipit molestiae <br /> vel possimus atque assumenda harum, officia deleniti.
                        </p>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="p-5 border-1 rounded shadow-sm-1">
                                    <i className="bi bi-people-fill fs-1" />
                                    <h5 className="mt-3">We Value Our Clients</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-5 border-1 rounded shadow-sm-2">
                                    <i className="bi bi-check-circle-fill fs-1" />
                                    <h5 className="mt-3">We Believe In Quality</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-5 border-1 rounded shadow-sm-3">
                                    <i className="bi bi-people fs-1" />
                                    <h5 className="mt-3">We Value Our People</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


            <div style={{backgroundColor:"black"}}>
                <section className="about-us-section py-5" data-aos="fade-up"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-1 order-2">
                                <h2 className="mb-4 tittle-heading" >Why Choose Accel ?</h2>
                                <p className="mb-3 text-light">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus excepturi ex est blanditiis molestias, ab vitae sit amet perferendis, atque odio repudiandae quidem incidunt tempore distinctio, rerum inventore alias?
                                </p>
                                <p className='text-light'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore voluptates amet aspernatur quidem autem, aut voluptatibus dicta cupiditate quas? Reprehenderit beatae et, veritatis harum accusantium iusto voluptate recusandae culpa!
                                </p>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 text-center about-img">
                                <img src="https://www.darkbears.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAbout-support-services.c68b7684.png&w=1080&q=75" className="img-fluid img-animate" alt="About Us Image" />
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="employee-slider py-5" data-aos="fade-up"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    <div className="container">
                        <h2 className="text-center fw-bold mb-4 text-light">Our Team</h2>
                        <div id="employeeCarousel" className="carousel slide" data-bs-ride="carousel">
                            <button className="carousel-control-prev " type="button" data-bs-target="#employeeCarousel" data-bs-slide="prev" >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#employeeCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card text-center bg-dark" style={{ height: "18rem" }}>
                                                <img src="https://cdn.pixabay.com/photo/2024/04/13/14/49/portrait-8694041_960_720.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Employee 1" style={{ width: 120, height: 120, objectFit: 'cover' }} />
                                                <div className="card-body">
                                                    <h5 className="card-title text-light">John Doe</h5>
                                                    <p className="card-text text-light">Software Engineer</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card text-center bg-dark" style={{ height: "18rem" }}>
                                                <img src="https://cdn.pixabay.com/photo/2024/02/19/09/53/ai-generated-8583048_640.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Employee 2" style={{ width: 120, height: 120, objectFit: 'cover' }} />
                                                <div className="card-body">
                                                    <h5 className="card-title text-light">Jane Smith</h5>
                                                    <p className="card-text text-light">UI/UX Designer</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card text-center bg-dark" style={{ height: "18rem" }}>
                                                <img src="https://cdn.pixabay.com/photo/2023/06/10/07/18/business-8053376_640.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Employee 3" style={{ width: 120, height: 120, objectFit: 'cover' }} />
                                                <div className="card-body">
                                                    <h5 className="card-title text-light">Michael Brown</h5>
                                                    <p className="card-text text-light">Product Manager</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card text-center bg-dark" style={{ height: "18rem" }}>
                                                <img src="https://cdn.pixabay.com/photo/2023/06/09/08/25/ai-generated-8051239_640.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Employee 4" style={{ width: 120, height: 120, objectFit: 'cover' }} />
                                                <div className="card-body">
                                                    <h5 className="card-title text-light">Sarah Wilson</h5>
                                                    <p className="card-text text-light">HR Manager</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card text-center bg-dark" style={{ height: "18rem" }}>
                                                <img src="https://i.pinimg.com/736x/cc/ae/4b/ccae4bc8117c4833fd9cd17468657016.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Employee 5" style={{ width: 120, height: 120, objectFit: 'cover' }} />
                                                <div className="card-body">
                                                    <h5 className="card-title text-light">Emily Davis</h5>
                                                    <p className="card-text text-light">Marketing Specialist</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card text-center bg-dark" style={{ height: "18rem" }}>
                                                <img src="https://i.pinimg.com/736x/db/e0/d3/dbe0d309ff9b7f2b12c2a55ff6ea422a.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Employee 6" style={{ width: 120, height: 120, objectFit: 'cover' }} />
                                                <div className="card-body">
                                                    <h5 className="card-title text-light">Chris Lee</h5>
                                                    <p className="card-text text-light">DevOps Engineer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default About_us