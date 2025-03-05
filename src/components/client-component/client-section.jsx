import { CommonPage } from "../common-page/common-page";
import "./client-section.css";

export function ClientSection() {
    const clients = [
        {
            name: "Memories World",
            image: "/images/memories.jpeg", // Add the correct image path
            link: "https://memoriesworld.site",
            description: "We developed this website using React for a fast and responsive experience.",
            technologies: "React, Bootstrap, Firebase",
            features: ["Fast & Responsive", "SEO Optimized", "Mobile-Friendly"]
        },
        {
            name: "EVFix Garaz",
            image: "/images/evfix.jpeg", // Add the correct image path
            link: "https://evfix.in",
            description: "This platform helps users find the best EV service stations.",
            technologies: "React, Node.js, MongoDB",
            features: ["User-Friendly Interface", "Location-Based Search", "Optimized Performance"]
        },
        {
            name: "Urmila Metals",
            image: "/images/window.jpeg", // Add the correct image path
            link: "https://hardwaremetals.vercel.app/",
            description: "An online catalog showcasing high-quality window and door products.",
            technologies: "React, Tailwind CSS, Vercel",
            features: ["Product Showcase", "Smooth User Experience", "Fast Loading"]
        }
    ];

    return (
        <section className="client-section ">
            <div>
                <CommonPage title="Building Digital Success" para="We take pride in delivering high-quality websites that help businesses grow and thrive." />
            </div>
            <div className="container section text-center">
                <h2 className="fw-bold mb-4">Our Trusted Clients</h2>
                <p className="text-muted mb-5">We have helped businesses grow and establish their online presence.</p>
                <div className="row justify-content-center">
                    {clients.map((client, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4">
                            <div className="client-box position-relative overflow-hidden">
                                <img src={client.image} alt={client.name} className="img-fluid w-100 object-fit-fill client-image" />
                                <div className="client-overlay mt-5 d-flex align-items-center justify-content-center flex-column">
                                    <h4 className="text-muted fw-bold">{client.name}</h4>
                                    <p className="text-muted text-center px-3">{client.description}</p>
                                    <p className="text-muted"><strong>Technologies:</strong> {client.technologies}</p>
                                    <ul className="text-muted text-center px-3">
                                        {client.features.map((feature, idx) => (
                                            <li key={idx}>✅ {feature}</li>
                                        ))}
                                    </ul>
                                    <a href={client.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2 d-inline-block px-4 py-2 text-white text-decoration-none rounded mt-2">Visit Website</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-5">
                    <h3 className="fw-bold">Want a website like this?</h3>
                    <p className="text-muted">Let’s build something amazing together!</p>
                    <a href="#contact" className="btn btn-primary">Get a Free Consultation</a>
                </div>
            </div>
        </section>
    );
}
