# React Portfolio - Lab Viva Defense Guide

This guide is designed to help you understand and explain the React architecture of your personal portfolio project. If your professor asks you questions during your lab evaluation, use the concepts and explanations here.

---

## 1. Core React Concepts (The Big Picture)

*   **What is React?**
    React is a JavaScript library for building User Interfaces (UIs) based on **components** (reusable blocks of code that represent parts of a web page).
*   **What is a Single Page Application (SPA)?**
    Instead of downloading a new HTML page from a server every time you click a link, React changes the content of the screen dynamically. This makes the website feel extremely fast.
*   **What is JSX?**
    JSX stands for JavaScript XML. It allows you to write HTML-like code inside JavaScript files. For example, `<h1>Hello</h1>` in React is JSX.
*   **What are Hooks?**
    Hooks are special functions provided by React (starting with `use`, like `useState` and `useEffect`) that let you hook into React state and lifecycle features from functional components.

---

## 2. File-by-File Code Walkthrough

### 🚀 `main.jsx`
*   **What it does**: This is the entry point of the entire application. It mounts (injects) the top-level `App` component into the `<div id="root">` element inside `index.html`.

### 🎛️ `App.jsx`
*   **Core Role**: It sets up **Routing** and manages the **Global Theme State**.
*   **Theme State (`useState`)**:
    ```javascript
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });
    ```
    This holds the current theme (`'light'` or `'dark'`). It uses a function inside `useState` (lazy initialization) to check if a theme was previously saved in the user's browser storage (`localStorage`).
