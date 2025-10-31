// import {React} from 'react';
import '../Styles/heroSection.css';
// import communityImage from "../Images/diverse-community-solidarity-south-africa.jpg"
import heroImage from "../assets/heroImage.jpg"

export function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background Image with Overlay */}
      <div
        className="hero-background"
        style={{
          backgroundImage:
            `url(${heroImage})`,
        }}
      >
        <div className="hero-overlay" />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          A community-psychology honours project using lived narratives, practical tools and research to understand and
          interrupt racialised scapegoating and exclusion
        </h1>
        {/* <button className="hero-button">
          Explore the Project
        </button> */}
      </div>
    </section>
  );
}