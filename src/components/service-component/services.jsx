import { CommonPage } from "../common-page/common-page";

export function Service() {
    const services = [
      { icon: "bi bi-laptop", title: "Website Design", para: "Modern, responsive, and visually stunning websites that attract customers and elevate your brand." },
      { icon: "bi bi-code-slash", title: "Website Development", para: "Custom-built websites with seamless functionality and fast performance for the best user experience." },
      { icon: "bi bi-basket", title: "E-Commerce Solutions", para: "Launch a powerful online store with secure payment gateways, product management, and a smooth checkout process." },
      { icon: "bi bi-credit-card", title: "Payment Gateway Integration", para: "Secure and seamless payment integration for hassle-free online transactions on your website." },
      { icon: "bi bi-search", title: "SEO & Digital Marketing", para: "Boost your website's ranking on Google and drive organic traffic with smart marketing strategies." },
      { icon: "bi bi-cloud-arrow-up", title: "Domain & Hosting Services", para: "Get your domain name and reliable hosting for a smooth and uninterrupted online presence." }
    ];
  
    return (
      <section>
         <div>
                        <CommonPage title="Services" para="Great ideas start with a conversation. Reach out, and let’s chat!" />
                    </div>
        <div className="container section">
          <div className="text-center mb-5">
            <h3 className="fw-bold text-primary">What We Offer</h3>
            <h2 className="fw-bold">Our Services</h2>
            <p className="text-muted">We provide cutting-edge web solutions to help your business grow online.</p>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card border-0 shadow p-4 text-center bg-white h-100">
                  <div className="icon-box mb-3">
                    <i className={`${service.icon} text-primary display-4`}></i>
                  </div>
                  <h4 className="fw-bold">{service.title}</h4>
                  <p className="text-muted">{service.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  