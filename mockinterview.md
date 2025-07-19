## UI Engineer Interview – Questions & Answers

### 1. What is the difference between Redux and MobX?

**Answer:**  
Redux is predictable, strict, and uses pure reducers with a single immutable state tree. It relies on actions and a centralized store.  
MobX is more flexible and uses observables, allowing more direct mutation with less boilerplate. Redux favors structure and debuggability; MobX favors simplicity and reactivity.

---

### 2. How would you structure a large React app using TypeScript?

**Answer:**

- Use feature-based folder structure
- Define global types in a `types/` directory
- Strongly type components with props and state interfaces
- Use `React.FC` only when children are explicitly used
- Leverage `useReducer` or Redux Toolkit with typed actions
- Apply `enum` or `as const` to prevent magic strings

---

### 3. Explain the benefits of using ES6+ features in modern React.

**Answer:**

- Destructuring simplifies props and state handling
- Arrow functions preserve `this` context
- Spread/rest operators simplify merging and immutability
- Template literals make string construction cleaner
- Modules and imports improve modularity and tree-shaking

---

### 4. How do you handle state management in complex UI flows?

**Answer:**  
For complex flows:

- Use Redux Toolkit to reduce boilerplate
- Normalize nested state structures
- Use selectors (Reselect) for derived data
- Keep local UI state (e.g., modals) in component state
- Avoid overusing global state unless truly shared
- Consider Zustand or Jotai for lighter state needs

---

### 5. What are CSS Preprocessors and why use them?

**Answer:**  
CSS Preprocessors like SCSS and LESS extend CSS with variables, nesting, mixins, and functions.  
They promote reusable and maintainable styles, especially in large-scale projects.

---

### 6. How do you implement responsive grid layouts?

**Answer:**

- Use CSS Grid for two-dimensional layouts
- Define grid templates with `grid-template-columns`
- Use media queries for breakpoints
- Use fractional units (`fr`) and `auto-fit/auto-fill`
- Combine with Flexbox for nested layouts

---

### 7. Explain how you'd design a reusable React component.

**Answer:**

- Keep it pure and stateless if possible
- Accept props for customization
- Use children for flexible content injection
- Apply memoization (React.memo or useMemo)
- Add accessibility (ARIA) as needed
- Write storybook stories for documentation
- Add unit tests with Jest and RTL

---

### 8. How do you secure REST API interactions from the frontend?

**Answer:**

- Use HTTPS for all endpoints
- Store tokens securely (e.g., HttpOnly cookies or memory, not localStorage)
- Use interceptors for token injection
- Handle 401/403 globally with Axios interceptors
- Sanitize inputs and validate responses

---

### 9. What’s your approach to testing with Jest?

**Answer:**

- Use `jest.fn()` for mocking dependencies
- Test both positive and negative paths
- Use `@testing-library/react` for DOM interactions
- Mock API calls and use fake timers when needed
- Add snapshot tests for stable UI components
- Aim for high coverage on reducers, utils, and logic-heavy components

---

### 10. Have you led a UI team or mentored junior developers?

**Answer:**  
Yes. I’ve led sprint planning, code reviews, and onboarding for UI developers.  
I ensure consistency with shared components, enforce coding standards, and promote knowledge sharing through documentation and pairing.

---

### Bonus: How do you handle performance in large UI apps?

**Answer:**

- Use code-splitting with lazy loading
- Optimize rendering with memoization and keying
- Avoid unnecessary re-renders with `React.memo`, `useCallback`
- Use virtualization (e.g., `react-window`) for long lists
- Keep bundle sizes low by analyzing with `webpack-bundle-analyzer`

# React Component Lifecycle Hooks

React component lifecycle has three categories:

- **Mounting** – Birth of your component
- **Updating** – Growth of your component
- **Unmounting** – Death of your component

---

## Mounting Phase

### 1. `constructor()`

- Initializes state and binds class methods.
- Called before the component is mounted.

### 2. `componentWillMount()` _(Deprecated)_

- Called just before `render()`.
- Avoid using; use `constructor()` or `componentDidMount()` instead.

### 3. `render()`

- Required method.
- Returns JSX to be rendered to the DOM.
- Should be pure and idempotent.

### 4. `componentDidMount()`

- Invoked once after the component is mounted.
- Ideal for data fetching, subscriptions, or side effects.

---

## Updating Phase

### 5. `componentWillReceiveProps(nextProps)` _(Deprecated)_

- Called when the component is about to receive new props.
- Use `static getDerivedStateFromProps()` in modern React.

### 6. `shouldComponentUpdate(nextProps, nextState)`

- Determines whether a re-render is necessary.
- Useful for performance optimization.

### 7. `componentWillUpdate(nextProps, nextState)` _(Deprecated)_

- Called before re-rendering.
- Not recommended in newer versions of React.

