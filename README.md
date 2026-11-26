<div align="center">

<img src="client/public/tenali.png" alt="Pramana Logo" width="120" />

# 🧠 Pramana — Adaptive Math & Logic Platform

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

### ✨ **93 puzzle types (API routes) across 69 topic areas (graph nodes) · Algorithmically generated · Adaptive difficulty · Live multiplayer · Step-by-step solutions**

</div>

---

## 🧭 Overview

### 🌟 What is Pramana?

**Pramana** (सूत्र — fundamental formula, principle, and connecting logic) is an **open-source adaptive math learning platform** featuring algorithmically-generated practice puzzles, interactive concept labs, real-time 1-vs-1 multiplayer duels, and step-by-step explanations for every problem.

Most maths questions are generated dynamically on the fly while specialized modules also provide rich saved question banks (such as general knowledge in `chitragupta/questions/`, vocabulary in `vocab/questions/`, and riddles in `server/riddles/riddles.json`) — ensuring practice is infinite and never repeats. Difficulty adapts in real time to each learner's performance across **93 distinct puzzle endpoints** spanning **69 topic areas**.

### 🎯 Who is it For?

- 🎓 **Students & Learners**: Master mathematical concepts through interactive visual labs, adaptive practice, gamified rewards (badges, streaks, XP), and real-time multiplayer battles.
- 🏫 **Educators & Schools**: Access a structured curriculum from basic arithmetic through linear algebra and calculus, with automated difficulty scaling and step-by-step explanations.
- 💻 **Developers & Contributors**: A full-stack ed-tech codebase built on React 19, Vite 8, Node.js 20+, Express 5, Socket.IO, and MongoDB.

---

## 🧠 Pedagogical Features: Progressive & Interactive Learning

### Our Approach

**Understand → Interact → Discover → Practice → Test**

### 1. Progressive Disclosure

Learning content is revealed step-by-step to reduce cognitive overload and encourage focused learning. In modules like **Angles**, learners progress through:

1. What Is an Angle?
2. Types of Angles
3. Find 90° Challenge
4. Rules & Examples
5. Angle Detective
6. Completion & Test

### 2. Interactive Learning

Instead of relying only on static text, learners actively explore concepts through draggable visualizations, parameter exploration, and real-world deduction activities.

### 3. Child-Friendly Design

The experience uses intuitive explanations, interactive SVG visuals, large touch targets, rounded cards, and responsive feedback to make mathematical concepts clear and engaging.

---

## 🧰 Tech Stack

```
Frontend   :  React 19 + Vite 8 + framer-motion + Three.js + mafs + face-api.js
Backend    :  Node.js 20+ · Express 5 · Mongoose 9 · Socket.IO 4
Security   :  JWT (bcrypt 10 rounds) · express-rate-limit · CORS allowlist
Data       :  MongoDB with full in-memory fallback
Sandbox    :  Multi-language compiler via /api/playground2
```

---

## 🎯 User Workflow

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│ 🌐 Open  │───▶│ 📐 Pick  │───▶│ ▶️ Play  │───▶│ 🏆 Earn  │
│Platform  │    │  topic   │    │ 20 Qs    │    │+ badge   │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
```

1. **Pick a topic**: Goal Practice, Battle Arena, Detective Agency, Math Riddles, Guided Journey, Random Mix, or Custom Lessons.
2. **Play adaptive questions**: Scores adjust dynamically based on response accuracy and time.
3. **Earn rewards**: Track XP, streak milestones, badges (bronze → silver → gold), and mastered concepts.

---

## 🚀 Features in Depth

### 🧮 1. Adaptive Difficulty Engine
Each quiz instance maintains an `adaptScore`. Correct answers increase the score; incorrect answers adjust it downward. The score maps to bands: `easy → medium → hard → extrahard`, dynamically calibrating parameter ranges for every new question.

### ⚔️ 2. Live Battle Arena
Real-time multiplayer using **Socket.IO**. Two players compete on the same questions simultaneously; fastest correct answers win rounds.

### 🔍 3. Detective Agency
Story-driven mystery puzzles where mathematical reasoning unlocks successive clues to solve cases.

### 📐 4. Concept Playgrounds
A five-stage conceptual loop: Predict → Derivation / Grid → Guided → Independent → Review.

### 📚 5. Guided Learning Journey
Linear curriculum with prerequisite checks and progressive mastery (locked → blue → bronze → silver → gold).

### 💡 6. Solve-for-Explanation Engine
POST requests with `{ solve: true }` return full step-by-step walkthroughs for over 50 puzzle types.

### 🛡️ 7. Proctoring System
Optional session supervision with webcam emotion detection, tab-switch logging, and review metrics.

### 🎨 8. Custom Interactive Labs
Includes dedicated interactive workspaces: `LinearAlgebraApp` (56 missions across 6 modules), `GeometryApp`, `ProbLabApp`, `PythagLabApp`, `BearingsLabApp`, `SudokuApp`, `VisualMathLabRedux`, and more.

---

## ⚙️ Quick Start

### Prerequisites
- Node.js **20+**
- MongoDB (optional — runs with built-in in-memory fallback)
- npm

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd <repo-folder>

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
SOOTRA_SEED_USERS=alice:secret123,bob:secret456
```

### Running Locally

```bash
# Terminal 1 — Start Backend Server (port 4000)
cd server && node index.js

# Terminal 2 — Start Frontend Dev Server (port 5173)
cd client && npm run dev
```

Visit **`http://localhost:5173`** in your browser. The Vite development server automatically proxies API calls to port 4000.

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

## 🧩 Adding a New Puzzle

1. **Server Route**: Add `GET /<type>-api/question` and `POST /<type>-api/check` in the appropriate route file under `server/routes/`.
2. **Proxy**: Add the route prefix in `client/vite.config.js`.
3. **Tile Registry**: Register the puzzle in `client/src/features/tiles.js`.
4. **Component**: Create or register the quiz component using `makeQuizApp` in `client/src/App.jsx`.
5. **Explanation**: Add a solution explanation handler in `server/explanations.js`.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
