// componentboiler plate
import React from 'react';
import '../Styles/heroSection.css';
import { Volume2, Handshake, Globe } from "lucide-react";

const HeroSection: React.FC = () => {

    const features = [
    { icon: <Volume2 size={40} />, title: "Power & Voice" },
    { icon: <Handshake size={40} />, title: "Participatory Practice" },
    { icon: <Globe size={40} />, title: "Dissemination & Stakeholders" },
  ];

    return (
        <section className="hero-section">
            <div className="container-one">
                <p className='title'>
                    A community psychology honours project using research, lived stories
                    and practical tools to understand and interrupt racialised scapegoating
                    and exclusion
                </p>
                <div className='hero-buttons'>
                    <button className='hero-button-1'>Explore the Project</button>
                    <button className='hero-button-2'>Meet the Team</button>
                </div>
            </div>

            <div className="container-two">
                {/* create a navbar */}
                <nav className="hero-navbar">
                    <ul className="hero-nav-links">
                        <li><a href="#section1">About</a></li>
                        <li><a href="#section2">Theory</a></li>
                        <li><a href="#section3">Intervention</a></li>
                        <li><a href="#section4">Stories</a></li>
                        <li><a href="#section5">Resources</a></li>
                        <li><a href="#section6">Accessibility</a></li>
                    </ul>
                </nav>

            </div>

            <div className="container-three">

                <div className='about-container'>

                    <div className='about-content'>
                        <h2 className='about-heading'>About the Project</h2>
                        <p className='about-text'>
                            A communicative creative output reigned for a community psychology honours project 
                            using research, lived stories, and practical tools to understand and interrupt 
                            racialised scapegoating and exclusion.
                        </p>
                    </div>

                     <div className='about-content-objectives'>
                        <ul className='about-objectives-list'>
                            <li>Explain how racism and xenophobia operate in South African social life,</li>
                            <li>Showcase interventions and organisations addressing these issues, and</li>
                            <li>Share tools for ethical and effective community action.</li>
                        </ul>
                    </div>

                </div>

                <div className='student-container'>
                    <div className="student-card-container">
                        {/* Create a student card */}
                        <div className="student-card">
                            <h3 className='student-name'>Lerato Nkosi</h3>
                            <p className='student-number'>Student No. 2009-283</p>
                            <p className='student-subject'>Community Psychology 14</p>
                            <p className='student-professor'>Professor Carolissen</p>
                            <p className='student-year'>2003</p>
                        </div>
                    </div>
                    <div className="vitals-container">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                            {feature.icon}
                            <p>{feature.title}</p>
                            </div>
                        ))}
                    </div>


                </div>
            </div>

        </section>
    );
}

export default HeroSection;