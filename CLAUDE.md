# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start Vite dev server with HMR
npm run build     # tsc type-check then Vite production build
npm run lint      # ESLint across all TS/TSX files
npm run preview   # serve the production build locally
```

There is no test suite configured.

## Architecture

Single-page portfolio site — React 19 + TypeScript + Vite, no routing library.

**Data layer:** `src/data/portfolio.ts` is the single source of truth for all content (name, bio, experience, projects, skills, links). All components import from here. To update content, edit only this file.

**Layout:** `App.tsx` composes a fixed two-column layout: a `<Sidebar>` (identity, skills, links) on the left, and a tab-switched main panel on the right. The active tab (`"projects"` | `"experience"`) is the only piece of React state in the app.

**Styling:** CSS Modules per component (`*.module.css`). Global design tokens and the mocha/coffee palette are defined as CSS custom properties in `src/index.css`. Use those variables (`--cream`, `--mocha`, `--espresso`, `--accent`, etc.) rather than hard-coding colours. Font is JetBrains Mono throughout.

**No-scroll constraint:** `html`, `body`, and `#root` are `overflow: hidden; height: 100%`. Scrollable regions must be contained within components — do not break this at the layout level.
