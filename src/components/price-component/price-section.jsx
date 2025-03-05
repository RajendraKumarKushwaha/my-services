import { CommonPage } from "../common-page/common-page";

export function PriceSection() {
    return (
        <section>
            <div>
                <CommonPage title="Affordable Pricing Plans" para="Choose the best plan that suits your business needs." />
            </div>
            <div className="section">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-lg-8 text-center">
                            <h2 className="fw-bold">Flexible Plans for Every Business</h2>
                            <p className="text-muted">Great ideas start with a conversation. Reach out, and let’s chat!" </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        {/* Basic Plan */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card border-0 shadow text-center p-4">
                                <h4 className="fw-bold">Basic</h4>
                                <p className="text-muted">For small businesses</p>
                                <h3 className="fw-bold">Rs. 500<span className="text-muted fs-6">/one-time</span></h3>
                                <ul className="list-unstyled my-3">
                                    <li>✔ 1 Page Website</li>
                                    <li>✔ Mobile Responsive</li>
                                    <li>✔ Basic SEO</li>
                                    <li>✖ No Custom Features</li>
                                </ul>
                                <a href="#" className="btn btn-primary w-100">Get Started</a>
                            </div>
                        </div>

                        {/* Standard Plan */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card border-0 shadow-lg text-center p-4">
                                <h4 className="fw-bold">Standard</h4>
                                <p className="text-muted">For growing businesses</p>
                                <h3 className="fw-bold">Rs. 5000<span className="text-muted fs-6">/one-time</span></h3>
                                <ul className="list-unstyled my-3">
                                    <li>✔ Up to 5 Pages</li>
                                    <li>✔ Mobile Responsive</li>
                                    <li>✔ SEO Optimization</li>
                                    <li>✔ Contact Form</li>
                                </ul>
                                <a href="#" className="btn btn-primary w-100">Get Started</a>
                            </div>
                        </div>

                        {/* Premium Plan */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card border-0 shadow text-center p-4">
                                <h4 className="fw-bold">Premium</h4>
                                <p className="text-muted">For established businesses</p>
                                <h3 className="fw-bold">Custom Price<span className="text-muted fs-6">/one-time</span></h3>
                                <ul className="list-unstyled my-3">
                                    <li>✔ Custom Pages</li>
                                    <li>✔ Advanced SEO & Speed Optimization</li>
                                    <li>✔ E-commerce Features</li>
                                    <li>✔ Custom Integrations</li>
                                </ul>
                                <a href="#" className="btn btn-primary w-100">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
