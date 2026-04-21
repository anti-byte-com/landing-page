# 🚀 Anti-Byte Lean Startup Studio - Landing Page v5

<div align="center">
  <a href="#about">
    <img src="https://img.shields.io/badge/React-18.3-61dafb?logo=react&logoColor=white" alt="React" />
  </a>
  <a href="#about">
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="#about">
    <img src="https://img.shields.io/badge/Vite-5.3-01b579?logo=vite&logoColor=white" alt="Vite" />
  </a>
  <a href="#about">
    <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="#about">
    <img src="https://img.shields.io/badge/React_Router-7.14-023aae?logo=react-router&logoColor=white" alt="React Router" />
  </a>
  <a href="#about">
    <img src="https://img.shields.io/badge/Docker-2496ed?logo=docker&logoColor=white" alt="Docker" />
  </a>
  <br><br>
  <a href="#about">
    <img src="https://img.shields.io/badge/Status-Production-ready-00c853?label=Ready&labelColor=00c853" alt="Status" />
  </a>
  <br><br>
  <p><strong>Building & Validating Products with Scientific Rigor</strong></p>
  <p>Transformando ideias em produtos digitais escaláveis com metodologia Lean Startup</p>
</div>

---

## 📚 Sobre o Projeto

A **Anti-Byte Landing Page v5** é uma aplicação web moderna desenvolvida para representar o **Anti-Byte Lean Startup Studio** — um estúdio dedicado a construir e validar produtos digitais com rigor científico.

Esta landing page implementa duas rotas principais:

| Rota | Descrição |
|------|-----------|
| `/` (Home) | Página principal com seções Hero, Method, Philosophy e Projects |
| `/about` (About Us) | Página detalhada sobre missão, times, história e valores da empresa |

---

## 🎯 Visão Geral

### O que é este projeto?

Um projeto de **Landing Page** construída com as melhores práticas de desenvolvimento moderno, focada em:

- **Design System Dark Obsidian** — Paleta de cores sofisticada inspirada em material you design
- **Arquitetura Organizada** — Componentes modularizados e escaláveis
- **Performance** — Build otimizado com React Router Dom
- **Acessibilidade** — Foco em experiências inclusivas
- **Docker Ready** — Containers prontos para deploy

### Stack Tecnológico

- **React 18.3** — Biblioteca JavaScript para construção de interfaces
- **React Router Dom 7.14** — Navegação de cliente para SPA
- **Tailwind CSS 3.4** — Utility-first CSS framework
- **Vite 5.3** — Build tool ultra-rápido
- **TypeScript 5** — Tipagem estática para segurança
- **Playwright** — Testes E2E automatizados
- **Docker** — Containerização e deploy consistente

### Destaques do Projeto

- ✅ **Design System Material You** — Cores, typography e spacing consistentes
- ✅ **Glassmorphism & Gradient** — Efeitos visuais modernos
- ✅ **Tonal Layering** — Profundidade visual via sombras tonais
- ✅ **No-Line Directive** — Separação por background, não borders
- ✅ **Componentização Modular** — Componentes reutilizáveis e bem estruturados
- ✅ **React Router** — Navegação SPA com history API
- ✅ **Scroll Hook Customizado** — UX consistente ao navegar entre páginas

---

## 🖥️ Requisitos de Sistema

### Mínimos

| Requisito | Versão Mínima |
|-----------|---------------|
| Node.js | 18.x ou superior |
| npm | 9.x ou superior |
| yarn | 3.x ou superior (opcional) |
| pnpm | 8.x ou superior (opcional) |

### Recomendados

| Requisito | Versão Recomendada |
|-----------|-------------------|
| Node.js | 20.x |
| RAM | 8GB ou superior |
| Armazenamento | 2GB de espaço livre |

### Dependências do Sistema

- Docker (opcional, para builds containerizados)
- Git (para controle de versão)

---

## 📦 Instalação

### 1. Clonar o Repositório

