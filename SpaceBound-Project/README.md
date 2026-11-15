# After the Mission — NASA's Off-World Archive

An interactive field guide to the rovers, landers and probes NASA left on the Moon, Mars and in deep space. Built for curious explorers aged 9–14.

- **15 mission stories** (Moon, Mars, deep space) with filters and search
- **Interactive WebGL2 globes** of the Moon and Mars — drag to rotate, scroll to zoom, tap a beacon to open its story
- **Documentary-style modal**: archival NASA images or illustrated scenes, 4 narrated beats per mission
- **NASA Debris Assistant**: a RAG chatbot (AnythingLLM) that adapts its answers to the visitor's age

## Project structure

```
after-the-mission/
├── index.html                 # Page markup only
├── css/
│   ├── base.css               # Variables, reset, shared components
│   ├── atlas.css              # Header, opening, globes, library, modal
│   ├── story-motion.css       # Animated SVG overlays
│   └── chat.css               # Assistant widget
└── js/
    ├── data/
    │   ├── sites.js           # Landing-site coordinates for the globes
    │   ├── stories.js         # Mission stories (content)
    │   ├── films.js           # Documentary beats per story
    │   └── illustrations.js   # SVG scenes
    ├── globe/
    │   ├── shaders.js         # WebGL2 planet shaders
    │   └── planet.js          # Globe rendering + controls
    ├── story/
    │   ├── motion.js          # Card / scene animations
    │   ├── modal.js           # Story modal
    │   └── library.js         # Filters, search, cards
    ├── main.js                # Entry point
    └── chat/
        ├── assistant.js       # Chat logic
        └── config.example.js  # Template for local config (copy to config.js)
```

Scripts are plain browser scripts loaded in order with `defer` — no build step, no dependencies.

## Run locally

```bash
git clone https://github.com/<your-username>/after-the-mission.git
cd after-the-mission
python3 -m http.server 8000
# open http://localhost:8000
```

Opening `index.html` directly also works.

## Assistant setup (optional)

The chatbot needs [AnythingLLM Desktop](https://anythingllm.com) running locally with the Developer API enabled.

1. Create a workspace and add the NASA mission documents to it.
2. Generate a Developer API key (Settings → API Access).
3. Copy the config template and fill it in:
   ```bash
   cp js/chat/config.example.js js/chat/config.js
   ```
4. Reload the page.

`js/chat/config.js` is git-ignored — your key stays on your machine. You can also paste a key at runtime with the **API KEY** button in the widget.

## Credits

Mission facts and archival images: NASA, NASA/JPL-Caltech, NASA NSSDC (links are shown in each story). Planet surfaces and scene illustrations are artistic reconstructions.

## Author

Abdelkbir Nainiaa — Software & AI Engineer
