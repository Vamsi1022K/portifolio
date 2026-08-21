# NATIONAL INSTITUTE OF TECHNOLOGY, WARANGAL
## Department of Computer Science and Engineering

* **Course Code**: CS1303
* **Course Title**: Full Stack Development
* **Assignment No**: 2
* **Assignment Title**: Interactive Multi-Page Portfolio Website using React
* **Date of Issue**: 04/08/2026
* **Date of Submission**: 10/08/2026

---

# Interactive Multi-Page Portfolio Website

This project is a React-based interactive portfolio built with Vite. It upgrades the static portfolio from Assignment 1 into a modular, responsive React web application utilizing functional components, state synchronization, effects, and dynamic nested routing.

---

## Setup & Running

To install the dependencies:
```bash
npm install
```

To run the development server locally:
```bash
npm run dev
```

To bundle the application for production:
```bash
npm run build
```

---

## Component Tree

```
App
├── Layout (Shared Layout Wrapper)
│   ├── Navbar (Responsive menu + ThemeToggle)
│   │   └── ThemeToggle (Theme state button)
│   ├── Outlet (Page view port)
│   │   ├── Home (Hero content + loader)
│   │   ├── About (Bio + Skills map + Education cards)
│   │   ├── Projects (Consumes data/projects.js)
│   │   │   └── ProjectsSection (Level 1 prop drilling)
│   │   │       └── ProjectCard (Level 2 prop drilling & expand state)
│   │   ├── ProjectDetail (Dynamic useParams() page)
│   │   ├── Contact (Wraps ContactForm)
│   │   │   └── ContactForm (Controlled forms + validations)
│   │   └── NotFound (Catch-all 404 page)
│   └── Footer (Copyright details)
└── Links (Standalone splash links view)
```

---

## State Decisions

1. **Theme State (`[theme, setTheme]`)**:
   * *Location*: Lifted to the top-level `App.jsx` component.
   * *Rationale*: The theme needs to modify the styles of the entire viewport (switching background colors, card colors, text tones, and navbar styles globally). Placing it in `App` allows passing the toggle hook to `Navbar` and setting attributes globally on `document.documentElement` to control CSS custom properties.
2. **Contact Form State (`[formData, setFormData]`)**:
   * *Location*: Local to `ContactForm.jsx`.
   * *Rationale*: Form inputs are only needed for capture and validation during user interaction on the contact page.
3. **Form Validation State (`[errors, setErrors]`, `[touched, setTouched]`)**:
   * *Location*: Local to `ContactForm.jsx`.
   * *Rationale*: Keeps validation messages scoped specifically to form inputs. The `touched` state prevents showing validation errors before a user types.
4. **Project Card Detail Expansion State (`[expanded, setExpanded]`)**:
   * *Location*: Scoped locally inside each `ProjectCard.jsx` instance.
   * *Rationale*: Ensures that expanding one card's description does not trigger or affect the layout of any other project cards.

---

## Prop Drilling

A meaningful two-level prop-drilling pathway is implemented in the Projects directory:
1. **Level 0 (Page)**: `Projects.jsx` imports the list of project objects from `projects.js` and passes it to `<ProjectsSection projects={projects} />` as a prop.
2. **Level 1 (Section Component)**: `ProjectsSection.jsx` acts as a container, receiving the `projects` array prop, mapping over it, and passing individual project values down as props to `<ProjectCard ... />`.
3. **Level 2 (Child Card)**: `ProjectCard.jsx` receives those detailed properties (`id`, `title`, `description`, `techStack`, `image`, `link`) and renders the interactive card components.

---

## useEffect Hooks

1. **Home Loading Timeout (`Home.jsx`)**:
   * *Purpose*: Triggers a loading delay on home page mount for transition effects.
   * *Cleanup*: The hook returns a cleanup callback calling `clearTimeout(timer)` to prevent memory leaks if the user navigates away before the 1-second timeout resolves.
2. **Theme Syncing & Persistence (`App.jsx`)**:
   * *Purpose*: Updates the `data-theme` attribute on the html element and persists the selection to `localStorage` whenever `theme` updates.
3. **Form Validations (`ContactForm.jsx`)**:
   * *Purpose*: Re-evaluates form field errors dynamically whenever `formData` or `touched` states change.
4. **Navbar Window Listener (`Navbar.jsx`)**:
   * *Purpose*: Listens to browser `resize` events to close the active mobile toggle list if screen dimensions widen.
   * *Cleanup*: Calls `removeEventListener` when the component unmounts to prevent event accumulation.

---

## Routing

The routing is implemented using React Router:
* `/Home` (Index redirects here): Renders the main introduction viewport.
* `/about`: Renders bio and skills panels.
* `/projects`: Renders map of portfolio projects.
* `/projects/:projectId`: Renders full descriptions of clicked project codes via `useParams()`.
* `/contact`: Renders connection links and the controlled message form.
* `/links`: Standalone link splash directory.
* `*` (Catch-all): Renders a 404 page with return linkages.

---

## Accessibility

* **Semantic HTML**: Consumes elements like `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<form>`, `<label>`, and `<button>` to create a logical structure.
* **Form Labels**: Inputs have distinct, explicit `id` hooks linking directly to corresponding `<label htmlFor="...">` tags.
* **Contrast Compliance**: Light Mode utilizes standard Zinc-950/Zinc-600 contrast scales over a `#F7F8FA` background. Dark Mode utilizes a Zinc-50/Zinc-400 contrast hierarchy over `#09090b`.
* **Keyboard Focus**: Focus outlines are styled and visible on form text fields and interactive tags.

---

## AI Assistance Disclosure

This academic project was developed with the assistance of **Antigravity AI (Google DeepMind)**. 

### Contributions:
* Scaffolding the Vite-React project shell and setting up local dependency structures.
* Converting static HTML tags and structures into reusable React functional components.
* Designing the state lifting architecture, controlled form validation hooks, loading timeouts, and dynamic `useParams()` project routing.
* Organizing the professional CSS custom properties stylesheet and verifying building configurations.