```bash
git clone https://github.com/your-org/landing-page-v5-t2.git
cd landing-page-v5-t2
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configurar Variáveis de Ambiente (Opcional)

O projeto não requer variáveis de ambiente para funcionar, mas você pode configurar:

```bash
# .env
NODE_ENV=development
```

### 4. Verificar Instalação

```bash
npm run dev
```

Se tudo estiver correto, o projeto irá iniciar no `http://localhost:5173`.

---

## 💻 Desenvolvimento

### Iniciar o Desenvolvimento

```bash
npm run dev
```

A aplicação irá iniciar no `http://localhost:5173` com hot-reload automático.

### Hot Reload

O Vite oferece hot module replacement (HMR), então alterações no código são refletidas instantaneamente sem recarregar a página.

### Observação sobre Arquivos

- Não adicione arquivos ao diretório `node_modules/`
- Commits devem focar em código fonte, não em `node_modules/`
- Use `.gitignore` para ignorar builds e dependências

---

## 📦 Build de Produção

### Criar Build Otimizado

```bash
npm run build
```

Isso irá criar arquivos estáticos otimizados no diretório `dist/`.

### Estrutura do Build

```
dist/
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── favicon.ico
├── index.html
├── about.html
└── 404.html
```

### Preview do Build

```bash
npm run preview
```

Isso irá iniciar um servidor em `http://localhost:4173` para testar o build de produção localmente.

---

## ✅ Testes

### Testes Unitários (Vitest)

```bash
npm run test
```

Executa testes unitários com Vitest.

#### Testes Unitários Apenas

```bash
npm run test:unit
```

#### Testes de i18n (LanguageSelector)

```bash
npm run test:unit
```

Os testes unitários para o componente `LanguageSelector` validam:

- ✅ Renderização do indicador de idioma atual
- ✅ Exibição do código do idioma (PT/EN)
- ✅ Atributo `aria-label` para acessibilidade

Localização: `tests/unit/language-selector.spec.tsx`

### Testes E2E (Playwright)

```bash
npm run test:playwright
```

Executa testes de ponta a ponta usando Playwright.

#### Teste de i18n E2E

```bash
npx playwright test tests/home-language.spec.ts
```

Verifica se o selecto de idioma está presente no footer da página inicial e pode alternar entre idiomas.

Localização: `tests/home-language.spec.ts`

#### Configuração do Playwright

```bash
npx playwright install
```

---

## 🐳 Docker

### Construir Imagem

```bash
docker build -t anti-byte-landing:v5 .
```

### Executar Container

```bash
docker run -p 8080:80 anti-byte-landing:v5
```

### Docker Compose

```bash
docker-compose up
```

Isso irá:
- Construir a imagem
- Mapear porta 8080:80
- Persistir logs em `./logs/`

### Docker Compose Com Build

```bash
docker-compose build
docker-compose up
```

---

## 📁 Estrutura do Projeto

```
landing-page-v5-t2/
├── src/
│   ├── components/          # Componentes React organizados
│   │   ├── pages/           # Páginas completas (full-page layouts)
│   │   ├── shared/          # Componentes universais (todas as páginas usam)
│   │   ├── atoms/           # Componentes atômicos (single-purpose)
│   │   └── sections/        # Seções reutilizáveis
│   ├── hooks/               # Hooks customizados
│   ├── main.jsx             # Entry point
│   └── App.tsx              # Componente raiz da aplicação
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/
│   └── styles/
│       └── global.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.cjs
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── nginx.conf
├── DESIGN.md                # Design System Specification
├── ABOUT-US.md              # Documentação da página About Us
├── NABAR-GUIDE.md          # Guia de Navegação
├── ROUTING-MIGRATION.md    # Documentação de migração de routing
├── SCROLL-HOOK.md          # Documentação do hook de scroll
├── COMPONENTS-STRUCTURE.md  # Estrutura de componentes
├── README.md                # Este arquivo
└── run_all_prompts.sh      # Script para rodar todos os prompts
```

