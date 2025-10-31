import { useEffect, useState } from 'react';
import "../Styles/navbar.css";

export function StickyNavbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isSticky ? 'navbar-sticky' : 'navbar-relative'}`}>
      <div className="navbar-container">
        <div className="navbar-buttons">
          <button className="navbar-button" onClick={() => scrollToSection('section')}>
            About
          </button>
          <button className="navbar-button" onClick={() => scrollToSection('section2')}>
            Key Terms
          </button>
          <button className="navbar-button" onClick={() => scrollToSection('section4')}>
            Stories
          </button>
          <button className="navbar-button" onClick={() => scrollToSection('section5')}>
            Reflection
          </button>
          <button className="navbar-button" onClick={() => scrollToSection('section3')}>
            References
          </button>
        </div>
      </div>
    </nav>
  );
}
