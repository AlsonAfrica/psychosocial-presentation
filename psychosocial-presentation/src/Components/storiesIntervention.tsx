// import React from 'react';
import '../Styles/storiesIntervention.css';

export function StoriesInterventionsSection() {
  return (
    <section className="stories-section">
      <div className="stories-container">
        {/* Section Header */}
        <div className="stories-header">
          <h2 className="stories-main-title">
            Human Stories, Institutional Responses, and Community Practice
          </h2>
          <div className="stories-divider"></div>
        </div>

        {/* Story Cards */}
        <div className="mb-20">
          <h3 className="stories-section-title">Human Stories</h3>
          <div className="stories-cards-container">
            {/* Story Card 1 - Displacement */}
            <div className="stories-card">
              <div className="stories-card-header">
                <div className="stories-card-header-flex">
                  <div className="stories-number-badge">
                    <span>1</span>
                  </div>
                  <h4 className="stories-card-title">Displacement, Loss, and Fear</h4>
                </div>
              </div>
              <div className="stories-card-content">
                <p className="stories-text">
                  Human Rights Watch documents survivors' accounts of looting, displacement, and long-term instability
                  during xenophobic attacks. Communities targeted non-nationals, forcing families to flee with almost
                  nothing. HRW emphasises how inflammatory rhetoric escalates tensions and calls for coordinated
                  protection systems.
                </p>
                <blockquote className="stories-quote">
                  "They have robbed me of my life."
                  <footer className="stories-quote-footer">— Survivor, HRW (2020)</footer>
                </blockquote>
                <div className="stories-psych-box">
                  <p className="stories-psych-title">Community Psychology Link:</p>
                  <p className="stories-psych-text">
                    Highlights how loss of safety and belonging erodes empowerment which is a reminder that structural
                    protection is essential to restoring agency.
                  </p>
                </div>
                <a
                  href="https://www.hrw.org/report/2020/09/17/they-have-robbed-me-my-life/xenophobic-violence-against-non-nationals-south"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stories-link"
                >
                  Read Full Report →
                </a>
              </div>
            </div>

            {/* Story Card 2 - Everyday Racism */}
            <div className="stories-card">
              <div className="stories-card-header">
                <div className="stories-card-header-flex">
                  <div className="stories-number-badge">
                    <span>2</span>
                  </div>
                  <h4 className="stories-card-title">Everyday Racism: Microaggressions and Identity</h4>
                </div>
              </div>
              <div className="stories-card-content">
                <p className="stories-text">
                  Accounts in <em>The Narratives of Racism in South Africa</em> show that racism often manifests
                  subtly through microaggressions in the form of being assumed less capable or excluded from
                  belonging. These cumulative invalidations harm confidence and wellbeing, linking everyday experience
                  to structural inequalities.
                </p>
                <blockquote className="stories-quote">
                  "Racism is alive and well in contemporary South Africa."
                  <footer className="stories-quote-footer">— April (2021)</footer>
                </blockquote>
                <div className="stories-psych-box">
                  <p className="stories-psych-title">Community Psychology Link:</p>
                  <p className="stories-psych-text">
                    Demonstrates how everyday oppression sustains systemic inequality. Therefore, change requires
                    community-level dialogue and reflexive education.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Card 3 - Workplace Exclusion */}
            <div className="stories-card">
              <div className="stories-card-header">
                <div className="stories-card-header-flex">
                  <div className="stories-number-badge">
                    <span>3</span>
                  </div>
                  <h4 className="stories-card-title">Workplace Exclusion and Atypicality</h4>
                </div>
              </div>
              <div className="stories-card-content">
                <p className="stories-text">
                  April (2021) documents exclusion in professional spaces where people of colour are treated as
                  "tokens." Participants describe emotional exhaustion and blocked mobility, revealing the limits of
                  diversity rhetoric without institutional change.
                </p>
                <blockquote className="stories-quote">
                  "Every day I have to deal with people who don't want me in those spaces…"
                  <footer className="stories-quote-footer">— African Black male lamented</footer>
                </blockquote>
                <div className="stories-psych-box">
                  <p className="stories-psych-title">Community Psychology Link:</p>
                  <p className="stories-psych-text">
                    Shows how psychosocial wellbeing depends on equitable structures. Therefore, participation and
                    inclusion are central to sustainable transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interventions & Organizations */}
        <div className="mb-20">
          <h3 className="stories-section-title-center">Interventions & Organisations</h3>
          <p className="stories-section-description">
            Each example illustrates applied community psychology principles such as voice, participation, and
            dissemination within real-life contexts.
          </p>

          {/* Interventions Diagram */}
          <div className="interventions-grid">
            {/* SAHRC */}
            <div className="intervention-card">
              <div className="intervention-content">
                <div className="intervention-icon">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <h4 className="intervention-title">SAHRC</h4>
                <p className="intervention-description">
                  Strengthens institutional accountability through hearings and reports
                </p>
                <div className="intervention-badge">
                  <p className="intervention-badge-text">Power & Voice</p>
                </div>
                <a
                  href="https://www.sahrc.org.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stories-link-small"
                >
                  Visit SAHRC →
                </a>
              </div>
            </div>

            {/* ACMS / Xenowatch */}
            <div className="intervention-card">
              <div className="intervention-content">
                <div className="intervention-icon">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h4 className="intervention-title">ACMS / Xenowatch</h4>
                <p className="intervention-description">
                  Collects and disseminates incident data for evidence-based action
                </p>
                <div className="intervention-badge">
                  <p className="intervention-badge-text">Dissemination & Stakeholders</p>
                </div>
                <a
                  href="https://www.migration.org.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stories-link-small"
                >
                  View Reports →
                </a>
              </div>
            </div>

            {/* Scalabrini Centre */}
            <div className="intervention-card">
              <div className="intervention-content">
                <div className="intervention-icon">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="intervention-title">Scalabrini Centre</h4>
                <p className="intervention-description">
                  Provides psychosocial and legal support to migrants
                </p>
                <div className="intervention-badge">
                  <p className="intervention-badge-text">Participation & Empowerment</p>
                </div>
                <a
                  href="https://www.scalabrini.org.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stories-link-small"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* HRW / Amnesty */}
            <div className="intervention-card">
              <div className="intervention-content">
                <div className="intervention-icon">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="intervention-title">HRW / Amnesty</h4>
                <p className="intervention-description">Advocate globally to reduce harmful rhetoric</p>
                <div className="intervention-badge">
                  <p className="intervention-badge-text">Collective Voice for Structural Change</p>
                </div>
                <a
                  href="https://www.hrw.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stories-link-small"
                >
                  Read Reports →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Short Case Studies */}
        <div>
          <h3 className="stories-section-title-center">Short Case Studies</h3>
          <p className="stories-section-description">
            Each card links explicitly to a community psychology principle.
          </p>

          <div className="stories-cards-container">
            {/* Case Study A */}
            <div className="stories-card">
              <div className="stories-card-header">
                <div className="stories-card-header-flex">
                  <div className="stories-number-badge">
                    <span>A</span>
                  </div>
                  <h4 className="stories-card-title">Monitoring & Prevention (Xenowatch / ACMS)</h4>
                </div>
              </div>
              <div className="stories-card-content">
                <div className="case-study-box">
                  <p className="case-study-label">Community Psychology Lens:</p>
                  <p className="case-study-title">Dissemination as empowerment</p>
                  <p className="case-study-description">
                    Reliable incident data ensures community visibility and evidence-driven response.
                  </p>
                </div>
                <a
                  href="https://www.migration.org.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stories-link"
                >
                  African Centre for Migration & Society →
                </a>
              </div>
            </div>

            {/* Case Study B */}
            <div className="stories-card">
              <div className="stories-card-header">
                <div className="stories-card-header-flex">
                  <div className="stories-number-badge">
                    <span>B</span>
                  </div>
                  <h4 className="stories-card-title">Local Legal & Social Support (Scalabrini Centre)</h4>
                </div>
              </div>
              <div className="stories-card-content">
                <div className="case-study-box">
                  <p className="case-study-label">Community Psychology Lens:</p>
                  <p className="case-study-title">
                    Participation through service co-production
                  </p>
                  <p className="case-study-description">
                    Migrants become agents of their own advocacy via access to psychosocial and legal support.
                  </p>
                </div>
                <a
                  href="https://www.scalabrini.org.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stories-link"
                >
                  Scalabrini Centre →
                </a>
              </div>
            </div>

            {/* Case Study C */}
            <div className="stories-card">
              <div className="stories-card-header">
                <div className="stories-card-header-flex">
                  <div className="stories-number-badge">
                    <span>C</span>
                  </div>
                  <h4 className="stories-card-title">Advocacy & International Watchdogs (HRW / Amnesty)</h4>
                </div>
              </div>
              <div className="stories-card-content">
                <div className="case-study-box">
                  <p className="case-study-label">Community Psychology Lens:</p>
                  <p className="case-study-title">Power and voice redistribution</p>
                  <p className="case-study-description">
                    International oversight amplifies marginalised experiences, pressuring systems toward
                    accountability.
                  </p>
                </div>
                <a
                  href="https://www.hrw.org/news/2024/05/06/south-africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stories-link"
                >
                  South Africa: Toxic Rhetoric Endangers Migrants →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}