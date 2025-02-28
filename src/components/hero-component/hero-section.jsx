export function HeroSection() {
   
    return (
        <section className="hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="hero-content">
                            <h4 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                                We Are Creative Digital Agency
                            </h4>
                            <h1 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                                Strategic Concepts For Businesses.
                            </h1>
                            <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                                Invest your spare change in Bitcoin and save with
                                <br /> crypto to earn interest in real time.
                            </p>
                            <div className="button wow animate__animated animate__fadeInUp" data-wow-delay="0.8s">
                                <a href="about-us.html" className="btn">
                                    Discover More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="hero-image " data-wow-delay="1s">
                            <img
                                className="main-image"
                                src="/images/hero/hero-image.png" 
                                alt="Hero Section"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
