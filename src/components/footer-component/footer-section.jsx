export function FooterSection() {
    return (
        <footer className="footer section">

            <div className="footer-top">
                <div className="container">
                    <div className="inner-content">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">

                                <div className="single-footer f-about">
                                    <div className="hero-content">
                                        <h2 className="text-white">
                                            Website Developement Agency
                                        </h2>
                                    </div>
                                    <p>Build a strong online presence with expert web solutions.
                                        Invest in smart technology and grow your business in real time.

                                    </p>
                                    <h4 className="social-title">Follow Us On:</h4>
                                    <ul className="social">
                                        <li><a href="https://www.linkedin.com/in/rajendra-kumar-kushwaha-8584a8271/"><i className="bi bi-linkedin"></i></a></li>
                                        <li><a href="https://www.instagram.com/rajendrakushwaha1732/"><i className="bi bi-instagram"></i></a></li>
                                        <li><a href="https://github.com/RajendraKumarKushwaha/"><i className="bi bi-github"></i></a></li>
                                        <li><a href="mailto:rajendra.k619@gmail.com"><i className="bi bi-envelope"></i></a></li>
                                      
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-2 col-md-6 col-12">

                                <div className="single-footer f-link">
                                    <h3>Company</h3>
                                    <ul>
                                        <li><a className="text-decoration-none" href="#">Home</a></li>
                                        <li><a className="text-decoration-none" href="#">About</a></li>
                                        <li><a className="text-decoration-none" href="#">Projects</a></li>
                                        <li><a className="text-decoration-none" href="#">Contact Us</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-2 col-md-6 col-12">

                                <div className="single-footer f-link">
                                    <h3>Our Services</h3>
                                    <ul>
                                        <li><a className="text-decoration-none" href="#">Website Developement</a></li>
                                        <li><a className="text-decoration-none" href="#">Digital Marketing</a></li>
                                        <li><a className="text-decoration-none" href="#">Web Services</a></li>
                                        <li><a className="text-decoration-none" href="#">Domain Name & Hosting</a></li>
                                        <li><a className="text-decoration-none" href="#">Search Engine Optimization</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 col-12">

                                <div className="single-footer newsletter">
                                    <h3>Subscribe</h3>
                                    <p>Subscribe to our newsletter for the latest updates</p>
                                    <form action="#" method="get" target="_blank" className="newsletter-form">
                                        <input name="EMAIL" placeholder="Email address" required="required" type="email" />
                                        <div className="button">
                                            <button className="sub-btn"><i className="lni lni-envelope"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="inner-content">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <p className="copyright-text">© 2025- All Rights Reserved</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <p className="copyright-owner">Designed and Developed by <a href="#"
                                    rel="nofollow" target="_blank">Rajendra</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}