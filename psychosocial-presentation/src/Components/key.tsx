// import React from 'react';
import '../Styles/key.css';
import communityImage from "../Images/diverse-community-solidarity-south-africa.jpg"
import racialEqualityImage from "../Images/racial-equality-justice-south-africa.jpg"
import diverseImage from "../Images/nelson-mandela-rainbow-nation-south-africa-unity.jpg"
import humanRightsWatchImage from "../Images/human-rights-watch-advocacy.jpg"
import southAfricanHumanRightsCommissionImage from "../Images/south-african-human-rights-commission.jpg"
import africanCentreMigrationSocietyImage from "../Images/african-centre-migration-society-research.jpg"


export function KeyTermsSection() {
  return (
    <section className="keyterms-section">
      <div className="keyterms-container">
        {/* Key Terms Header */}
        <div className="keyterms-header">
          <h2 className="keyterms-title">Key Terms</h2>
          <div className="keyterms-divider"></div>
        </div>

        {/* Xenophobia and Racism Cards */}
        <div className="two-col-grid">
          {/* Xenophobia Card */}
          <div className="keyterms-card">
            <div className="keyterms-card-header">
              <h3 className="keyterms-card-title">Xenophobia in South Africa</h3>
            </div>
            <div className="keyterms-card-content">
              <div className="card-image">
                <img
                  src={communityImage}
                  alt="Community solidarity"
                />
              </div>
              <p className="card-text">
                At its core, <strong>xenophobia</strong> means fear or hatred of foreigners, often leading to violence
                and displacement. In South Africa, this violence is selective. It targets mostly Black African migrants
                (e.g., from Zimbabwe, Mozambique, Nigeria), while white foreigners are seldom victims. This racial
                selectivity has led some scholars to describe the phenomenon as <strong>Afrophobia</strong>.
              </p>
              <p className="card-text">
                Critical analyses argue that xenophobia functions as a form of racism, rooted in colonial and apartheid
                hierarchies that continue to racialise and dehumanise African migrants.
              </p>
            </div>
          </div>

          {/* Racism Card */}
          <div className="keyterms-card">
            <div className="keyterms-card-header">
              <h3 className="keyterms-card-title">Racism in South Africa</h3>
            </div>
            <div className="keyterms-card-content">
              <div className="card-image">
                <img
                  src={racialEqualityImage}
                  alt="Racial equality and justice"
                />
              </div>
              <p className="card-text">
                <strong>Racism</strong> can be defined as an attitude of prejudice, bias, and intolerance directed at
                people on the basis of perceived racial differences.
              </p>
            </div>
          </div>
        </div>

        {/* Three Levels of Racism Diagram */}
        <div className="mb-20">
          <h3 className="section-title">Three Levels of Racism</h3>
          <div className="three-col-grid">
            {/* Institutionalised Racism */}
            <div className="keyterms-card hover-card">
              <div className="keyterms-card-header-white">
                <div className="number-badge">
                  <span>1</span>
                </div>
                <h4 className="keyterms-card-title">Institutionalised Racism</h4>
              </div>
              <div className="keyterms-card-content">
                <p className="card-text">
                  Structural inequalities in access to resources and opportunities that appear "normal."
                </p>
              </div>
            </div>

            {/* Interpersonal Racism */}
            <div className="keyterms-card hover-card">
              <div className="keyterms-card-header-white">
                <div className="number-badge">
                  <span>2</span>
                </div>
                <h4 className="keyterms-card-title">Interpersonal Racism</h4>
              </div>
              <div className="keyterms-card-content">
                <p className="card-text">
                  Prejudiced behaviour and stereotypes directed at individuals.
                </p>
              </div>
            </div>

            {/* Internalised Racism */}
            <div className="keyterms-card hover-card">
              <div className="keyterms-card-header-white">
                <div className="number-badge">
                  <span>3</span>
                </div>
                <h4 className="keyterms-card-title">Internalised Racism</h4>
              </div>
              <div className="keyterms-card-content">
                <p className="card-text">
                  Acceptance by stigmatised groups of negative beliefs about their own worth or culture.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scope of the Problem */}
        <div className="mb-20">
          <div className="keyterms-card">
            <div className="keyterms-card-header">
              <h3 className="keyterms-card-title-large">Scope of the Problem</h3>
              <p className="keyterms-card-subtitle">A Dream Deferred: The Unfulfilled Promise of a United South Africa</p>
            </div>
            <div className="keyterms-card-content-large">
              <div className="wide-image">
                <img
                  src={diverseImage}
                  alt="Rainbow nation vision"
                />
              </div>

              <blockquote className="quote-block">
                "We shall build a society in which all South Africans, both black and white, will be able to walk tall,
                without any fear in their hearts, assured of their inalienable right to human dignity—a rainbow nation
                at peace with itself and the world."
                <footer className="quote-footer">— Nelson Mandela, 1994</footer>
              </blockquote>

              <p className="card-text-large">
                Thirty years ago, these words marked the dawn of a new era for South Africa, a promise of unity,
                equality, and shared prosperity. Yet, today, this dream is overshadowed by a persistent and pervasive
                crisis.
              </p>

              {/* Statistics Grid */}
              <div className="stats-grid">
                <div className="stat-box">
                  <div className="stat-number">1,100+</div>
                  <div className="stat-label">Xenophobic Incidents</div>
                  <div className="stat-sublabel">Since 1994</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">690+</div>
                  <div className="stat-label">Deaths</div>
                  <div className="stat-sublabel">Lives lost to violence</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">128,000+</div>
                  <div className="stat-label">People Displaced</div>
                  <div className="stat-sublabel">Forced from their homes</div>
                </div>
              </div>

              <p className="card-text-large">
                This is not just a political or economic issue; it is a profound psychosocial crisis that strikes at the
                very heart of the nation's identity and the wellbeing of its people.
              </p>
            </div>
          </div>
        </div>

        {/* Institutional & Civil-Society Responses */}
        <div className="mb-20">
          <h3 className="section-title">
            Institutional & Civil-Society Responses
          </h3>
          <div className="three-col-grid">
            {/* Human Rights Watch */}
            <div className="keyterms-card hover-card">
              <div className="keyterms-card-content">
                <div className="card-image-square">
                  <img
                    src={humanRightsWatchImage}
                    alt="Human Rights Watch"
                  />
                </div>
                <h4 className="keyterms-card-title" style={{marginBottom: '1rem'}}>Human Rights Watch (HRW)</h4>
                <p className="card-text" style={{fontSize: '0.875rem'}}>
                  Documents ongoing xenophobic incidents and warns against harmful rhetoric.
                </p>
                <a
                  href="https://www.hrw.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Visit HRW →
                </a>
              </div>
            </div>

            {/* SAHRC */}
            <div className="keyterms-card hover-card">
              <div className="keyterms-card-content">
                <div className="card-image-square">
                  <img
                    src={southAfricanHumanRightsCommissionImage}
                    alt="SAHRC"
                  />
                </div>
                <h4 className="keyterms-card-title" style={{marginBottom: '1rem'}}>South African Human Rights Commission (SAHRC)</h4>
                <p className="card-text" style={{fontSize: '0.875rem'}}>
                  Holds hearings and publishes reports addressing racism, migration and social cohesion.
                </p>
                <a
                  href="https://www.sahrc.org.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  View Reports →
                </a>
              </div>
            </div>

            {/* ACMS */}
            <div className="keyterms-card hover-card">
              <div className="keyterms-card-content">
                <div className="card-image-square">
                  <img
                    src={africanCentreMigrationSocietyImage}
                    alt="ACMS"
                  />
                </div>
                <h4 className="keyterms-card-title" style={{marginBottom: '1rem'}}>African Centre for Migration & Society (ACMS)</h4>
                <p className="card-text" style={{fontSize: '0.875rem'}}>
                  Compiles analyses of xenophobic discrimination and social trends (Xenowatch reporting 2022–2024).
                </p>
                <a
                  href="https://www.migration.org.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Read Research →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Theoretical Frame: Community Psychology Perspective */}
        <div>
          <div className="keyterms-card">
            <div className="keyterms-card-header">
              <h3 className="keyterms-card-title-large">Theoretical Frame: Community Psychology Perspective</h3>
            </div>
            <div className="keyterms-card-content-large">
              <p className="card-text-large">
                Community Psychology examines the dynamic relationship between individuals and social systems,
                addressing structural causes of distress rather than only individual symptoms.
              </p>

              <h4 className="subsection-title">Key Principles:</h4>

              <div>
                {/* Power & Voice */}
                <div className="principle-item">
                  <div className="principle-badge">P</div>
                  <div className="principle-content">
                    <h5 className="principle-title">Power & Voice</h5>
                    <p className="principle-text">
                      Who tells the story, whose experiences count, and how power shapes responses.
                    </p>
                    <p className="principle-note">
                      Community psychology lens: Evaluates whether interventions empower affected communities to define
                      their own narratives.
                    </p>
                    <a
                      href="https://ebookcentral.proquest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      Value-based praxis in community psychology →
                    </a>
                  </div>
                </div>

                {/* Participatory Practice */}
                <div className="principle-item">
                  <div className="principle-badge">P</div>
                  <div className="principle-content">
                    <h5 className="principle-title">Participatory Practice</h5>
                    <p className="principle-text">
                      Promotes co-production of knowledge with affected populations.
                    </p>
                    <p className="principle-note">
                      Community psychology lens: Encourages migrants' and citizens' collaboration in creating safer
                      communities.
                    </p>
                    <a
                      href="https://ebookcentral.proquest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      Introduction to community psychology →
                    </a>
                  </div>
                </div>

                {/* Dissemination & Stakeholders */}
                <div className="principle-item">
                  <div className="principle-badge">D</div>
                  <div className="principle-content">
                    <h5 className="principle-title">Dissemination & Stakeholders</h5>
                    <p className="principle-text">
                      Ensures findings reach those who can act such as schools, municipal leaders, NGOs, and media.
                    </p>
                    <p className="principle-note">
                      Community psychology lens: Translates research into context-specific interventions.
                    </p>
                    <a
                      href="https://ebookcentral.proquest.com/lib/sun/detail.action?docID=6234673"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}