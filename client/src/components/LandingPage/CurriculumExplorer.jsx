import React, { useState } from 'react';
import {
  Hash,
  Compass,
  Variable,
  ShoppingBag,
  LineChart,
  Dices,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

const CATEGORIES = [
  {
    id: 'numbers',
    name: 'Number Foundations',
    icon: Hash,
    topics: [
      { key: 'addition', name: 'Addition', sub: '20-question mental addition' },
      { key: 'multiply', name: 'Multiplication Tables', sub: 'Adaptive times table drills (2–19)' },
      { key: 'fractionadd', name: 'Fractions', sub: 'Add, subtract, multiply & divide' },
      { key: 'decimals', name: 'Decimals', sub: 'Decimal place value & operations' },
      { key: 'hcflcm', name: 'HCF & LCM', sub: 'Prime factorization & multiples' },
      { key: 'primefactor', name: 'Prime Factors', sub: 'Factor trees & factor decomposition' },
      { key: 'column-addition', name: 'Column Addition', sub: 'Step-by-step carry tracking' },
      { key: 'bases', name: 'Number Bases', sub: 'Binary, octal, hexadecimal conversion' },
    ],
  },
  {
    id: 'shape',
    name: 'Shape & Space',
    icon: Compass,
    topics: [
      { key: 'angles', name: 'Angles', sub: 'Parallel lines, transversals & interior sum' },
      { key: 'pythag', name: "Pythagoras' Theorem", sub: '2D & 3D right-angled triangle solving' },
      { key: 'triangles', name: 'Triangles', sub: 'Isosceles, equilateral & exterior angles' },
      { key: 'coordgeom', name: 'Coordinate Geometry', sub: 'Midpoint, slope, distance & lines' },
      { key: 'circleth', name: 'Circle Theorems', sub: 'Cyclic quads, tangents & chords' },
      { key: 'mensur', name: 'Mensuration', sub: 'Surface areas and volumes of prisms & cones' },
      { key: 'bearings', name: 'Bearings', sub: 'Three-figure navigation bearings' },
      { key: 'similarity', name: 'Similarity', sub: 'Scale factors & volume/area ratios' },
    ],
  },
  {
    id: 'algebra',
    name: 'Algebra',
    icon: Variable,
    topics: [
      { key: 'lineareq', name: 'Linear Equations', sub: 'One-variable balance & isolation' },
      { key: 'quadratic', name: 'Quadratic Substitution', sub: 'Evaluate ax² + bx + c' },
      { key: 'qformula', name: 'Quadratic Formula', sub: 'Roots of second-degree polynomials' },
      { key: 'simul', name: 'Simultaneous Equations', sub: '2×2 and 3×3 systems of equations' },
      { key: 'polymul', name: 'Polynomial Multiplication', sub: 'FOIL & monomial distribution' },
      { key: 'indices', name: 'Indices & Exponents', sub: 'Fractional & negative exponent laws' },
      { key: 'log', name: 'Logarithms', sub: 'Laws of logs, change of base & equations' },
      { key: 'ineq', name: 'Inequalities', sub: 'Linear and quadratic solution sets' },
    ],
  },
  {
    id: 'everyday',
    name: 'Everyday Maths & Finance',
    icon: ShoppingBag,
    topics: [
      { key: 'percent', name: 'Percentages', sub: 'Discounts, reverse percent & compounding' },
      { key: 'profitloss', name: 'Profit & Loss', sub: 'Markup, cost price & margins' },
      { key: 'ratio', name: 'Ratio & Proportion', sub: 'Sharing quantities & unitary method' },
      { key: 'sdt', name: 'Speed, Distance, Time', sub: 'Rate calculations & unit conversions' },
      { key: 'banking', name: 'Banking (RD)', sub: 'Recurring deposit & interest calculations' },
      { key: 'gst', name: 'Goods & Services Tax', sub: 'CGST, SGST and tax invoice problems' },
    ],
  },
  {
    id: 'calculus',
    name: 'Calculus & Advanced',
    icon: LineChart,
    topics: [
      { key: 'diff', name: 'Differentiation', sub: 'Power rule, tangents & turning points' },
      { key: 'integ', name: 'Integration', sub: 'Definite integrals & area under curves' },
      { key: 'limits', name: 'Limits', sub: 'Evaluation of algebraic & trig limits' },
      { key: 'diffeq', name: 'Differential Equations', sub: 'Separation of variables & solutions' },
      { key: 'complex', name: 'Complex Numbers', sub: 'Argand diagram, modulus & arithmetic' },
      { key: 'linprog', name: 'Linear Programming', sub: 'Constraints & objective optimization' },
    ],
  },
  {
    id: 'games',
    name: 'Games & Reasoning',
    icon: Dices,
    topics: [
      { key: 'battle', name: 'Battle Arena', sub: 'Real-time 1v1 multiplayer duels' },
      { key: 'detective', name: 'Detective Agency', sub: 'Narrative math mysteries & case files' },
      { key: 'sudoku', name: 'Sudoku Puzzle', sub: '9×9 logical grid solving' },
      { key: 'riddle', name: 'Math Riddles', sub: 'Discover hidden arithmetic rules' },
      { key: 'spot', name: 'Twin Hunt', sub: 'Visual spot-the-common-object game' },
      { key: 'carjourney', name: 'The Car Journey', sub: '16-stop progressive math odyssey' },
    ],
  },
];

export default function CurriculumExplorer({
  onSelectTopic = () => {},
  onExplorePuzzles = () => {},
}) {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);

  const currentCategory =
    CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];

  return (
    <section id="curriculum" className="landing-section">
      <div className="section-header-center">
        <div className="section-tag">
          <BookOpen size={14} style={{ marginRight: 6 }} />
          <span>Curriculum Architecture</span>
        </div>
        <h2 className="section-title">Comprehensive Mathematical Coverage</h2>
        <p className="section-subtitle">
          Six organized domains spanning 69 topic areas, each powered by algorithmic problem synthesis and real-time difficulty adaptation.
        </p>

        {/* Category Filter Pills */}
        <div className="curriculum-tabs">
          {CATEGORIES.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <button
                key={cat.id}
                type="button"
                className={`curriculum-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {IconComponent && <IconComponent size={16} />}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Topics Grid for Active Category */}
      <div className="curriculum-topics-grid">
        {currentCategory.topics.map((t) => (
          <div
            key={t.key}
            className="curriculum-topic-card"
            onClick={() => onSelectTopic(t.key)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectTopic(t.key);
              }
            }}
          >
            <div className="curriculum-topic-header">
              <span className="curriculum-topic-title">{t.name}</span>
              <ArrowRight size={14} className="curriculum-topic-arrow" />
            </div>
            <p className="curriculum-topic-sub">{t.sub}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 36 }}>
        <button
          type="button"
          className="hero-btn-primary"
          onClick={onExplorePuzzles}
        >
          <span>Explore All 90+ Topics</span>
          <ArrowRight size={16} style={{ marginLeft: 6 }} />
        </button>
      </div>
    </section>
  );
}
