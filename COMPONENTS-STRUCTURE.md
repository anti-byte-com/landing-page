# 🏗️ Estrutura de Componentes Organizada - Anti-Byte Landing Page

## Visão Geral

Este padrão de organização foi implementado para manter consistência, escalabilidade e clareza na arquitetura do projeto. Seguindo o exemplo da página `About Section` que já existia com estrutura modular, aplicamos esse padrão a todas as outras seções e componentes compartilhados.

---

## 📁 Nova Estrutura de Pastas

```
src/components/
├── pages/                    # Páginas completas (full-page layouts)
│   ├── home/                 # Home page ("/")
│   │   ├── index.tsx        # Compõe: Hero + Method + Philosophy + Projects + Footer
│   │   └── index.ts         # Exporta Home
│   ├── about/                # About Us page ("/about")
│   │   ├── index.tsx        # Compõe: Navbar + AboutSection (com tabs) + Footer
│   │   └── index.ts         # Exporta About
│   └── projects/            # Projects page (pode ser estendido no futuro)
├── shared/                   # Componentes universais (todas as páginas usam)
│   ├── Container.tsx         # Wrapper de layout max-w-7xl
│   ├── NavbarContainer.tsx   # Só aparece fora da home (/about, etc.)
│   ├── Footer.tsx            # Newsletter + links sociais + copyright
│   └── index.ts              # Exporta todos os componentes shared
├── atoms/                    # Componentes atômicos (single-purpose)
│   ├── Card.tsx              # Card com tonal hover (surface-container-low → high)
│   ├── SectionHeader.tsx     // Label + título padrão
│   ├── StatusBadge.tsx       // Badge derivado da missão/hero stats
│   ├── Newsletter.tsx        // Form de newsletter com metrics
│   └── Section.tsx           // Wrapper básico de seção
└── sections/                 # Seções reutilizáveis dentro das páginas
    ├── HeroSection/          # [NOVA] Pasta dedicada com index.ts
    │   ├── Hero.tsx
    │   ├── Hero.Label.tsx
    │   ├── Hero.TitleDescription.tsx
    │   ├── Hero.GradientBackground.tsx
    │   ├── Hero.StatusBadges.tsx
    │   ├── Hero.StatsPanel.tsx
    │   ├── Hero.CTALinks.tsx
    │   ├── index.ts
    │   └── HeroSection.tsx   # Re-exporta Hero para compatibilidade
    ├── MethodSection/        # Já existia, mantido com bom padrão
    ├── PhilosophySection/    # Já existia, mantido com bom padrão
    ├── ProjectsSection/      # Já existia, mantido com bom padrão
    └── AboutSection/         # Já existia, mantido com bom padrão
```

---

## 🎯 Padrão Aplicado a Todas as Telas

### Páginas Completas (`/pages/*`)

Cada página tem sua própria pasta com:

1. **`index.tsx`** - Componente principal que compõe todas as seções da página
2. **`index.ts`** - Exportação simples para imports limpos

```typescript
// Exemplo: pages/home/index.tsx
import HeroSection from '@/sections/HeroSection';
import MethodSection from '@/sections/MethodSection';
import PhilosophySection from '@/sections/PhilosophySection';
import ProjectsSection from '@/sections/ProjectsSection';
import SharedFooter from '@/components/shared/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MethodSection />
      <PhilosophySection />
      <ProjectsSection />
      <SharedFooter />
    </>
  );
}
```

### Componentes Compartilhados (`/shared/*`)

Componentes que são usados por **todas** as páginas:

1. **NavbarContainer** - Só aparece em rotas que não sejam `/` (home)
2. **Footer** - Sempre presente para links sociais e newsletter
3. **Container** - Wrapper de layout consistente (`max-w-7xl`)

```typescript
// Exemplo: components/shared/Container.tsx
export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-7xl mx-auto px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
```

### Seções Reutilizáveis (`/sections/*`)

Seções que podem ser reutilizadas dentro das páginas ou standalone:

