import { useState } from "react";
import { CommonPage } from "../common-page/common-page";
import Swal from 'sweetalert2';
export function ContactSection() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
       

        formData.append("access_key", "d7811bbb-ff23-4568-82ab-027d417236b4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Successfully!",
                text: "Message sent successfully!",
                icon: "success"
            });
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div>
            <div>
                <CommonPage title="Contact us" para="Great ideas start with a conversation. Reach out, and let’s chat!" />
            </div>
            <div className="container section">
                <div className="row">
                    <div className="col-lg-6 col-md-12 d-flex flex-column gap-4">
                        <div>
                            <h3 className="heading-3">Lets's Talk</h3>
                            <p>Feel free to reach out to us. We're here to help!</p>

                        </div>


                        <div>
                            <h5>Call us</h5>
                            <p><a className="text-decoration-none text-black" href="tel:9179644717"> +919179644717</a></p>
                        </div>

                        <div>
                            <h5>Email us</h5>
                            <p>rajendra.k619@mail.com</p>
                           
                        </div>

                        <div>
                            <h5>Our Address</h5>
                            <p>Near Panchmatha Mandir Ghat
                             </p>
                            <p>Ghoghar, Rewa, Madhya Pradesh 486001</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className=" flex-column flex-md-row contact-container">
                            <div className="contact-form ">
                                <form onSubmit={onSubmit} className="border border-1 p-3">
                                    <h3 className=" text-center">Get in Touch</h3>
                                    <dl>
                                        <dt className="form-label para">Name</dt>
                                        <dd><input type="text" name="name" placeholder="Your Name" required className="form-control" /></dd>
                                        <dt className="form-label para" >Email</dt>
                                        <dd><input type="email" name="email" placeholder="Your Email" required className="form-control" /></dd>
                                        <dt className="form-label para" >Mobile</dt>
                                        <dd><input type="number" name="mobile" placeholder="Your Number" required className="form-control" /></dd>
                                        <dt className="form-label para">Interested in</dt>
                                        <dd>
                                            <select name="interest" required className="form-control">
                                                <option value="" disabled selected>Select an option</option>
                                                <option value="Website Design">Website Design</option>
                                                <option value="Website Development">Website Development</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                            </select>
                                        </dd>
                                        <dt className="form-label para">Message</dt>
                                        <dd><textarea id="message" name="message" rows="4" placeholder="Your Message" required className="form-control"></textarea></dd>
                                    </dl>
                                    <button className="btn btn-primary button">Send</button>
                                </form>


                            </div>

                        </div>
                    </div>

                </div>
                <div className="mt-100" style={{ height: "400px", width: "100%" }}>
                    <iframe
                        style={{ height: "100%", width: "100%", border: "0" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.7249570318586!2d81.28159377412868!3d24.529597858419315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39845b85485218df%3A0x215554915de263fb!2sPanchmatha%20Mandir%20Ghat!5e0!3m2!1sen!2sin!4v1733999723411!5m2!1sen!2sin">
                    </iframe>
                </div>
            </div>


        </div>
    )
}