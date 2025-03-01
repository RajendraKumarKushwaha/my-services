export function AboutSection(){
    return(
        <section className="about section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                    <div className="image wow animate__animated animate__fadeInLeft" data-wow-delay=".2s">
                        <img src="/images/about/about-image.jpg" alt="#"/>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="content wow animate__animated animate__fadeInRight" data-wow-delay=".4s">
                        <h4>DECENTRALISED ECONOMY</h4>
                        <h2>From Ideas to Impact – We Make It Happen!</h2>
                        <p>We turn your vision into reality with stunning websites, powerful branding, and smart digital solutions. Whether you're starting fresh or scaling up, we help you grow and succeed online!</p>
                        <div className="list">
                            <div className="single-list">
                                <div className="list-icon">
                                    <i className="lni lni-checkmark"></i>
                                </div>
                                <h4>Website Development</h4>
                                <p>Build a fast, modern, and user-friendly website that helps your business grow online.</p>
                            </div>
                            <div className="single-list">
                                <div className="list-icon">
                                    <i className="lni lni-checkmark"></i>
                                </div>
                                <h4>Digital Marketing</h4>
                                <p>Boost your brand’s reach, attract more customers, and grow your business with smart digital marketing strategies.</p>
                            </div>
                            <div className="single-list">
                                <div className="list-icon">
                                    <i className="lni lni-checkmark"></i>
                                </div>
                                <h4>SEO</h4>
                                <p>Improve your website’s ranking, get more traffic, and grow your business with effective SEO strategies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
} 