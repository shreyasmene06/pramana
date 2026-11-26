import React, { useState } from 'react';
import { useAccessibility } from '../../lib/AccessibilityProvider';
import {
  Home,
  LayoutGrid,
  Layers,
  Tv,
  Zap,
  BookOpen,
  Sun,
  Moon,
  Settings,
  User,
  Menu,
  X,
} from 'lucide-react';

/**
 * LandingNavbar Component
 * Responsive glassmorphic navigation bar for Pramana.
 * Provides direct access between the Landing Page and the full Puzzles view,
 * with integrated theme toggle, accessibility settings, and account menu.
 */
export default function LandingNavbar({
  currentView = 'landing',
  onViewChange = () => {},
  theme = 'dark',
  toggleTheme = () => {},
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setIsOpen: setA11yOpen } = useAccessibility();

  const handleNavClick = (sectionId) => {
    setMobileOpen(false);
    if (sectionId === 'puzzles') {
      onViewChange('puzzles');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView !== 'landing') {
      onViewChange('landing');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenAuth = () => {
    setMobileOpen(false);
    window.dispatchEvent(new CustomEvent('pramana:openAuth'));
  };

  const handleOpenA11y = () => {
    setMobileOpen(false);
    if (setA11yOpen) {
      setA11yOpen(true);
    }
  };

  return (
    <header className="landing-navbar">
      <div className="landing-navbar-inner">
        {/* Brand Group */}
        <button
          type="button"
          className="landing-nav-brand"
          onClick={() => handleNavClick('hero')}
          aria-label="Pramana Home"
        >
          <img
            src="/logo.png"
            alt="Pramana Logo"
            className="landing-nav-logo"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="landing-nav-title-group">
            <span className="landing-nav-title">Pramana</span>
            <span className="landing-nav-badge">v1.1 Adaptive</span>
          </div>
        </button>

        {/* Desktop Nav Links - Single Clean 'All Puzzles' Option */}
        <nav aria-label="Main Navigation">
          <ul className="landing-nav-links">
            <li>
              <button
                type="button"
                className={`landing-nav-link-btn ${currentView === 'landing' ? 'active' : ''}`}
                onClick={() => handleNavClick('hero')}
              >
                <Home size={16} />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`landing-nav-link-btn ${currentView === 'puzzles' ? 'active' : ''}`}
                onClick={() => handleNavClick('puzzles')}
              >
                <LayoutGrid size={16} />
                <span>All Puzzles</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="landing-nav-link-btn"
                onClick={() => handleNavClick('showcase')}
              >
                <Layers size={16} />
                <span>Showcase</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="landing-nav-link-btn"
                onClick={() => handleNavClick('demo')}
              >
                <Tv size={16} />
                <span>Live Demo</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="landing-nav-link-btn"
                onClick={() => handleNavClick('features')}
              >
                <Zap size={16} />
                <span>Features</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="landing-nav-link-btn"
                onClick={() => handleNavClick('curriculum')}
              >
                <BookOpen size={16} />
                <span>Curriculum</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Right Actions: Theme Toggle, Settings (Gear), and Account Menu */}
        <div className="landing-nav-actions">
          <button
            type="button"
            className="landing-icon-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="landing-icon-btn"
            onClick={handleOpenA11y}
            title="Accessibility & Language Settings"
            aria-label="Settings"
          >
            <Settings size={18} />
          </button>

          <button
            type="button"
            className="landing-icon-btn"
            onClick={handleOpenAuth}
            title="Account & Login"
            aria-label="Account"
          >
            <User size={18} />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            className="landing-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`landing-mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button
          type="button"
          className="landing-nav-link-btn"
          onClick={() => handleNavClick('hero')}
        >
          <Home size={16} />
          <span>Home Overview</span>
        </button>
        <button
          type="button"
          className="landing-nav-link-btn"
          onClick={() => handleNavClick('puzzles')}
        >
          <LayoutGrid size={16} />
          <span>All 90+ Puzzles & Games</span>
        </button>
        <button
          type="button"
          className="landing-nav-link-btn"
          onClick={() => handleNavClick('showcase')}
        >
          <Layers size={16} />
          <span>Feature Showcase</span>
        </button>
        <button
          type="button"
          className="landing-nav-link-btn"
          onClick={() => handleNavClick('demo')}
        >
          <Tv size={16} />
          <span>Interactive Demo</span>
        </button>
        <button
          type="button"
          className="landing-nav-link-btn"
          onClick={() => handleNavClick('features')}
        >
          <Zap size={16} />
          <span>Pedagogy & Features</span>
        </button>
        <button
          type="button"
          className="landing-nav-link-btn"
          onClick={() => handleNavClick('curriculum')}
        >
          <BookOpen size={16} />
          <span>Curriculum Domains</span>
        </button>
        <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
          <button
            type="button"
            className="landing-nav-link-btn"
            style={{ flex: 1, justifyContent: 'center' }}
            onClick={handleOpenA11y}
          >
            <Settings size={16} />
            <span>Settings</span>
          </button>
          <button
            type="button"
            className="landing-nav-link-btn"
            style={{ flex: 1, justifyContent: 'center' }}
            onClick={handleOpenAuth}
          >
            <User size={16} />
            <span>Account</span>
          </button>
        </div>
      </div>
    </header>
  );
}