### 8. `componentDidUpdate(prevProps, prevState)`

- Invoked immediately after updating.
- Used for DOM operations or network requests based on state/prop changes.

---

## Unmounting Phase

### 9. `componentWillUnmount()`

- Called right before the component is removed from the DOM.
- Clean up subscriptions, timers, or listeners here.

## React.js + Node.js Interview Questions (Short Answers)

### React.js (Frontend)

#### JSX vs HTML

JSX is a syntax extension that lets you write HTML-like code in JS. It's not valid HTML.

#### Functional vs Class Components

- Functional: stateless, simpler, uses hooks.
- Class: supports lifecycle methods and state pre-hooks.

#### Virtual DOM

A lightweight copy of the real DOM that React uses to optimize rendering via diffing.

#### Props vs State

- Props: read-only, passed from parent.
- State: internal, mutable, owned by component.

#### Redux vs Context API

- Redux: external library for state, good for large apps.
- Context: built-in, for small-scale global state.

#### Redux vs MobX

- Redux: more structure, predictable, good debugging.
- MobX: reactive, less boilerplate, easier to start.

#### Actions, Reducers, Middleware

- Action: plain object with type.
- Reducer: pure function to update state.
- Middleware: handles async (e.g., redux-thunk, redux-saga).

#### Redux-Saga vs Thunk

- Thunk: functions as actions, simpler.
- Saga: uses generators, better for complex async flows.

#### useEffect

Side effects: API calls, subscriptions. Runs after render.

#### useMemo vs useCallback

- useMemo: memoizes value.
- useCallback: memoizes function.

#### Side Effects

useEffect manages side effects like data fetching.

#### Controlled vs Uncontrolled

- Controlled: React manages state.
- Uncontrolled: DOM manages state (via refs).

#### Form Validation

Libraries: Formik, React Hook Form, or custom logic.

#### Code Splitting

React.lazy() and Suspense for dynamic imports.

#### Reusable Components

Create atomic components and use props for config.

#### Responsive Design

Use media queries, CSS Grid, Flexbox.

#### Styled Components / CSS Modules

CSS-in-JS (styled-components) vs scoped CSS files (modules).

#### Theme Management

Use context or libraries like styled-components theme provider.

#### Jest Testing

Use Jest and React Testing Library for unit tests.

#### Testing Types

- Unit: test logic.
- Integration: test multiple components.
- E2E: test full app (e.g., Cypress).

---

### Node.js (Backend)

#### require() vs import

- require is CommonJS, import is ES6 module.

#### Event Loop

Handles async non-blocking operations in Node.

#### Streams

Efficient way to read/write data in chunks.

#### Express Middleware

Functions with access to req/res objects; used for auth, logging, etc.

#### Promises vs Async/Await

- Promises: .then() chain.
- async/await: cleaner syntax.

#### Callbacks vs Promises

- Callback: function inside function.
- Promise: cleaner, avoids callback hell.

#### Concurrent API Calls

Use Promise.all() or async/await with concurrency control.

#### REST API with Express

Define routes, use middleware, return JSON.

#### Error Handling

Use middleware with next(err), try-catch blocks.

#### CORS

Cross-origin resource sharing; enabled via cors package.

#### Route Guards / Auth Middleware

Checks user token or role before allowing access.

#### JWT Auth

Token-based auth; send token in header, verify on backend.

#### Preventing XSS/SQL Injection

Sanitize inputs, use libraries (helmet, express-validator).

#### Helmet, Rate-Limit

- Helmet: sec headers.
- rate-limit: throttle requests.

---

### React + Node Integration

#### Connecting Frontend & Backend

Use fetch/axios in React to hit Express endpoints.

#### Environment Variables

.env file and process.env for both frontend/backend.

#### Shared Types

Use a shared TypeScript types package or folder.

#### Authentication

Use JWT and store token in cookies/localStorage.

#### SSR vs CSR

- SSR: better SEO, server renders HTML.
- CSR: faster after initial load.

---

### Performance & DevOps

#### Performance Optimization

- React: memo, lazy load, avoid prop drilling.
- Node: use clustering, caching.

#### Deployment

Deploy React build + Node server on platforms like Heroku, AWS, Vercel.

#### Logging & Monitoring

Use winston, morgan, integrate with tools like DataDog.

#### Node Clustering

Spawn multiple processes to utilize all CPU cores.

### Q: Can you create your own custom hooks in React?

**A:**  
Yes. Custom hooks are just JavaScript functions that start with `use` and let you reuse stateful logic across components. They help keep code DRY and organized. You can call other hooks like `useState` or `useEffect` inside them.

---

#### 🔍 Example: `useWindowWidth`

```tsx
import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
```

```tsx
function Component() {
  const width = useWindowWidth();
  return <div>Window width: {width}</div>;
}
```
