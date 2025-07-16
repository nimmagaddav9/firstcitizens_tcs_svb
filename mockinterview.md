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

