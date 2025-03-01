
export function ServiceSection() {


  return (
    <div className="services section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow animate__animated animate__zoomIn" data-wow-delay=".2s">What we offer</h3>
              <h2 className=" wow animate__animated animate__fadeInUp" data-wow-delay=".4s">Our Services</h2>
              <p className="wow animate__animated animate__fadeInUp" data-wow-delay=".6s">
              Explore our expert services designed to grow your business and strengthen your online presence.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {[
            { icon: "bi bi-grid", title: "Website Development",para: "Build a fast, user-friendly website that looks great on any device and helps grow your business online." },
            { icon: "bi bi-bar-chart-line", title: "Digital Marketing", para:"Get more visitors, make your brand popular, and turn them into loyal customers with smart digital marketing." },
            { icon: "bi bi-cart", title: "E-commerce Website Design", para: "Create a stylish and easy-to-use online store that helps you sell more and grow your business effortlessly." },
            { icon: "bi bi-code-slash", title: "Web Services", para: "Get reliable web solutions that keep your website running smoothly and help your business grow online." },
            { icon: "bi bi-cloud", title: "Domain Name & Hosting", para: "Secure your perfect domain name and fast, reliable hosting to keep your website online 24/7." },
            { icon: "bi bi-search", title: "SEO", para: "Improve your website’s ranking on Google and attract more visitors with smart SEO strategies." },
          ].map((service, index) => (
            <div className="col-lg-4 col-md-6 col-12 wow animate__animated animate__fadeInUp" data-wow-delay={`${0.2 * (index + 1)}s`} key={index}>
              <div className="single-service">
                <div className="main-icon">
                  <i className={`lni ${service.icon}`}></i>
                </div>
                <h4 className="text-title">{service.title}</h4>
                <p>{service.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
