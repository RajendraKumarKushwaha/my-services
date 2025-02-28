
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
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {[
            { icon: "lni-grid-alt", title: "Brand Identity Design" },
            { icon: "lni-keyword-research", title: "Digital Marketing" },
            { icon: "lni-vector", title: "Design and Development" },
            { icon: "lni-book", title: "IT Consulting Service" },
            { icon: "lni-cloud-network", title: "Cloud Computing" },
            { icon: "lni-display-alt", title: "Graphics Design" },
          ].map((service, index) => (
            <div className="col-lg-4 col-md-6 col-12 wow animate__animated animate__fadeInUp" data-wow-delay={`${0.2 * (index + 1)}s`} key={index}>
              <div className="single-service">
                <div className="main-icon">
                  <i className={`lni ${service.icon}`}></i>
                </div>
                <h4 className="text-title">{service.title}</h4>
                <p>Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