---

## 🎨 Design System

### Cores - Dark Obsidian Theme

```css
/* Superfícies */
surface:             #0b0e16
surface-container:   #161924
surface-container-low:    #1c2031
surface-container-high:   #12141d
surface-container-highest:#0f121a
surface-container-lowest:#0c0e16
surface-bright:      #1a1d29
surface-tint:        #3d4a75

/* Cores Funcionais */
primary:             #6dfe9c
primary-container:   #0b2f16
secondary:           #9392ff
tertiary:            #ffb95f
error:               #ff716c

/* Textos */
on-surface:          #e7e8ed
on-surface-variant:  #b0b3c4
on-primary:          #021c0f
secondary-focus:     #a5a4ff
```

### Typography

| Fonte | Uso |
|-------|------|
| **Inter** | Corpo de texto (UI) |
| **Manrope** | Títulos e Display |

### Efeitos Visuais

- **Glassmorphism**: `backdrop-blur-xl`, `bg-surface-bright/60`
- **Tonal Layering**: Sombras para profundidade, não borders
- **No-Line Directive**: Separação por background, não borders
- **Hover States**: Tonal shift de `surface-container-low` → `high`

---

## 📚 Documentação Relacionada

| Documento | Descrição |
|-----------|-----------|
| [DESIGN.md](./design/DESIGN.md) | Design System Specification completo |
| [COMPONENTS-STRUCTURE.md](./COMPONENTS-STRUCTURE.md) | Estrutura de componentes organizada |
| [ROUTING-MIGRATION.md](./ROUTING-MIGRATION.md) | Migração para React Router Dom |
| [ABOUT-US.md](./ABOUT-US.md) | Documentação da página About Us |
| [NABAR-GUIDE.md](./NABAR-GUIDE.md) | Guia de navegação do projeto |
| [SCROLL-HOOK.md](./SCROLL-HOOK.md) | Hook customizado useScrollToTop |

---

## 🛠️ Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| `dev` | `npm run dev` | Inicia desenvolvimento com hot-reload |
| `build` | `npm run build` | Cria build otimizado para produção |
| `preview` | `npm run preview` | Preview do build em localhost:4173 |
| `test` | `npm run test` | Executa testes unitários (Vitest) |
| `test:unit` | `npm run test:unit` | Executa apenas testes unitários |
| `test:playwright` | `npm run test:playwright` | Executa testes E2E (Playwright) |
| `docker:build` | `docker build -t anti-byte-landing:v5 .` | Constrói imagem Docker |
| `docker:up` | `docker-compose up` | Inicia com Docker Compose |

---

## 🤝 Contribuição

Este projeto é desenvolvido seguindo princípios de **Lean Startup**. Queremos sua contribuição!

### Como Contribuir

1. **Fork** o repositório
2. Crie um **branch** para sua feature (`git checkout -b feature/nova-feature`)
3. Faça seus **commits** (`git commit -m 'Add nova feature'`)
4. Faça o **push** (`git push origin feature/nova-feature`)
5. Abra um **Pull Request**

### Guidelines de Código

- Siga o [DESIGN.md](./design/DESIGN.md) para manter consistência visual
- Use TypeScript para tipagem correta
- Mantenha componentes pequenos e reutilizáveis
- Adicione testes para funcionalidades novas
- Documente hooks e componentes complexos

### Código de Conduta

Contribuidores devem seguir nosso código de conduta para criar um ambiente inclusivo e colaborativo.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

```
Copyright © 2026 Anti-Byte Lean Startup Studio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contato

**Anti-Byte Lean Startup Studio**

- **Website**: https://anti-byte.com
- **Email**: hello@anti-byte.com
- **GitHub**: https://github.com/anti-byte

---

<div align="center">
  <p><strong>Building & Validating Products with Scientific Rigor</strong></p>
  <p><a href="#about">⬅️ Voltar ao topo</a></p>
</div>
