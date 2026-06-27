# Anti-Byte Lean Startup Studio — Landing Page v5

<div align="center">
  <a href="#sobre">
    <img src="https://img.shields.io/badge/React-18.3-61dafb?logo=react&logoColor=white" alt="React" />
  </a>
  <a href="#sobre">
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="#sobre">
    <img src="https://img.shields.io/badge/Vite-5.3-01b579?logo=vite&logoColor=white" alt="Vite" />
  </a>
  <a href="#sobre">
    <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="#sobre">
    <img src="https://img.shields.io/badge/React_Router-7-023aae?logo=react-router&logoColor=white" alt="React Router" />
  </a>
  <a href="#sobre">
    <img src="https://img.shields.io/badge/Docker-2496ed?logo=docker&logoColor=white" alt="Docker" />
  </a>
  <br><br>
  <p><strong>Building & Validating Products with Scientific Rigor</strong></p>
  <p>Transformando ideias em produtos digitais escaláveis com metodologia Lean Startup</p>
</div>

---

## Sobre

Landing page SPA do **Anti-Byte Lean Startup Studio**, construída com React 18 + TypeScript 5 + Vite 5 (SWC).

### Rotas

| Rota | Página |
|------|--------|
| `/` | Home (Hero, Method, Philosophy, Projects) |
| `/about` | About Us |
| `/blog` | Blog |
| `/projects` | Redireciona para /projects/current |
| `/projects/current` | Current Projects |
| `/cases/archived` | Archived Case Studies |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/cookies` | Cookie Policy |
| `/resources` | Resources |
| `/our-approach` | Our Approach |
| `/contact` | Contact |

### Stack

- **React 18.3** + **TypeScript 5** — UI e tipagem
- **Vite 5.3** com **@vitejs/plugin-react-swc** — build rápido (SWC, não Babel)
- **Tailwind CSS 3.4** — temas customizados Dark Obsidian
- **React Router DOM 7** — SPA com 12 rotas
- **i18next** + **react-i18next** — i18n pt-BR (default) / en-US (fallback)
- **Playwright** — testes E2E (Chromium)
- **Docker** — multi-stage build com nginx:alpine

---

## Setup rápido

```bash
nvm use        # Node 20.18.0
npm ci         # instala dependências (lockfile)
npm run dev    # http://localhost:5173
```

---

## Comandos

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Vite dev server (usePolling: true para Docker) |
| `npm run build` | Build para `dist/` (sourcemap on, **minify off**) |
| `npm run preview` | Preview do build em `localhost:4173` |
| `npm run lint` | ESLint 9 flat config em `src/` |
| `npm run lint:fix` | ESLint com --fix |
| `npm run format` | Prettier em `src/` |
| `npm run format:check` | Prettier check |
| `npm run test:playwright` | E2E Playwright (build + preview automático) |

> **Nota:** Não existem scripts `test` ou `test:unit` — não há Vitest/Jest instalado. Apenas Playwright E2E.

---

## Testes

Testes E2E com Playwright em Chromium. O WebServer sobe `npm run build && npm run preview` na porta `4173`.

```bash
npm run test:playwright
```

---

## Estrutura

```
src/
├── components/
│   ├── pages/        (12 páginas completas)
│   ├── shared/       (Navbar, Footer, Container, Header, LanguageSelector)
│   ├── sections/     (Hero, Method, Philosophy, Projects, About)
│   └── atoms/        (Card, SectionHeader, StatusBadge)
├── config/           (i18n.ts, constants.ts)
├── data/             (dados estruturados com chaves de tradução)
├── hooks/            (useScrollToTop)
├── locales/          (pt-BR/translation.json, en-US/translation.json)
└── types/            (interfaces compartilhadas)
```

Path alias: `@/` → `./src/`

---

## Design System

Tema escuro **Dark Obsidian** com cores definidas no `tailwind.config.js`.

| Token | Hex | Uso |
|-------|-----|-----|
| `surface` | `#0b0e16` | Fundo principal |
| `surface-container` | `#161924` | Painéis |
| `primary` | `#6dfe9c` | CTAs, destaques |
| `secondary` | `#9392ff` | Ações secundárias, links |
| `tertiary` | `#ffb95f` | Avisos |
| `error` | `#ff716c` | Erros |

- **Tipografia:** Inter (corpo), Manrope (títulos)
- **Glassmorphism:** `backdrop-blur-xl`, `bg-surface-bright/60`
- **Tonal Layering:** profundidade via cores de superfície, sem borders
- **No-Line Directive:** separação por background shift, não borders

Detalhes completos em [`design/DESIGN.md`](./design/DESIGN.md).

---

## Docker

```bash
docker build -t anti-byte-landing:v5 .
docker run -p 8080:80 anti-byte-landing:v5
docker compose up
```

---

## Internacionalização

- **pt-BR** (default) / **en-US** (fallback)
- Detecção: `localStorage` → `navigator` → `<html lang>`
- Arquivos: `src/locales/{pt-BR,en-US}/translation.json`
- Uso: `import { useTranslation } from 'react-i18next'` + `{t('chave')}`
- `useSuspense: false`

---

## Licença

MIT &copy; 2026 Anti-Byte Lean Startup Studio
