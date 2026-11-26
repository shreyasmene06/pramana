import React from 'react';
import { Globe, Compass, Play, Trophy, ArrowRight, Target } from 'lucide-react';

const STEPS = [
  {
    step: '1',
    icon: <Globe size={32} color="#e8864a" />,
    title: 'Open & Explore',
    desc: 'Jump in instantly. Full guest access works with zero setup, or log in with secure JWT to automatically persist your progress and streak across sessions.',
  },
  {
    step: '2',
    icon: <Compass size={32} color="#3b82f6" />,
    title: 'Pick Your Focus',
    desc: 'Select from 90+ topic tiles, embark on the structured Guided Learning Journey, challenge friends in Battle Arena, or crack detective cases.',
  },
  {
    step: '3',
    icon: <Play size={32} color="#5cb87a" />,
    title: 'Play & Adapt',
    desc: 'Tackle 20 calibrated problems. Every correct answer increases your challenge band; every wrong answer triggers hints and targeted remedies.',
  },
  {
    step: '4',
    icon: <Trophy size={32} color="#eab308" />,
    title: 'Earn & Master',
    desc: 'Unlock collectible Bronze, Silver, and Gold mastery badges, level up your XP, stack streak milestones, and conquer topic albums.',
  },
];

export default function WorkflowSection({ onExplorePuzzles = () => {} }) {
  return (
    <section className="landing-section landing-section-compact">
      <div className="section-header-center">
        <div className="section-tag">
          <Target size={14} style={{ marginRight: 6 }} />
          <span>How It Works</span>
        </div>
        <h2 className="section-title">The Four-Stage Learner Loop</h2>
        <p className="section-subtitle">
          A seamless, distraction-free progression designed to build competence and confidence with every practice session.
        </p>
      </div>

      <div className="workflow-row">
        {STEPS.map((item) => (
          <div key={item.step} className="workflow-card">
            <span className="workflow-step-num">Stage {item.step}</span>
            <div className="workflow-icon">{item.icon}</div>
            <h3 className="workflow-title">{item.title}</h3>
            <p className="workflow-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <button
          type="button"
          className="hero-btn-primary"
          onClick={onExplorePuzzles}
        >
          <span>Get Started in 10 Seconds</span>
          <ArrowRight size={16} style={{ marginLeft: 6 }} />
        </button>
      </div>
    </section>
  );
}
