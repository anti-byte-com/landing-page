# Design System Specification: Technical Editorial

## 1. Overview & Creative North Star
### Creative North Star: "The Kinetic Architect"
This design system is built for power users who require precision, speed, and mental clarity. We move beyond the "generic SaaS" look by adopting a **Kinetic Architect** philosophy. This means the UI is not a flat collection of boxes, but a structured environment of depth and intentionality. 

We challenge the traditional rigid grid by using **tonal layering** and **asymmetric focal points**. Instead of boxing everything in, we use breathing room and sophisticated typography scales to guide the eye. The interface should feel like a high-end physical workstation—precise, weighted, and technologically advanced.

---

## 2. Color Theory & Tonal Depth
The palette is rooted in deep obsidian and midnight tones, providing a high-contrast canvas for vibrant functional accents.

### Surface Hierarchy & The "No-Line" Rule
Standard 1px borders are a relic of low-resolution design. In this system, boundaries are defined by **Background Shifts**, not lines.
- **The Core Rule:** Sections are separated by transitioning between `surface`, `surface-container-low`, and `surface-container-high`. 
- **Nesting:** To create depth, an inner card should use `surface-container-lowest` when sitting on a `surface-container-low` panel. This "negative depth" creates a carved, tactile feel.

### The Glass & Gradient Rule
To ensure the UI feels premium rather than "flat," apply these treatments:
- **Floating Modals/Menus:** Use `surface-bright` at 80% opacity with a `24px` backdrop blur. This "Glassmorphism" ensures the user never loses the context of their workflow.
- **Signature Accents:** Primary actions (`primary` to `primary-container`) should utilize a 10-degree linear gradient. This adds a subtle "sheen" that mimics high-quality hardware.

| Role | Token | Hex | Application |
| :--- | :--- | :--- | :--- |
| **Base** | `surface` | `#0b0e16` | Main application background. |
| **Panel** | `surface-container` | `#161924` | Sidebar and side-panel surfaces. |
| **Primary** | `primary` | `#6dfe9c` | Success states, primary CTAs, "Go" actions. |
| **Secondary** | `secondary` | `#9392ff` | Logic flows, selection states, secondary accents. |
| **Warning** | `tertiary` | `#ffb95f` | Logic branches, warning logs, pending states. |
| **Error** | `error` | `#ff716c` | Destructive actions, critical system errors. |

---

## 3. Typography
We use a dual-font strategy to balance editorial personality with technical utility.

*   **Display & Headlines (Manrope):** A geometric sans-serif that provides an authoritative, modern voice. Used for large data points and section headers.
*   **Body & Interface (Inter):** The workhorse. Chosen for its high x-height and readability in dense, code-like environments.

| Scale | Font | Size | weight | Usage |
| :--- | :--- | :--- | :--- | :--- |
| `display-md` | Manrope | 2.75rem | 700 | Dashboard hero metrics. |
| `headline-sm` | Manrope | 1.5rem | 600 | Major panel titles. |
| `title-sm` | Inter | 1.0rem | 600 | Card titles and modal headers. |
| `body-md` | Inter | 0.875rem | 400 | Standard UI text, property labels. |
| `label-sm` | Inter | 0.6875rem | 700 | All-caps metadata, micro-tags. |

---

## 4. Elevation & Depth
We reject traditional "drop shadows" in favor of **Ambient Light**.

*   **Tonal Layering:** 90% of hierarchy must be achieved through the `surface-container` tokens. 
*   **Ambient Shadows:** For floating elements (tooltips, dropdowns), use a multi-layered shadow: `0 8px 32px rgba(0, 0, 0, 0.4)`. The shadow color should be a tinted version of the background to prevent a "dirty" look.
*   **The Ghost Border Fallback:** If a border is required for accessibility, use `outline-variant` at **15% opacity**. It should be felt, not seen.
*   **Radii:** Use `md` (6px) for inner components and `lg` (8px) for main containers to create a "nested" visual harmony.

---

## 5. Components

### Buttons
*   **Primary:** `primary` background with `on-primary` text. Use a subtle `primary-container` inner glow on hover.
*   **Ghost:** No background. `primary` text. Border: 1px `primary` at 20% opacity.

### Logic Nodes (Custom Component)
In a developer tool context, nodes should use `surface-container-highest` with a 2px left-accent border of the node's functional color (e.g., `secondary` for logic, `tertiary` for delay).

### Input Fields
*   **Default:** `surface-container-lowest` background. No border.
*   **Focus:** A 1px "Ghost Border" using `surface-tint` and a subtle outer glow.
*   **Typography:** All user input uses `body-md`.

### Cards & Lists: The "Line-Free" Directive
Forbid the use of divider lines. Instead:
1.  **Vertical Space:** Increase padding to 16px or 24px between items.
2.  **Alternating Tones:** Use `surface-container-low` and `surface-container-high` to create zebra-striping without hard lines.

---

## 6. Do's and Don'ts

### Do
*   **DO** use `label-sm` (all caps) for small, technical metadata to distinguish it from instructional text.
*   **DO** use intentional asymmetry. In a side panel, right-align value labels and left-align property names to create a clear central "gutter" of white space.
*   **DO** use `backdrop-blur` on navigation bars to maintain a sense of height and verticality.

### Don't
*   **DON'T** use pure white (`#FFFFFF`) for text. Use `on-surface` or `on-surface-variant` to reduce eye strain in dark mode.
*   **DON'T** use 100% opaque borders to separate the sidebar from the main canvas. Use a subtle shift from `surface-container` to `surface`.
*   **DON'T** use standard blue for links. Use the `secondary` purple-blue token to maintain the "Technical" color story.
*   **DON'T** crowd the UI. If a panel feels full, increase the container's width rather than shrinking the typography.