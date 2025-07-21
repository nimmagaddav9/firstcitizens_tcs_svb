# ✅ React 16+

## Key Concepts

- Hooks: `useState`, `useEffect`, `useCallback`, `useMemo`, `useRef`
- Context API
- React.memo
- React.lazy & Suspense

## Prep Points & Answers

- **Component lifecycle using hooks**: `useEffect` replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
- **State management patterns**: For complex state, use `useReducer` or Context + Reducer.
- **Performance optimization**: Use `React.memo`, `useMemo`, `useCallback` to avoid unnecessary re-renders. Use `React.lazy` for lazy loading.
- **Error boundaries**: Implement with class components using `componentDidCatch` and `getDerivedStateFromError`.

---

# ✅ Redux or MobX

## Redux Focus

- Redux Toolkit: `createSlice`, `configureStore`
- Middleware: `redux-thunk`, `redux-saga`
- Reselect for memoized selectors
- Scalable architecture: feature-based folders, normalized state

## MobX Focus

- Observables, actions, computed values, reactions
- Differences: MobX is reactive and concise; Redux is explicit and predictable

---

# ✅ Node.js

## Core Concepts

- Express.js basics: route handling, middleware
- Middleware usage: logging, error handling, auth
- REST API design principles: clear endpoints, HTTP verbs, status codes
- Async patterns: `async/await`, Promises with error handling
- Database Integration: MongoDB/Mongoose or SQL (Knex, Sequelize)

---

# ✅ TypeScript

## Things to Know

- Interfaces vs Types: Interfaces are extendable; Types are more flexible with unions
- Generics: Reusable type-safe components and functions
- Utility types: `Partial`, `Pick`, `Record`, `Readonly`
- Strong typing: Props, state, Redux slices, API responses
- tsconfig basics: strict mode, target, module resolution

---

# ✅ ES6+ JavaScript

- Arrow functions, destructuring, spread/rest operators
- `let` vs `const`, block scoping
- Template literals, class syntax
- Promises and `async/await` for async logic

---

# ✅ CSS3 / SASS / SCSS

- Flexbox and CSS Grid for layout
- SCSS features: nesting, variables, mixins, inheritance
- BEM or similar naming convention
- Media queries for responsive design

---

# ✅ REST API Integration

- API calls: `fetch`, `axios`
- Loading and error states handling
- Normalize data for frontend state management
- Auth headers, token refresh logic, secure storage (in-memory, localStorage)

---

# ✅ Jest

- Unit tests for components using `@testing-library/react`
- Mock API calls using `jest.mock`, `jest.fn`
- Custom hook tests using `@testing-library/react-hooks`
- Snapshot testing
- `describe`/`it` usage, coverage reports

---

# ✅ Lead Engineer Expectations

- **Team guidance**: Mentoring juniors, conducting code reviews, knowledge sharing
- **Architecture**: Modular components, scalable folder structures, shared utilities
- **Communication**: Collaboration with designers and PMs, explaining tradeoffs
- **Process**: Agile rituals, sprint planning, pushing for CI/CD and test coverage

---

# 🔥 Suggested Questions to Prepare

## 1. What’s the most complex React component you’ve written? Why?

A real-time dashboard with multiple chart types and filters, optimized with memoization and lazy loading.

## 2. How do you approach state management in a large-scale app?

Use Redux Toolkit with slices per domain, Reselect for selectors, and middleware for async.

## 3. How do you structure your codebase in a UI project?

Feature-based folder structure, separation of concerns between UI, state, services, and types.

## 4. How do you handle responsiveness and accessibility?

Use mobile-first CSS with Grid/Flexbox, WCAG 2.1 guidelines, semantic HTML, and ARIA attributes.

## 5. What’s your approach to debugging slow components?

Use React Profiler, track render cycles, apply memoization, and optimize expensive operations.

## 6. Have you led code reviews? How do you handle differing opinions?

Yes. Encourage constructive feedback, prioritize readability and standards, use examples to clarify suggestions.

## 7. How do you plan a migration or refactor in an existing codebase?

Start with an audit, define the scope and risks, roll out in phases, write tests, and use feature flags when necessary.
