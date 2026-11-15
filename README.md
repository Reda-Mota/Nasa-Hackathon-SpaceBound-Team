# 🌌 AFTER THE MISSION
### The stories of what humanity left beyond Earth.

> **Every mission has an ending. Every landing leaves a story.**

An interactive space exploration experience that takes curious minds beyond Earth to discover the spacecraft, rovers, landers, and scientific instruments humanity left behind on the Moon, Mars, and across deep space.

Designed for explorers aged **9–14**, *After the Mission* transforms forgotten mission hardware into an immersive journey through space history, science, and discovery.

---

## ✦ EXPLORE THE UNKNOWN

Discover the hidden stories behind humanity's greatest space missions.

### 🌕 01 — Interactive Planetary Exploration

Explore the Moon and Mars through interactive WebGL2 globes.

- Rotate planets with natural drag controls.
- Zoom in and out to explore planetary surfaces.
- Discover historical landing locations through interactive beacons.
- Select a location to unlock its mission story.

### 🚀 02 — Mission Stories

Travel through a curated collection of **15 space missions** across three exploration zones.

| Exploration Zone | Discover |
|:---|:---|
| 🌕 The Moon | Lunar landers, scientific instruments, and abandoned equipment. |
| 🔴 Mars | Rovers, landers, and robotic explorers. |
| ✨ Deep Space | Probes and spacecraft traveling beyond planetary boundaries. |

Find missions through intelligent search and category filters.

### 🎬 03 — Documentary Experience

Every mission becomes a visual storytelling experience.

- Archival photographs and illustrated environments.
- Four documentary-style narrative sequences per mission.
- Animated SVG elements and cinematic transitions.
- Historical facts presented through accessible storytelling.

**Not just reading about history. Experiencing it.**

### 🤖 04 — AI Space Assistant

Meet the **Mission Archive Assistant**, an AI-powered conversational guide.

Built around Retrieval-Augmented Generation (RAG) using AnythingLLM.

- Answers questions using a curated knowledge base.
- Retrieves relevant information from mission documents.
- Adapts explanations to the visitor's age and understanding.
- Makes complex space science accessible to younger explorers.

Ask questions. Discover facts. Explore further.

---

## 🪐 THE EXPERIENCE

The interface follows a space-inspired visual language designed to make exploration intuitive and engaging.

**Design principles:**

- Immersive dark-space environments.
- Planetary surfaces and atmospheric gradients.
- Clear visual hierarchy and readable typography.
- Interactive discovery instead of overwhelming information.
- Smooth animations and meaningful micro-interactions.
- Responsive layouts for different screen sizes.

The goal is to make every interaction feel like opening another chapter of a space exploration archive.

---

## 🛠️ TECHNOLOGY STACK

| Technology | Purpose |
|:---|:---|
| HTML5 | Semantic structure and page markup |
| CSS3 | Visual design, responsive layouts, and animations |
| JavaScript | Application logic and interactivity |
| WebGL2 | Interactive planetary rendering |
| GLSL | Planetary shaders and visual effects |
| SVG | Animated illustrations and visual storytelling |
| AnythingLLM | AI knowledge retrieval and conversational interface |
| RAG | Grounded responses from mission documentation |

**Architecture philosophy:** Lightweight, modular, and dependency-free.

The application uses native browser technologies without requiring a build system or external JavaScript frameworks.

---

## 📁 PROJECT ARCHITECTURE

```text
after-the-mission/
│
├── index.html
│
├── css/
│   ├── base.css
│   ├── atlas.css
│   ├── story-motion.css
│   └── chat.css
│
├── js/
│   ├── data/
│   │   ├── sites.js
│   │   ├── stories.js
│   │   ├── films.js
│   │   └── illustrations.js
│   │
│   ├── globe/
│   │   ├── shaders.js
│   │   └── planet.js
│   │
│   ├── story/
│   │   ├── motion.js
│   │   ├── modal.js
│   │   └── library.js
│   │
│   ├── chat/
│   │   ├── assistant.js
│   │   └── config.example.js
│   │
│   └── main.js
│
└── README.md
```

### Architecture Overview

- **Data Layer:** Stores mission information, landing coordinates, documentary sequences, and illustrations.
- **Rendering Layer:** Handles planetary visualization, shaders, and interactive controls.
- **Storytelling Layer:** Manages mission cards, animations, and documentary modals.
- **AI Layer:** Connects the conversational assistant to the RAG knowledge base.
- **Presentation Layer:** Controls layout, styling, responsive behavior, and visual consistency.

---

## ⚡ GETTING STARTED

### Requirements

- A modern browser with WebGL2 support.
- Python 3 (recommended for local development).
- AnythingLLM Desktop (optional, for the AI assistant).

### Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/after-the-mission.git

cd after-the-mission
```

Start a local development server:

```bash
python3 -m http.server 8000
```

Open your browser:

```text
http://localhost:8000
```

The application uses native browser scripts and requires no dependency installation or build process.

---

## 🤖 AI ASSISTANT CONFIGURATION

The AI assistant is an optional component powered by AnythingLLM Desktop.

### Setup

**1. Prepare the knowledge base**

Create a workspace in AnythingLLM and upload the relevant space mission documentation.

**2. Enable API access**

Generate a Developer API key through:

`Settings → API Access`

**3. Configure the application**

Copy the example configuration:

```bash
cp js/chat/config.example.js js/chat/config.js
```

Add your local API configuration.

**4. Launch the experience**

Reload the application and connect the assistant.

Your `config.js` file is excluded from Git through `.gitignore`, helping prevent accidental exposure of local credentials.

Alternatively, the assistant provides an API KEY option for runtime configuration.

> Never publish private API keys or expose production credentials in client-side JavaScript.

---

## 📚 SOURCES & ACKNOWLEDGEMENTS

Scientific accuracy and historical context are essential to this project.

Mission information and archival references are sourced from:

- NASA — Mission documentation and scientific information.
- NASA/JPL-Caltech — Planetary exploration and rover imagery.
- NASA NSSDC — Historical spacecraft and mission records.

Planetary environments and certain visual scenes are artistic reconstructions intended for educational storytelling.

All referenced archival materials remain attributed to their respective sources.

**Project identity and visual design are independent. This is an educational project and is not affiliated with, endorsed by, or sponsored by NASA. No NASA logo or official NASA branding is used.**

---

## 👨‍🚀 THE CREATORS

**Reda EL MOTASSADIQ** · **Yassine CHIBOUB** · **Fatime Zahrae CHIBOUB**

*Building experiences at the intersection of technology, artificial intelligence, science, and exploration.*

---

### ✨ THE MISSION NEVER REALLY ENDS.

*Some spacecraft stop communicating. Some rovers stop moving. But the discoveries they made continue to inspire the next generation of explorers.*

**Explore the past. Understand the present. Imagine what's next.**
