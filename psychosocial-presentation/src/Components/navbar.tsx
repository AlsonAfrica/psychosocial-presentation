import { useEffect, useState } from 'react';
// import './StickyNavbar.css';
import "../Styles/navbar.css"

export function StickyNavbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Make navbar sticky after scrolling past the hero section
      setIsSticky(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${isSticky ? 'navbar-sticky' : 'navbar-relative'}`}
    >
      <div className="navbar-container">
        <div className="navbar-buttons">
          <button className="navbar-button">
            About
          </button>
          <button className="navbar-button">
            Resources
          </button>
          <button className="navbar-button">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}