*   **Theme Effect (`useEffect`)**:
    ```javascript
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    ```
    Whenever the `theme` changes, this hook runs. It saves the new theme to `localStorage` (so the user doesn't lose their choice when they reload) and updates the custom `data-theme` attribute on the HTML element (allowing CSS variables to change the colors).
*   **Routing Setup**:
    Uses React Router components (`<Router>`, `<Routes>`, `<Route>`) to map browser paths (like `/about` or `/projects`) to specific page components.

### 📐 `Layout.jsx` & `Navbar.jsx` & `Footer.jsx`
*   **Layout Wrapper**:
    Uses the `<Outlet />` component from `react-router-dom`. The layout renders `<Navbar />` at the top, `<Footer />` at the bottom, and the `<Outlet />` is replaced dynamically by whatever page route is active (e.g., Home, About, etc.).
*   **Responsive Navbar Menu**:
    Has an `isOpen` local state (true/false) to show or hide the mobile navigation bar menu.
*   **Window Resize Listener (`useEffect`)**:
    ```javascript
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) { setIsOpen(false); }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    ```
    If the menu is open on a mobile screen and the user resizes the window larger than `768px`, it automatically closes the menu.
    *Key point*: The **cleanup function** (`return () => window.removeEventListener(...)`) removes the resize listener when the component unmounts to prevent memory leaks.

### 🏠 `Home.jsx`
*   **Simulated Loading Screen**:
    Uses a `useState` state called `isLoading` (default: `true`).
*   **Effect Hook**:
    On component mount, it triggers a `setTimeout` for 1 second, then sets `isLoading` to `false`. Until that timer finishes, it displays a loading spinner.
    *Key point*: Returns `() => clearTimeout(timer)` to clean up the timer if the user leaves the home page early.

### 📁 Projects Drilling & Components
To meet the assignment's **prop drilling (2 levels deep)** requirement, project data flows as follows:
1.  **Level 0 (Page - `Projects.jsx`)**: Imports the projects data array from `projects.js` and passes it to `<ProjectsSection projects={projects} />` as a prop.
2.  **Level 1 (Section - `ProjectsSection.jsx`)**: Receives the `projects` list via props, maps over the array using `.map()`, and passes individual fields down to `<ProjectCard ... />` as props.
3.  **Level 2 (Grandchild - `ProjectCard.jsx`)**: Receives details (`id`, `title`, `description`, `techStack`, `image`, `link`) and displays them.

*   **Scoped State in `ProjectCard.jsx`**:
    ```javascript
    const [expanded, setExpanded] = useState(false);
    ```
    Controls whether that individual card's details are open or closed. Since this state is defined *inside` ProjectCard`, each card tracks its own expansion independently. Clicking "Expand Info" on Card A will not open Card B.

### 🏷️ `ProjectDetail.jsx`
*   **Dynamic Route**:
    In `App.jsx`, the route is set as `path="projects/:projectId"`. The colon (`:`) marks `projectId` as a dynamic URL parameter.
*   **Parameter Hook**:
    Uses `const { projectId } = useParams()` to read the ID from the URL (e.g., if the URL is `/projects/1`, `projectId` will be `'1'`).
*   **Data Lookup**:
    Uses `.find()` to search the local projects array for the project object matching that ID and displays its details.

### ✉️ `ContactForm.jsx`
*   **Controlled Inputs**:
    Inputs are linked to state (`formData` object) using `value={formData.name}` and `onChange={handleChange}`. This means React controls the inputs, updating the state on every keystroke.
*   **Validation Hook (`useEffect`)**:
    Runs validation code whenever `formData` or `touched` changes. It generates an `errors` object (e.g., checks if email is valid or message is too short).
*   **Button Disable**:
    The submit button is disabled if required fields are blank or contain errors, preventing invalid submissions.

---

## 3. Top Viva Questions Your Professor Might Ask

### Q1: Why did you place the theme state (`theme`, `setTheme`) in `App.jsx` instead of inside the `ThemeToggle.jsx` component?
> **Answer**: This is called **"Lifting State Up."** The theme state needs to affect the background and text colors of the *entire website* (including the Navbar, Pages, and Footer), not just the toggle button itself. By lifting the state to the parent `App` component, we can pass down the current `theme` to apply class styles globally, and pass `toggleTheme` to the button to trigger updates.

### Q2: What is "Prop Drilling" and where did you use it in your code?
> **Answer**: Prop drilling is the process of passing data from a parent component down through nested child components to reach a deeply nested grandchild. We used it 2-levels deep in our Projects section:
> 1. `Projects.jsx` (Grandparent Page) passes the list of projects to `ProjectsSection.jsx` (Parent Container).
> 2. `ProjectsSection.jsx` maps over that list and passes individual project details (title, tech, image) as props to `ProjectCard.jsx` (Child Card).

### Q3: Why do we need a cleanup function inside `useEffect` (like `clearTimeout` or `removeEventListener`)?
> **Answer**: If we add event listeners or timers, they continue running in the background of the browser even after the user navigates away and the component disappears (unmounts). This causes **memory leaks** and slows down the browser. Returning a cleanup function tells React to destroy the listener or cancel the timer when the component is unmounted.

### Q4: How does dynamic routing work for project details?
> **Answer**: We set up a route `path="projects/:projectId"` in `App.jsx`. In `ProjectDetail.jsx`, we import the `useParams` hook from `react-router-dom`. When a user visits `/projects/1`, `useParams()` extracts the value `{ projectId: '1' }`. We then query our project data array to find the match and render the specific details dynamically.

### Q5: What is the difference between `Link`/`NavLink` and a standard HTML `<a>` anchor tag in React?
> **Answer**: A standard `<a>` tag makes the browser request a whole new page from the server, causing a full page reload and clearing the React state. `<Link>` and `<NavLink>` prevent this default reload and let React Router update the URL and change the screen content instantly, maintaining Single Page Application (SPA) behavior.

### Q6: How does the simulated loading screen on the Home page work?
> **Answer**: We have an `isLoading` state initialized to `true` inside `Home.jsx`. When the Home component mounts, a `useEffect` triggers a `setTimeout` timer. After 1 second (1000ms), the timer callback runs and updates `isLoading` to `false`. The component re-renders, switching from the loading spinner to the actual hero section.