- **HeroSection** - Header principal com estatísticas
- **MethodSection** - Explicação do método Lean Startup
- **PhilosophySection** - Grid de princípios filosóficos
- **ProjectsSection** - Grid de projetos em andamento
- **AboutSection** - Página completa sobre a empresa

Todas as seções têm:
- Pasta própria com `index.ts`
- Sub-components organizados modularmente
- Interface clara para props

---

## 📦 Componentes Atômicos (`/atoms/*`)

Componentes de UI pequenos e single-purpose:

| Componente | Uso Principal |
|------------|---------------|
| `Card.tsx` | Cards com tonal hover (low → high) |
| `SectionHeader.tsx` | Label + título padrão |
| `StatusBadge.tsx` | Badge com cor derivada de tipo |
| `Newsletter.tsx` | Form com metrics grid |
| `Section.tsx` | Wrapper básico de seção |

---

## 🚀 Como Adicionar Nova Página

### Template Padrão

1. **Crie pasta:** `src/components/pages/nova-pagina/`
2. **Crie index.tsx principal:**
   ```tsx
   // nova-pagina/index.tsx
   import SectionOne from '@/sections/SectionOne';
   
   const NovaPagina: React.FC = () => {
     return (
       <div className="py-24 px-6 md:px-8">
         <SectionOne />
       </div>
     );
   };
   
   export default NovaPagina;
   ```
3. **Crie index.ts de exportação:**
   ```ts
   // nova-pagina/index.ts
   export { default } from './index.tsx';
   ```
4. **Atualize App.tsx:**
   ```tsx
   import NovaPagina from '@/components/pages/nova-pagina';
   
   <Routes>
     <Route path="/nova" element={<NovaPagina />} />
   </Routes>
   ```

---

## 🔄 Comparativo: Antes vs Depois

### Import no App.tsx

| Antes | Depois |
|-------|--------|
| `import Hero from './components/Hero';` | `import Home from '@/components/pages/home';` |
| `import MethodSection from './components/MethodSection';` | `// Apenas 3 imports em total!` |
| `import PhilosophySection from './components/PhilosophySection';` | `import About from '@/components/pages/about';` |
| `import ProjectsSection from './components/ProjectsSection';` | |
| `import Footer from './components/Footer';` | |

### Organização de Arquivos

| Antes (Achatado) | Depois (Hierárquico) |
|-----------------|---------------------|
| 28 arquivos espalhados em pastas diferentes | Organizados por propósito e contexto |
| Dificil encontrar componente compartilhável | Tudo em `/shared/` com nome claro |
| Confusão: alguns componentes têm pasta, outros não | Padronizado: todas as páginas têm estrutura consistente |

---

## ✅ Benefícios da Nova Estrutura

### Manutenção
- **Clareza:** Cada arquivo sabe seu propósito
- **Localização fácil:** Componentes universais em `/shared/`, atômicos em `/atoms/`
- **Templates definidos:** Adicionar nova página segue o mesmo padrão

### Escalabilidade
- **Crescimento orgânico:** Novas páginas usam template consistente
- **Refatoração segura:** Mudanças localizadas, menos impacto colateral
- **Team-friendly:** Qualquer membro da equipe entende a estrutura

### Consistência
- **Design system alinhado:** Segue padrões do DESIGN.md
- **Naming convencional:** `Shared*`, `AboutSection` → `sections/AboutSection`
- **Exportação clara:** `index.ts` em cada pasta principal

---

## 📚 Relacionado

- [DESIGN.md](../../../design/DESIGN.md) - Design System Specification
- [ROUTING-MIGRATION.md](./ROUTING-MIGRATION.md) - Migração para React Router Dom
- [ABOUT-US.md](./ABOUT-US.md) - Documentação completa da página About Us
- [README.md](./README.md) - README principal do projeto

---

**Data:** 23 de abril de 2026  
**Status:** ✅ Implementado e validado  
**Build:** Compilou com sucesso (70+ módulos)
