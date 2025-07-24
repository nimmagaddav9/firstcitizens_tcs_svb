## React Interview Questions

---

### 1. What are Hooks?

Hooks let you use React features like state and lifecycle methods inside functional components.

Common Hooks:

- `useState` – Local state
- `useEffect` – Side effects (e.g., data fetching)
- `useRef` – Mutable values & DOM refs
- `useMemo` / `useCallback` – Memoization and function identity
- `useContext` – Access values from context

---

### 2. User Authentication Mechanism?

Typical frontend auth flow:

- Use **JWT** stored in `httpOnly` cookies or `localStorage`
- After login, store the token and use it in the `Authorization` header for API requests
- Protect routes via guards (`PrivateRoute`) or conditional rendering
- For MFA: an extra step after login, usually OTP input

---

### 3. What is the full form of TSX?

**TSX** stands for **TypeScript with JSX**.  
It's a TypeScript file that contains JSX syntax.

---

### 4. Have you worked with React and TypeScript?

Yes. Used in multiple projects:

- Type-safe props and state interfaces
- Utility types (`Partial`, `Record`, `Pick`)
- Better IntelliSense and compile-time safety
- Typed Redux setup using `TypedUseSelectorHook`, action interfaces, etc.

---

### 5. What is `react-scripts`?

Part of **Create React App**.

It provides:

- Preconfigured Webpack setup
- Babel config
- Dev server
- Build scripts

You get a working React setup out of the box.

---

### 6. Have you used Redux?

Yes. Worked with:

- **Redux Toolkit** (`createSlice`, `configureStore`, `createAsyncThunk`)
- Middleware: `redux-thunk`, `redux-saga`
- Selectors using `reselect`
- Connected components using `useSelector` and `useDispatch`

---

### 7. Global State Management? Have you used `useContext`?

Yes.

- For lightweight/global state: used **Context API** with `useContext`
- For complex/async-heavy state: prefer Redux or Zustand

Example use cases: user session, feature flags, theme

---

### 8. How do you pass data between components?

**Parent to Child:** via props

```tsx
<ChildComponent title="Dashboard" />
```

Child to Parent: via callback functions

```tsx
<ChildComponent onUpdate={handleUpdate} />
```

### 9. What is Context API?

Used to share state/data across the component tree without prop drilling.

#### Steps:

- Create context with `createContext()`
- Wrap components in `Context.Provider`
- Consume with `useContext(SomeContext)`

Great for:

- Themes
- Current user info
- Settings

<!-- coding question: currency conversion:

import React, { useState } from "react";
import "./style.css";

const RATES = {
USD: { EUR: 0.86, INR: 86 },
EUR: { USD: 1.16, INR: 93 },
INR: { USD: 0.0125, EUR: 0.0107 }
};

export default function App() {
const [fromCurrency, setFromCurrency] = useState("USD");
const [toCurrency, setToCurrency] = useState("INR");
const [fromAmount, setFromAmount] = useState(1);
const [toAmount, setToAmount] = useState(RATES["USD"]["INR"] \* 1);
const [editing, setEditing] = useState("from");

const handleFromAmount = (e) => {
const val = e.target.value;
setFromAmount(val);
setToAmount((val \* RATES[fromCurrency][toCurrency]).toFixed(2));
setEditing("from");
}

const handleToAmount = (e) => {
const val = e.target.value;
setToAmount(val);
setFromAmount((val / RATES[fromCurrency][toCurrency]).toFixed(2));
setEditing("to");
}

const handleFromCurrency = (e) => {
const newFrom = e.target.value;
setFromCurrency(newFrom);
const rate = RATES[newFrom][toCurrency];
if (editing === "from") {
setToAmount((fromAmount \* rate).toFixed(2));
} else {
setFromAmount((toAmount / rate).toFixed(2));
}
}

const handleToCurrency = (e) => {
const newTo = e.target.value;
setToCurrency(newTo);
const rate = RATES[fromCurrency][newTo];
if (editing === "from") {
setToAmount((fromAmount \* rate).toFixed(2));
} else {
setFromAmount((toAmount / rate).toFixed(2));
}
}

return (
<div>
<h2>Simple Currency Converter</h2>
<div className="amount-from">
<input
          type="number"
          value={fromAmount}
          onChange={handleFromAmount}
        />
<select value={fromCurrency} onChange={handleFromCurrency}>
{Object.keys(RATES).map((c) => (
<option value={c} key={c}>
{c}
</option>
))}
</select>
</div>
<div className="amount-to">
<input
          type="number"
          value={toAmount}
          onChange={handleToAmount}
        />
<select value={toCurrency} onChange={handleToCurrency}>
{Object.keys(RATES).map((c) => (
<option value={c} key={c}>
{c}
</option>
))}
</select>
</div>
</div>
);
}

---

How can you Optimize Performance in React application?

1. Memoization with useMemo and useCallback: Use this hooks to memoize values and, reducing unnecessary recalculations.
2. Optimizing Renders with React.Fragment: Use it to avoid unnecessary wrapper elements that could cause additional DOM nodes.
3. Lazy loading with React.lazy: Use it to load components lazily, reducing the intial bundle size and imporving intial loading performance.
4. Code splitting: Employ code splitting to divide your application into smaller chunks that are loaded on demand, improving initial load times.
5. Optimizing Images and Assets: Compress and optimize images, use responsive images and leverage lazy loading for images to reduce network and rendering overhead.

What are the popular hooks in react and explain it's usage?

useState: Manages state in functional components.
useEffect: Manages side effects in functional components.
useContext: Consumes context in functional components.
useReducer: Manage state with a reducer function, For More complex state management.
useRef: Accesses DOM elements or stores mutable values.
useCallback: performance improvement usecase
useMemo: performance improvement usecase.

```

``` -->
