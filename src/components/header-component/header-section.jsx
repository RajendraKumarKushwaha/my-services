import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export function HeaderSection({ setIsOpen }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const [isSticky, setIsSticky] = useState(false);
    const [textColor, setTextColor] = useState("white");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0.5) {
                setTextColor("black")
                setIsSticky(true);
            } else {
                setIsSticky(false);
                setTextColor("white")
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`header navbar-area ${isSticky ? "sticky" : ""}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="nav-inner">
                            {/* Navbar */}
                            <nav className="navbar navbar-expand-lg">
                                {/* Logo */}
                                <Link className="navbar-brand" to="/">
                                    {/* <img src="/images/logo/white-logo.svg" alt="Logo" /> */}
                                    <h2 style={{ color: textColor }}>Rajendra</h2>
                                </Link>

                                {/* Mobile Menu Toggle */}
                                <button
                                    className="navbar-toggler mobile-menu-btn"
                                    type="button"
                                    onClick={() => setIsNavOpen(!isNavOpen)}
                                    aria-expanded={isNavOpen}
                                    aria-label="Toggle navigation"
                                >
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>

                                {/* Navbar Links */}
                                <div className={`collapse navbar-collapse sub-menu-bar ${isNavOpen ? "show" : ""}`} id="navbarSupportedContent">
                                    <ul id="nav" className="navbar-nav ms-auto">
                                        <li className="nav-item ">
                                            <Link to="/" className="active text-decoration-none">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about-us" className="text-decoration-none">About</Link>
                                        </li>

                                        {/* Pages Dropdown */}
                                        {/* <li className="nav-item">
                                            <a href="#" className={` text-decoration-none dd-menu ${isPagesOpen ? "" : "collapsed"}`} onClick={() => setIsPagesOpen(!isPagesOpen)} aria-expanded={isPagesOpen}>
                                                Pages
                                            </a>
                                            <ul className={`sub-menu collapse ${isPagesOpen ? "show" : ""}`} id="submenu-1-1">
                                                <li className="nav-item"><Link className="text-decoration-none" to="/about-us">About Us</Link></li>
                                                <li className="nav-item"><Link className="text-decoration-none" to="/pricing">Our Pricing</Link></li>
                                                <li className="nav-item"><Link className="text-decoration-none" to="/signin">Sign In</Link></li>
                                                <li className="nav-item"><Link className="text-decoration-none" to="/signup">Sign Up</Link></li>
                                                <li className="nav-item"><Link className="text-decoration-none" to="/reset-password">Reset Password</Link></li>
                                                <li className="nav-item"><Link className="text-decoration-none" to="/mail-success">Mail Success</Link></li>
                                                <li className="nav-item"><Link className="text-decoration-none" to="/404">404 Error</Link></li>
                                            </ul>
                                        </li> */}

                                        {/* Blog Dropdown */}
                                        {/* <li className="nav-item">
                                            <a href="#" className={`text-decoration-none dd-menu ${isBlogOpen ? "" : "collapsed"}`} onClick={() => setIsBlogOpen(!isBlogOpen)} aria-expanded={isBlogOpen}>
                                                Blog
                                            </a>
                                            <ul className={`sub-menu collapse ${isBlogOpen ? "show" : ""}`} id="submenu-1-2">
                                                <li className="nav-item"><Link className="text-decoration-none" to="/blog-grid">Blog Grid</Link></li>
                                                <li className="nav-item"><Link className="text-decoration-none" to="/blog-single">Blog Single</Link></li>
                                            </ul>
                                        </li> */}
                                        <li className="nav-item">
                                            <Link className="text-decoration-none" to="/services">Services</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="text-decoration-none" to="/price">Our Price</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="text-decoration-none" to="/contact-us">Contact</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="text-decoration-none" to="/client">Client</Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Get Started Button */}
                                {/* <div className="button">
                                    <Link to="/" className="btn">Get started</Link>
                                </div> */}
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(true)}
                                    className="btn btn-primary"
                                    aria-label="Request a quote"
                                >
                                    Request a Quote
                                </button>

                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

HeaderSection.propTypes = {
    setIsOpen: PropTypes.func.isRequired, // Ensures setIsOpen is a function and required
};


HeaderSection.defaultProps = {
    setIsOpen: () => { }, // Default to an empty function if no prop is provided
};
