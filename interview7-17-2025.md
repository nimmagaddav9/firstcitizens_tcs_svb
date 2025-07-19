## 1. Introduce Yourself?

I'm a Full Stack UI Developer with 12+ years of experience building scalable, accessible, and performant web apps. My stack includes React, Angular, Node.js, TypeScript, Redux, GraphQL, and AWS services.

## 2. Did You Work on Agile Methodology?

Yes. Participated in daily stand-ups, sprint planning, backlog grooming, retrospectives. Worked closely with product owners and QA in 2-week sprint cycles.

## 3. How Did You Mentor Peers?

Conducted onboarding sessions, paired programming, architecture walkthroughs, and regular knowledge-sharing meetings. Reviewed code and helped improve code quality and best practices.

## 4. Code Review?

Yes. Focused on readability, performance, security, modularity, and adherence to project standards. Used GitHub/Bitbucket for PR reviews and comments.

## 5. BFF (Backend for Frontend)?

Yes. Created custom Node.js/GraphQL layers to aggregate and shape data for specific frontend needs, improving performance and reducing client-side logic.

## 6. MFA (Multi-Factor Authentication)?

Implemented MFA using Auth0 and AWS Cognito. Supported SMS, email OTP, and authenticator apps for secure logins.

## 7. BFS (Breadth First Search)?

Algorithm to traverse nodes level by level. Use a queue for implementation. Common in trees, graphs, pathfinding problems.

## 8. Coding Question – JSON

Use `fetch("https://dummyjson.com/products")` in React or Node.js to retrieve products and display them using `.map()` or render in table/grid.

## 9. Performance Improvement in React.js?

Used `React.memo`, `useMemo`, `useCallback`, lazy loading, dynamic imports, code splitting, image optimization, and limiting re-renders by lifting state wisely.

## 10. Redux? Which One Did You Work On?

Worked on both classic Redux with `redux-thunk` and modern `Redux Toolkit` (RTK). Prefer RTK for its cleaner syntax, built-in immer, and easier boilerplate reduction.

## React.js Component: Product Table from API

### ✅ Requirements:

- API: `https://dummyjson.com/products`
- Display: `title`, `brand`, `rating`
- Sort: by `title` in ascending order
- Feature: Add delete button per row

---

### 📦 Dependencies:

- React (`useState`, `useEffect`)

---

### 🧠 Logic:

1. Fetch product data on mount using `useEffect`.
2. Sort the products by `title` (A-Z) using `localeCompare`.
3. Store the result in local state (`products`).
4. Render data in a `<table>`.
5. Add a **Delete** button that filters out the product from local state.

---

### 💻 Code:

```jsx
import React, { useEffect, useState } from 'react';

function ProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        const sorted = [...data.products].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setProducts(sorted);
      });
  }, []);

  const handleDelete = (id) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  return (
    <div>
      <h2>Product Table</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title (A-Z)</th>
            <th>Brand</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, title, brand, rating }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>{brand}</td>
              <td>{rating}</td>
              <td>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;

<!--


import React, { useState, useEffect } from 'react';

export function App(props) {
const [data, setData] = useState([]);
const onSortClick = () => {
setData([...data.sort((a, b) => a.title.localeCompare(b.title))]);
};
const onDeleteClick =() =
useEffect(() => {
fetch('https://dummyjson.com/products').then(res => res.json()).then((res) => setData(res.products))
}, []);

return (
<div className='App'>
<h1>Hello React.</h1>
<h2>Start editing to see some magic happen!</h2>
<table>
<thead>
<tr>
<th onClick={onSortClick}>Title</th>
<th>Brand</th>
<th>Rating</th>
</tr>
</thead>
<tbody>
{data?.map(item => {
return <tr key={item.id}>
<td>{item.title}</td>
<td>{item.brand}</td>
<td>{item.rating}</td>
<td><button onClick={() => onDelecteClick(item.id)}>Delete</button></td>
</tr>
})}
</tbody>
</table>
</div>
);
}

// Log to console
console.log('Hello console')
```

-->
