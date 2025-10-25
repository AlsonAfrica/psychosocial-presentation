import React, { useState } from 'react';
import "../Styles/main.css"
// import './styles.css';

interface CardData {
  id: number;
  title: string;
  frontContent: string;
  backContent: string;
  citation: string;
}

const Main: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const cardsData: CardData[] = [
    {
      id: 1,
      title: "Displacement, Loss, and Fear",
      frontContent: "Most free explicitly suicidal of chemories dis anguish and include claimstory granted a lot soma halu lackswants genwon",
      backContent: "This card explores the deep psychological impact of displacement and the fear that accompanies loss of home and community. Research shows that displaced populations experience higher rates of trauma and anxiety.",
      citation: "Tuedio heglenas \"Mac rn inhibitif\""
    },
    {
      id: 2,
      title: "Everyday Racism: Microaggressions and Identity",
      frontContent: "Ubiquis via mention record remnamsue sekualth ola dlearment facies witusofkunie",
      backContent: "Microaggressions are subtle, often unconscious expressions of prejudice that accumulate over time, affecting mental health and sense of belonging. These daily experiences shape identity formation and self-perception.",
      citation: "April: The Narratives of Racisms South Africa"
    },
    {
      id: 3,
      title: "Workplace Exclusion and Atypicality",
      frontContent: "Realist smenterintermous aybipun whishkos orath Amile is leglescic adhesveskel ostros, sensate inturo",
      backContent: "Workplace discrimination manifests in exclusionary practices that marginalize individuals based on perceived differences. This creates hostile environments that impact career progression and psychological wellbeing.",
      citation: "April: The Narratives of Racism in South Africa"
    }
  ];

  const toggleFlip = (cardId: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  return (
    <div className="stories-container">
      <div className="stories-header">
        <h1 className="stories-title">Stories & Interventions</h1>
        <p className="stories-subtitle">Human stories, institutional responses, ad community practice</p>
      </div>

      <div className="cards-grid">
        {cardsData.map((card) => (
          <div 
            key={card.id} 
            className={`card-wrapper ${flippedCards.has(card.id) ? 'flipped' : ''}`}
            onClick={() => toggleFlip(card.id)}
          >
            <div className="card-inner">
              {/* Front of card */}
              <div className="card-face card-front">
                <h2 className="card-title">{card.title}</h2>
                <p className="card-content">{card.frontContent}</p>
                <p className="card-citation">{card.citation}</p>
                <div className="flip-hint">Click to flip</div>
              </div>

              {/* Back of card */}
              <div className="card-face card-back">
                <h2 className="card-title">{card.title}</h2>
                <p className="card-content">{card.backContent}</p>
                <p className="card-citation">{card.citation}</p>
                <div className="flip-hint">Click to flip back</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Embedded CSS

export default Main;