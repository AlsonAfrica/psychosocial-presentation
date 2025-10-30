import { useState } from 'react';
import '../Styles/footer.css';

export function FooterWithReferences() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const references = [
    {
      text: "Riemer, M., Reich, S.M., Evans, S.D., Nelson, G., & Prilleltensky, I. (Eds.). (2020). Community psychology: In pursuit of liberation and well-being (2nd edition). London: Palgrave Macmillan.",
      link: "https://ebookcentral.proquest.com/lib/sun/detail.action?docID=6234673",
    },
    {
      text: "Jason, L. A., Glantsman, O., O'Brien, J. F., & Ramian, K. N. (2019). Introduction to community psychology. Rebus Community.",
      link: null,
    },
    {
      text: "Human Rights Watch — Xenophobia Rears Its Ugly Head in South Africa (coverage & country reporting).",
      link: "https://www.hrw.org/news/2023/09/28/xenophobia",
    },
    {
      text: "South African Human Rights Commission — Hearing reports and publications.",
      link: "https://www.sahrc.org.za/index.php/sahrc-publications",
    },
    {
      text: "Migration.org.za / ACMS — Xenophobic Discrimination in South Africa (2022–2024).",
      link: "https://www.migration.org.za/report-xenophobic-discr",
    },
    {
      text: "Amnesty International — thematic briefings on xenophobia, race, and state obligations.",
      link: "https://www.amnesty.org",
    },
    {
      text: "Scalabrini Centre of Cape Town — services and paralegal support for migrants.",
      link: "https://www.scalabrini.org.za",
    },
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-info">
              <p className="footer-copyright">© 2025 Community Psychology Honours Project</p>
              <p className="footer-student">Lerato Nkosi (24894583) | Community Psychology 711</p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="footer-button"
            >
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
              View References
            </button>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-title-wrapper">
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
                <h2 className="modal-title">References</h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="modal-close"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="modal-body">
              <p className="modal-intro">
                All references are formatted according to APA 7th edition guidelines.
              </p>

              <div className="references-list">
                {references.map((ref, index) => (
                  <div
                    key={index}
                    className="reference-item"
                  >
                    <div className="reference-content">
                      <div className="reference-number">
                        <div className="reference-badge">
                          {index + 1}
                        </div>
                      </div>
                      <div className="reference-text-wrapper">
                        <p className="reference-text">{ref.text}</p>
                        {ref.link && (
                          <a
                            href={ref.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reference-link"
                          >
                            Access Resource →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="modal-note">
                <p className="modal-note-text">
                  <strong>Note:</strong> A complete APA 7th edition formatted reference list is available on the
                  Resources download page.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}