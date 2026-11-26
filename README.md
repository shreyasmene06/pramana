<div align="center">

<img src="client/public/logo.png" alt="Pramana Logo" width="120" />

# Pramana — Adaptive Math & Logic Platform

### *An adaptive math learning platform with interactive puzzles, real-time multiplayer, and step-by-step explanations.*

<p>
  <img src="https://img.shields.io/badge/Node-20%2B-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node"/>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Socket.IO-4-010101?style=flat-square&logo=socket.io" alt="Socket.IO"/>
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="MIT"/>
</p>

---

### **93 puzzle types (API routes) across 69 topic areas (graph nodes) · Algorithmically generated · Adaptive difficulty · Live multiplayer · Step-by-step solutions**

</div>

---

## Overview

### What is Pramana?

**Pramana** (derived from Sanskrit *pramāṇa* — valid cognition, foundational principle, and rigorous proof) is an **open-source adaptive math learning platform** featuring algorithmically generated practice puzzles, interactive concept laboratories, real-time 1-vs-1 multiplayer duels, and step-by-step explanations for every problem.

Most math problems are generated dynamically on the fly while specialized modules provide structured domain banks (such as general knowledge in `chitragupta/questions/`, vocabulary in `vocab/questions/`, and riddles in `server/riddles/riddles.json`) — ensuring practice is varied and never repetitive. Difficulty adapts in real time to each learner's performance across **93 distinct puzzle endpoints** spanning **69 curriculum areas**.

### Target Audience

- **Students & Learners**: Master mathematical principles through interactive visual labs, adaptive practice, gamified progression (milestones, streaks, XP), and real-time multiplayer duels.
- **Educators & Schools**: Access a structured curriculum spanning basic arithmetic through linear algebra and calculus, with automated difficulty scaling and step-by-step explanations.
- **Developers & Contributors**: Full-stack ed-tech codebase built on React 19, Vite 8, Node.js 20+, Express 5, Socket.IO, and MongoDB.

---

## Pedagogical Architecture

### Our Approach

**Understand → Interact → Discover → Practice → Test**

### 1. Progressive Disclosure

Learning content is revealed incrementally to reduce cognitive overload and encourage focused comprehension. For example, in modules like **Angles**, learners advance through:

1. What Is an Angle?
2. Types of Angles
3. Find 90° Challenge
4. Rules & Examples
5. Angle Detective
6. Completion & Test

### 2. Interactive Discovery

Instead of relying solely on passive reading, learners interactively test principles through draggable geometric manipulatives, parameter adjustments, and analytical deduction tasks.

### 3. Purposeful Visual Design

The interface employs clear typography, responsive SVG graphics, tactile cards, and immediate positive feedback to make complex mathematical models accessible.

---

## Architecture & Tech Stack

```
Frontend   :  React 19 + Vite 8 + framer-motion + Three.js + mafs + Lucide Icons + face-api.js
Backend    :  Node.js 20+ · Express 5 · Mongoose 9 · Socket.IO 4
Security   :  JWT (bcrypt 10 rounds) · express-rate-limit · CORS allowlist
Data       :  MongoDB with full in-memory fallback
Sandbox    :  Multi-language compiler via /api/playground2
```

---

## User Workflow

```
┌───────────────┐     ┌───────────────┐     ┌───────────────┐     ┌───────────────┐
│   Platform    │────▶│    Select     │────▶│   Complete    │────▶│    Mastery    │
│    Launch     │     │     Topic     │     │   Practice    │     │   & Badges    │
└───────────────┘     └───────────────┘     └───────────────┘     └───────────────┘
```

1. **Select a topic**: Goal Practice, Battle Arena, Detective Agency, Math Riddles, Guided Journey, Random Mix, or Custom Lessons.
2. **Solve adaptive questions**: Problem parameters scale dynamically based on accuracy and speed.
3. **Achieve mastery**: Track XP progression, streak counters, badges (Bronze → Silver → Gold), and concept coverage.

---

## Core Capabilities

### 1. Adaptive Difficulty Engine
Each quiz instance maintains an `adaptScore`. Correct answers increase the score; incorrect answers calibrate downward. The score maps into defined bands (`easy → medium → hard → extrahard`), adjusting problem generation parameters on each iteration.

### 2. Live Battle Arena
Real-time multiplayer powered by **Socket.IO**. Contenders compete concurrently on identical problems; fastest accurate answers win rounds with dynamic multipliers.

### 3. Detective Agency
Case-driven narrative puzzles where mathematical deductions unlock sequential clues to solve mysteries.

### 4. Concept Playgrounds
A five-stage learning workflow: Predict → Derivation / Grid → Guided → Independent → Review.

### 5. Guided Learning Journey
Curriculum pathway with prerequisite validation and progressive mastery badges (Locked → Blue → Bronze → Silver → Gold).

### 6. Step-by-Step Explanation Engine
POST requests containing `{ solve: true }` return comprehensive step-by-step derivations for over 50 problem archetypes.

### 7. Assessment & Proctoring System
Optional session supervision featuring emotion detection, tab-switch monitoring, and review summaries.

### 8. Interactive Concept Labs
Specialized interactive workspaces: `LinearAlgebraApp` (56 missions across 6 modules), `GeometryApp`, `ProbLabApp`, `PythagLabApp`, `BearingsLabApp`, `SudokuApp`, `VisualMathLabRedux`, and more.

---

## Getting Started

### Prerequisites
- Node.js **20+**
- MongoDB (optional — platform falls back automatically to in-memory store)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/shreyasmene06/pramana.git
cd pramana

# Install backend dependencies
cd server && npm install

# Install frontend dependencies
cd ../client && npm install
```

### Environment Configuration
Create `server/.env`:
```env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/pramana
JWT_SECRET=replace-me-with-a-long-random-string
JWT_TTL=14d
PRAMANA_SEED_USERS=alice:secret123,bob:secret456
```

### Running Locally

```bash
# Terminal 1 — Start Backend Server (port 4000)
cd server && node index.js

# Terminal 2 — Start Frontend Dev Server (port 5173)
cd client && npm run dev
```

Navigate to `http://localhost:5173` in your browser. The Vite dev server proxies API calls to port 4000.

### Running Tests

```bash
# Client tests
cd client && npm test

# Server tests
cd server && npm test

# BKT unit tests
node server/lib/bkt.test.js
```

---

## Extending Puzzles & Modules

1. **Server Route**: Implement `GET /<type>-api/question` and `POST /<type>-api/check` in `server/routes/`.
2. **Proxy**: Add the route prefix in `client/vite.config.js`.
3. **Tile Registry**: Register the puzzle in `client/src/features/tiles.js`.
4. **Component**: Register the quiz view via `makeQuizApp` in `client/src/App.jsx`.
5. **Explanation**: Add the derivation solver in `server/explanations.js`.

---

## License

This project is licensed under the [MIT License](LICENSE).
