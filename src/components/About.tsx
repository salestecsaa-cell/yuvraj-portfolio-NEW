import "./styles/About.css";
import { useState } from "react";

const About = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const badges = [
    {
      id: "experience",
      title: "9+ YEARS OF EXPERIENCE",
      icon: "📽️",
      tooltip: "Proven track record across video editing, graphic design, and AI content creation with successful projects for businesses worldwide."
    },
    {
      id: "ai-video",
      title: "AI VIDEO SPECIALIST",
      icon: "🤖",
      tooltip: "Expert in cutting-edge AI video generation tools including VEO 3.1, OmniFlash, and generative video creation to produce high-quality content at scale."
    },
    {
      id: "direct-response",
      title: "DIRECT RESPONSE ADS EXPERT",
      icon: "🎯",
      tooltip: "Specializes in creating conversion-focused ads and visuals designed to drive engagement, clicks, and measurable business results."
    }
  ];

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Specializing in AI-powered content creation and direct response marketing, I create scroll-stopping videos and visuals that not only look visually stunning but are designed to generate engagement, conversions, and real business results.
        </p>
        <p className="para">
          With over <strong>9 years of experience</strong> in video editing, graphic design, and AI content creation, I've helped businesses across multiple industries produce high-performing AI ads, short-form videos, and creative assets that drive growth.
        </p>
        <div className="badges-section">
          {badges.map((badge) => (
            <div key={badge.id} className="badge-container">
              <span className="badge-icon">{badge.icon}</span>
              <span className="badge-text">{badge.title}</span>
              <div className="info-button-wrapper">
                <button
                  className="info-button"
                  onClick={() => setActiveTooltip(activeTooltip === badge.id ? null : badge.id)}
                  onMouseEnter={() => setActiveTooltip(badge.id)}
                  onMouseLeave={() => setActiveTooltip(null)}
                  aria-label={`Information about ${badge.title}`}
                >
                  ℹ
                </button>
                {activeTooltip === badge.id && (
                  <div className="tooltip">
                    {badge.tooltip}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
