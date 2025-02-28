import { useState } from "react";
import { Link } from "react-router-dom";

export function HeaderSection() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const [isBlogOpen, setIsBlogOpen] = useState(false);

    return (
        <header className="header navbar-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="nav-inner">
                            {/* Navbar */}
                            <nav className="navbar navbar-expand-lg">
                                {/* Logo */}
                                <Link className="navbar-brand" to="/">
                                    <img src="/images/logo/white-logo.svg" alt="Logo" />
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
                                        <li className="nav-item">
                                            <Link to="/" className="active">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about-us">About</Link>
                                        </li>

                                        {/* Pages Dropdown */}
                                        <li className="nav-item">
                                            <a href="#" className={`dd-menu ${isPagesOpen ? "" : "collapsed"}`} onClick={() => setIsPagesOpen(!isPagesOpen)} aria-expanded={isPagesOpen}>
                                                Pages
                                            </a>
                                            <ul className={`sub-menu collapse ${isPagesOpen ? "show" : ""}`} id="submenu-1-1">
                                                <li className="nav-item"><Link to="/about-us">About Us</Link></li>
                                                <li className="nav-item"><Link to="/pricing">Our Pricing</Link></li>
                                                <li className="nav-item"><Link to="/signin">Sign In</Link></li>
                                                <li className="nav-item"><Link to="/signup">Sign Up</Link></li>
                                                <li className="nav-item"><Link to="/reset-password">Reset Password</Link></li>
                                                <li className="nav-item"><Link to="/mail-success">Mail Success</Link></li>
                                                <li className="nav-item"><Link to="/404">404 Error</Link></li>
                                            </ul>
                                        </li>

                                        {/* Blog Dropdown */}
                                        <li className="nav-item">
                                            <a href="#" className={`dd-menu ${isBlogOpen ? "" : "collapsed"}`} onClick={() => setIsBlogOpen(!isBlogOpen)} aria-expanded={isBlogOpen}>
                                                Blog
                                            </a>
                                            <ul className={`sub-menu collapse ${isBlogOpen ? "show" : ""}`} id="submenu-1-2">
                                                <li className="nav-item"><Link to="/blog-grid">Blog Grid</Link></li>
                                                <li className="nav-item"><Link to="/blog-single">Blog Single</Link></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Get Started Button */}
                                <div className="button">
                                    <Link to="/signup" className="btn">Get started</Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
