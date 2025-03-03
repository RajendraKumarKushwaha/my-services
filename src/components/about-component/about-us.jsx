import { CommonPage } from "../common-page/common-page";

export function AboutUs() {
    return (
        <section>
            {/* Hero Section */}
            {/* <div className="hero-area text-center text-white py-5" style={{
                background: "url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1600') center/cover",
                minHeight: "50vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <h1 className="fw-bold display-4">About Us</h1>
            </div> */}
             <div>
                <CommonPage title="About us" para="Great ideas start with a conversation. Reach out, and let’s chat!" />
            </div>

            {/* About Section */}
            <div className="section container my-5">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                    <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Our Team" className="img-fluid rounded shadow" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="fw-bold">We Build Websites That Convert</h2>
                        <p className="text-muted">
                            Welcome to our web development agency! We craft **high-performance websites** 
                            using the latest technologies like **React.js** to ensure **speed, scalability, and seamless user experience**.
                        </p>
                        <p className="text-muted">
                            With a team of expert developers and designers, we help businesses establish 
                            a **strong online presence** with responsive and engaging websites.
                        </p>
                    </div>
                </div>
            </div>

            {/* React Benefits Section */}
            <div className="container py-5 bg-light">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h2 className="fw-bold">Why React for Your Website?</h2>
                        <ul className="list-unstyled text-muted">
                            <li>🚀 **Blazing Fast Performance** – React ensures smooth & fast-loading websites.</li>
                            <li>🔄 **Reusable Components** – Faster development and easy maintenance.</li>
                            <li>📱 **Mobile-Friendly & Responsive** – Websites look great on any device.</li>
                            <li>🔒 **SEO-Friendly** – Optimized for search engines to boost your online presence.</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                    <img src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600" alt="React Benefits" className="img-fluid rounded shadow" />
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center py-5 bg-dark text-white">
                <h2 className="fw-bold">Let's Build Something Amazing Together!</h2>
                <p className="text-muted">Get in touch to discuss your project and bring your ideas to life.</p>
                <a href="/contact-us" className="btn btn-primary px-4 py-2">Contact Us</a>
            </div>
        </section>
    );
}
