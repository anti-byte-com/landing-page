# 📘 Página About Us - Anti-Byte Lean Startup Studio

## Visão Geral

A página **About Us** foi implementada como uma aplicação SPA (Single Page Application) que é acessível através de:

1. Link no Footer → "Company" → **"About Us"**
2. Hash URL → `window.location.hash === '#about-us'`

## 🚀 Navegação

Ao clicar no link "About Us" no footer:
- A página alternna instantaneamente (SPA - sem recarregamento)
- Scroll suave até a seção `#about-us`
- Footer permanece visível com Newsletter e links de navegação

## 📁 Estrutura de Arquivos Criados

```
src/
├── data/
│   ├── about-us.ts                    # Dados: equipe, história, valores, missão
│   └── mission-beliefs.ts             # Deriva crenças da missão
└── components/about/
    ├── AboutUsSection.tsx              # Componente principal com navegação SPA
    ├── AboutUs.Mission.tsx             # Seção de missão + crenças
    ├── AboutUs.Teams.tsx               # Grid de membros da equipe
    ├── AboutUs.TeamMember.tsx          # Card individual do membro
    ├── AboutUs.History.tsx             # Linha do tempo da história
    ├── AboutUs.Values.tsx              # Grid dos valores da empresa
    └── AboutUs.Contact.tsx             # Informações de contato
```

## 🎨 Design System Alignment

Todos os componentes seguem as diretrizes do [DESIGN.md](../../../design/DESIGN.md):

| Diretriz | Implementação |
|----------|---------------|
| **No-Line Directive** | Separação por tonal shift (`surface-container-low` vs `surface-container-high`), sem borders 1px |
| **Glass & Gradient Rule** | Background gradient sutil com backdrop-blur; signature accent de 10deg |
| **Tonal Layering** | Cards alternam entre `low`, `highest`, `lowest` para criar profundidade |
| **Typography** | Manrope (display: h3 2xl) + Inter (body: sm/text-sm) conforme spec |
| **Elevation** | Ambient shadows via tonal shift, não drop shadows padrão |

## 📊 Seções da Página

### 1. Navigation Tabs
- 5 tabs para alternar entre seções: Missão, Equipe, História, Valores, Contato
- Tab ativa usa `bg-surface-container-lowest` com texto `primary`
- Hover: `hover:bg-surface-container-lowest hover:text-secondary`

### 2. Missão (Mission)
- Título derivado de `companyMission.title`
- Descrição em parágrafo largo
- Grid de crenças com checkmark em badge circular

### 3. Equipe (Teams)
- Grid responsivo: 1 col (mobile), 2 col (md+)
- Card por membro com:
  - Nome e cargo no header
  - Bio no body
  - Expertise tags em badges `bg-surface-container-highest`
  - Decorative accent gradient na hover

### 4. História (History)
- Linha do tempo vertical com 3 períodos
- Cards alternam tonal (`low`/`high`) como zebra striping
- Ano no canto superior direito como elemento decorativo

### 5. Valores (Values)
- Grid vertical de 4 valores
- Cada valor em card com:
  - Título em `font-display`
  - Descrição completa
  - Accent gradient no hover
  - Decorative corner gradient

### 6. Contato (Contact)
- Email, localização e timezone em cards stackados
- Icons SVG para cada tipo de informação
- CTA final convidando ao contato

## 🔄 Transições SPA

Para transição suave entre Home ↔ About Us:

```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}
```

Aplicado no container de conteúdo do `AboutUsSection`.

## 📝 Dados

### Equipe (`about-us.ts`)
- 4 membros com nome, cargo, bio e expertise
- Todos os campos são textos originais em português

### História (`about-us.ts`)  
- 3 períodos: "A Semente" (2018-2021), "Validação" (2021-2023), "Lean Startup Studio" (Presente)

### Valores (`about-us.ts`)
- 4 valores alinhados ao Lean Startup methodology:
  - Validação sobre Opinião
  - Falhar Elegante
  - Transparência Radical
  - Deep Work Profundo

### Missão (`about-us.ts`)
- Título, descrição e 4 crenças centrais derivadas

## 🧪 Testar

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## 🔗 Links Externos

O componente `Footer.SocialLink` usa:
- Twitter/X, GitHub, LinkedIn
- Cada um com icon SVG ou emoji unicode apropriado
- Background `bg-secondary/10` (token do design system)

---

**Criado:** 22 de abril de 2026  
**Design System:** [DESIGN.md](../../../design/DESIGN.md)  
**Status:** ✅ Build com sucesso (70 modules)
