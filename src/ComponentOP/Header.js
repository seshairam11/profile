import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const handleScroll = () => {
        const navbar = document.querySelector('#marker');
        if (window.scrollY > 130) {
            console.log("Scroll position:", window.scrollY);
            if (navbar) {
                navbar.classList.add('navbar-shrink');
            }
        } else {
            console.log("Scroll position: good");
            if (navbar) {
                navbar.classList.add('navbar-shrink');
            }
        }
    };
    const handleScrolling = (num) => {
        console.log("Scrolling to:", num);
        window.scrollTo({
            top: num,
            behavior: 'smooth' // for smooth scrolling
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header>
            <nav id='marker' className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand page-scroll">Profile</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="hidden active">
                                <Link to="/"></Link>
                            </li>
                            <li><Link onClick={(e)=>handleScrolling(655)} className="page-scroll">About</Link></li>
                            <li><Link to="#services" className="page-scroll">Services</Link></li>
                            <li><Link to="#portfolio" className="page-scroll">Portfolio</Link></li>
                            <li><Link to="#resume" className="page-scroll">Resume</Link></li>
                            <li><Link to="#contact" className="page-scroll">Contact</Link></li>
                            <li><Link to="#skills" className="page-scroll">Skills</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
