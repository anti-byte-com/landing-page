# AGENTS.md — Anti-Byte Landing Page v5

## Setup

- Node: 20.18.0 (see `.nvmrc`)
- Install: `npm ci` (respects lockfile, `.npmrc` sets `save-exact=true`)
- Dev: `npm run dev` (Vite on `localhost:5173`, `usePolling: true` for Docker compat)

## Commands

| Command | What it does |
|---------|-------------|
| `npm run lint` | ESLint 9 flat config on `src/` |
| `npm run lint:fix` | ESLint with --fix |
| `npm run format` | Prettier write on `src/` |
| `npm run format:check` | Prettier check |
| `npm run build` | Vite build to `dist/` (sourcemaps on, **minify off**) |
| `npm run preview` | Serve `dist/` on `localhost:4173` |
| `npm run test:playwright` | E2E via Playwright (builds + previews first) |

**No `npm run test` or `npm run typecheck` exist.** Watch out: README claims `test`/`test:unit` but those scripts are missing (no Vitest installed). Only Playwright E2E is wired.

## Architecture

- **Framework**: React 18.3 + TypeScript 5 + Vite 5.3 (SWC plugin, not Babel)
- **Styling**: Tailwind CSS 3.4, custom Dark Obsidian theme (colors in `tailwind.config.js`)
- **Routing**: React Router DOM v7, 12 routes in `src/App.tsx`, SPA (no SSR)
- **i18n**: i18next + `react-i18next` + `i18next-browser-languagedetector`. Default: `pt-BR`, fallback: `en-US`. Uses `localStorage`, then `navigator`, then `<html lang>`. `useSuspense: false`.
- **Path alias**: `@/` → `./src/` (configured in both `tsconfig.json` and `vite.config.ts`)
- **Component structure**: `pages/` (full page layouts) → `shared/` (Navbar, Footer, Container) → `sections/` (Hero, Method, Philosophy, Projects, About) → `atoms/` (Card, SectionHeader, etc.)
- **Scroll**: `useScrollToTop` hook (in `src/hooks/`) called in `App.tsx` globally + per-page, respects `prefers-reduced-motion`
- **Build output**: `dist/`, served by nginx in Docker (SPA fallback via `try_files $uri /index.html`)

## Testing

- Playwright config at root — tests in `./tests/`
- **WebServer**: `npm run build && npm run preview` on port `4173` (not dev server)
- Only Chromium project configured
- `baseURL: 'http://localhost:4173'`
- Run: `npm run test:playwright`

## Docker

- Multi-stage: `node:20-alpine` deps → builder → `nginx:alpine` runner
- Port `80` mapped to `8080` in docker-compose
- `Dockerfile` + `docker-compose.yml` at root

## Code Style

- Prettier: `semi`, `singleQuote`, `tabWidth: 2`, `trailingComma: "es5"`, `printWidth: 80`
- ESLint: `typescript-eslint` recommended, `react-hooks` rules, `react-refresh/only-export-components` warn
- `.gitignore` includes `.env`, `dist/`, `node_modules/`, `logs/`

## Important Quirks

- **`minify: false`** in vite config — don't assume prod builds are minified
- **`sourcemap: true`** in production build
- `.env` file contains **OpenAI/LM Studio config** for agent tooling, **not app config** (`.env.example` has the full template)
- No conventional commits, no pre-commit hooks, no CI config visible
- `/projects` is a redirect page (`ProjectsRedirect`), actual projects at `/projects/current` and archived at `/cases/archived`
