import React, { useState } from 'react';
import "../Styles/resourcesReflection.css"

interface ResourceItem {
  id: number;
  text: string;
  type: 'action' | 'reflection';
}

const ResourcesReflection: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<'quick' | 'reflection' | null>(null);

  const quickActionItems: ResourceItem[] = [
    { id: 1, text: "Educate within your circle", type: 'action' },
    { id: 2, text: "Amplify affected voices ethically", type: 'action' },
    { id: 3, text: "Partner with local organisations", type: 'action' },
    { id: 4, text: "Avoid inflammatory language", type: 'action' },
    { id: 5, text: "Document and share responsibly", type: 'action' }
  ];

  const toggleSection = (section: 'quick' | 'reflection') => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      <div className="resources-wrapper">
        <div className="resources-container">
          <div className="resources-header">
            <h1 className="resources-title">Resources & Reflection</h1>
            <p className="resources-subtitle">
              Tools, references, and a short reflective synthesis
            </p>
          </div>

          <div className="resources-content">
            {/* Quick Action Guide Section */}
            <div className="resources-section">
              <div className="section-header">
                <div className="section-indicator">Action</div>
                <h2 className="section-title">Quick Action Guide</h2>
                <p className="section-description">Tools, references, and a short reflective synthesis</p>
              </div>

              <ul className="quick-actions-list">
                {quickActionItems.map((item) => (
                  <li key={item.id} className="action-item">
                    <span className="action-bullet"></span>
                    <span className="action-text">{item.text}</span>
                  </li>
                ))}
              </ul>

              {expandedSection === 'quick' && (
                <div className="expanded-content">
                  <p className="reflection-content">
                    Each of these actions contributes to building a more inclusive and equitable community. 
                    Start small and build momentum through consistent practice.
                  </p>
                </div>
              )}

              <button 
                className="expand-button"
                onClick={() => toggleSection('quick')}
              >
                {expandedSection === 'quick' ? 'Show Less' : 'Learn More'}
              </button>
            </div>

            {/* Reflection Section */}
            <div className="resources-section">
              <div className="section-header">
                <div className="section-indicator">Theory</div>
                <h2 className="section-title">Reflection — Tying Theory To Practice</h2>
              </div>

              <div className="reflection-content">
                <p className="reflection-intro">
                  Community psychology asks not only "what is happening?" but "who benefits?" and 
                  "how can interventions change structures of power?"
                </p>

                {expandedSection === 'reflection' && (
                  <div className="expanded-content">
                    <div className="reflection-quote">
                      "True change requires examining the systems that perpetuate inequality, 
                      not just addressing individual instances of harm."
                    </div>
                    <p>
                      By connecting theory to practice, we move beyond surface-level solutions 
                      to address root causes. This requires ongoing reflection on how our interventions 
                      either challenge or reinforce existing power structures.
                    </p>
                  </div>
                )}
              </div>

              <button 
                className="expand-button"
                onClick={() => toggleSection('reflection')}
              >
                {expandedSection === 'reflection' ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesReflection;