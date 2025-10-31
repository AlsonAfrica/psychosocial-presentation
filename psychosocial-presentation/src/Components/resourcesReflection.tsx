// import React from 'react';
import '../Styles/resourcesReflection.css';


export function ContentSection() {
  return (
    <section className="content-section">
      <div className="content-container">
        <div className="content-grid">
          {/* Left Card - About this project */}
          <div className="content-card">
            <div className="card-header">
              <h2 className="card-title">About this project</h2>
            </div>
            <div className="card-content">
              <p>
                This website is the creative output for a Community Psychology Honours project which explores racism and
                xenophobia in South Africa. It combines scholarly theory, government and civil-society reports, and
                first-person narratives to:
              </p>
              <ul className="card-list">
                <li>Explain the ways in which racism and xenophobia operates in South African social life</li>
                <li>Demonstrate interventions and organisations that are striving to reduce harm</li>
                <li>Share practical tools for students and community actors to act ethically and effectively</li>
              </ul>
            </div>
          </div>

          {/* Right Card - Theoretical frame */}
          <div className="content-card">
            <div className="card-header">
              <h2 className="card-title">Theoretical frame</h2>
            </div>
            <div className="card-content">
              <p>
                This project applies the Community Psychology value-based praxis model (Riemer, 2020), which focuses on
                power, participation, and dissemination. Guided by these principles, the project centres affected
                voices, examines who benefits when stories are told, and promotes collective action for justice.
              </p>
              <p>
                For an overview of these value-based approaches, see:{" "}
                <a
                  href="https://www.proquest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  ProQuest Ebook Central - Book Details
                </a>
              </p>
              <div className="card-footer">
                <p>
                  <strong>Psychology Honours Student:</strong> Lerato Nkosi (24894583)
                </p>
                <p>
                  <strong>Module:</strong> Community Psychology 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}