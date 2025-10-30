// import React from 'react';
import '../Styles/resourceReflection.css';

export function ResourcesReflectionSection() {
  return (
    <section className="resources-section">
      <div className="resources-container">
        {/* Section Header */}
        <div className="resources-header">
          <h2 className="resources-title">Resources & Reflection</h2>
          <p className="resources-subtitle">Tools, references, and a short reflective synthesis</p>
        </div>

        {/* Quick Action Guide */}
        <div className="action-guide">
          <div className="resources-card">
            <div className="action-header">
              <h3 className="action-title">Quick Action Guide</h3>
              <button className="action-button">
                Download PDF
              </button>
            </div>
            <p className="action-intro">Five ways students or small groups can act ethically and safely:</p>

            {/* Action Items Grid */}
            <div className="action-items">
              {/* Action 1 */}
              <div className="action-item">
                <div className="action-icon">
                  <div className="action-icon-circle">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  </div>
                </div>
                <div className="action-content">
                  <h4 className="action-content-title">1. Educate within your circle</h4>
                  <p className="action-content-text">
                    Use evidence from primary reports (SAHRC, ACMS) to ground discussions — avoid sensationalist claims.
                  </p>
                  <a
                    href="https://www.sahrc.org.za/index.php/sahrc-publications"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                  >
                    The South African Human Rights Commission →
                  </a>
                </div>
              </div>

              {/* Action 2 */}
              <div className="action-item">
                <div className="action-icon">
                  <div className="action-icon-circle">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>
                <div className="action-content">
                  <h4 className="action-content-title">2. Amplify affected voices ethically</h4>
                  <p className="action-content-text">
                    If sharing someone's story, obtain explicit written consent and offer anonymity.
                  </p>
                </div>
              </div>

              {/* Action 3 */}
              <div className="action-item">
                <div className="action-icon">
                  <div className="action-icon-circle">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                    </svg>
                  </div>
                </div>
                <div className="action-content">
                  <h4 className="action-content-title">3. Partner with local organisations</h4>
                  <p className="action-content-text">
                    Connect with NGOs (e.g., Scalabrini Centre) before running outreach, they hold practical knowledge
                    and referral pathways.
                  </p>
                  <a
                    href="https://www.scalabrini.org.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                  >
                    Scalabrini Centre →
                  </a>
                </div>
              </div>

              {/* Action 4 */}
              <div className="action-item">
                <div className="action-icon">
                  <div className="action-icon-circle">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="action-content">
                  <h4 className="action-content-title">4. Avoid inflammatory language</h4>
                  <p className="action-content-text">
                    Public rhetoric and scapegoating increase risk; adopt precise, non-stigmatising language following
                    guidance in human-rights reports.
                  </p>
                  <a
                    href="https://www.hrw.org/news/2024/05/06/south-africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                  >
                    South Africa: Toxic Rhetoric Endangers Migrants →
                  </a>
                </div>
              </div>

              {/* Action 5 */}
              <div className="action-item">
                <div className="action-icon">
                  <div className="action-icon-circle">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                </div>
                <div className="action-content">
                  <h4 className="action-content-title">5. Document and share responsibly</h4>
                  <p className="action-content-text">
                    Protect rather than sensationalise when documenting incidents and sharing information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection Section */}
        <div className="resources-card">
          <h3 className="reflection-title">Reflection: Tying Theory to Practice</h3>

          <div className="reflection-content">
            <div className="reflection-box">
              <p className="reflection-box-title">Community psychology asks:</p>
              <ul className="reflection-list">
                <li>What is happening?</li>
                <li>Who benefits?</li>
                <li>How can we shift power?</li>
              </ul>
            </div>

            <p>
              This project places <strong>lived experience</strong> and <strong>collective action</strong> at the centre
              of knowledge production. Storytelling validates experience, builds solidarity, and can influence policy
              when combined with incident data (ACMS/Xenowatch) and institutional accountability (SAHRC).
            </p>

            <p>
              However, ethical storytelling demands <strong>consent</strong>, <strong>trauma sensitivity</strong>, and{" "}
              <strong>stakeholder planning</strong>. Institutional partnerships (e.g., Scalabrini, SAHRC) are vital for
              translating narrative evidence into tangible protection and reform, and thereby, embodying Nelson &
              Prilleltensky's concept of <em>psychopolitical validity</em>, where knowledge and action serve liberation
              and well-being.
            </p>

            <div className="reflection-buttons">
              <a
                href="https://ebookcentral.proquest.com/lib/sun/detail.action?docID=6234673"
                target="_blank"
                rel="noopener noreferrer"
                className="reflection-button-primary"
              >
                Read Full Theory Framework
              </a>
              <a
                href="https://www.sahrc.org.za/index.php/sahrc-publications"
                target="_blank"
                rel="noopener noreferrer"
                className="reflection-button-secondary"
              >
                View SAHRC Reports
              </a>
            </div>
          </div>
        </div>

        {/* Footer Credit */}
        <div className="resources-footer">
          <p>Psychology Honours Student: Lerato Nkosi (24894583)</p>
          <p>Module: Community Psychology 71</p>
        </div>
      </div>
    </section>
  );
}