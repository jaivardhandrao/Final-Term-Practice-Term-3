
#### 1. **Memoized Fibonacci (useMemo)**
**Problem Statement:** Build a React component to calculate the nth Fibonacci number based on user input. The calculation should be expensive (recursive or loop-based) to simulate high computation cost.

**Hint:** Wrap the Fibonacci function result with `useMemo`, and provide `n` as a dependency.

**Solution Approach:**
Use `useMemo(() => fibonacci(n), [n])` to cache previous results and re-compute only when `n` changes.

---

#### 2. **Filter Users List (useMemo)**
**Problem Statement:** Create a large array (10,000+ items) of user names and implement a search filter. Optimize filtering using `useMemo`.

**Hint:** Memoize the filtered list based on `searchTerm`.

**Solution Approach:**
```jsx
const filtered = useMemo(() => users.filter(name => name.includes(searchTerm)), [searchTerm]);
```

---

#### 3. **Debounced Search (useRef)**
**Problem Statement:** Implement a search bar that delays API calls using debounce. Use `useRef` to store timer.

**Hint:** Clear the timeout on every new keypress.

**Solution Approach:**
Use `useRef` to store a timer ID and reset it on each keystroke.

---

#### 4. **Save Input without Re-render (useRef)**
**Problem Statement:** Implement a form that only re-renders when a submit button is clicked. Typing should not re-render the component.

**Hint:** Use `useRef` instead of `useState`.

**Solution Approach:**
Store the input value using `inputRef.current.value` and update state only on submit.

---

#### 5. **Stopwatch with Ref (useRef)**
**Problem Statement:** Create a stopwatch with start/pause/reset buttons. Use `useRef` to hold the interval ID.

**Hint:** Use `setInterval` and `clearInterval` with a `ref`.

**Solution Approach:**
Set `intervalRef.current = setInterval(...)`, then clear it with `clearInterval(intervalRef.current)`.

---

#### 6. **Callback Optimizer (useCallback)**
**Problem Statement:** Pass a function to a child component. Use `useCallback` to memoize the function and avoid unnecessary child renders.

**Hint:** Wrap the callback with `useCallback` and set correct dependencies.

**Solution Approach:**
Use `useCallback(() => { ... }, [dependencies])` and memoize the child using `React.memo()`.

---

#### 7. **Memoized Toggle Handler (useCallback)**
**Problem Statement:** Create a toggle component that receives a function to toggle boolean state. Use `useCallback` to prevent recreation.

**Hint:** Declare the function with `useCallback` inside the parent.

**Solution Approach:**
```jsx
const toggle = useCallback(() => setOn(prev => !prev), []);
```

---

#### 8. **Lazy Load Dashboard (React.lazy)**
**Problem Statement:** Create a basic SPA where the dashboard component is only loaded when navigating to `/dashboard`.

**Hint:** Use `React.lazy(() => import(...))` and wrap with `Suspense`.

**Solution Approach:**
```jsx
const Dashboard = React.lazy(() => import('./Dashboard'));
```

---

#### 9. **Lazy Import Image Gallery (React.lazy + Suspense)**
**Problem Statement:** Lazy-load each image in a gallery to improve performance.

**Hint:** Each image should be a separate component, loaded with `React.lazy`.

**Solution Approach:**
Render each `<LazyImage />` wrapped with a `Suspense fallback`.

---

#### 10. **Theme Context (Context API)**
**Problem Statement:** Implement light/dark theme switching using React Context. Theme toggle should affect all child components.

**Hint:** Create a `ThemeContext` and wrap the root with the provider.

**Solution Approach:**
Use `createContext`, provide state and setter via context.

---

#### 11. **Auth Context Setup (Context API)**
**Problem Statement:** Provide login/logout logic globally using Context. Any component should access `isAuthenticated`, `login`, and `logout`.

**Hint:** Use state + context provider for value.

**Solution Approach:**
Pass `{ isAuthenticated, login, logout }` as context value.

---

#### 12. **Ref Focus Handler (useRef)**
**Problem Statement:** Focus an input field on button click.

**Hint:** Use `inputRef.current.focus()`.

**Solution Approach:**
Assign `ref` to input and focus it in the button handler.

---

#### 13. **Dynamic Form with Ref (useRef)**
**Problem Statement:** Manage multiple dynamic input fields with `useRef` instead of state.

**Hint:** Store each field in an array of refs.

**Solution Approach:**
Use `useRef([])` and populate refs dynamically on render.

---

#### 14. **Memoized Complex Sort (useMemo)**
**Problem Statement:** Sort a large dataset and avoid recalculating on unrelated renders.

**Hint:** Memoize the sort using `useMemo` and filter dependency.

**Solution Approach:**
```jsx
const sorted = useMemo(() => sortData(data), [sortBy]);
```

---

#### 15. **Toggle Sidebar with Context (Context API)**
**Problem Statement:** Manage sidebar open/close state globally using Context.

**Hint:** Create `SidebarContext` and consume its state in multiple components.

**Solution Approach:**
Wrap layout with `SidebarProvider` that exposes state and toggle function.

---

#### 16. **Count Renders with Ref (useRef)**
**Problem Statement:** Display how many times a component has rendered.

**Hint:** Use `useRef` to store render count and increment it inside the component.

**Solution Approach:**
```jsx
renderCount.current += 1;
```

---

#### 17. **Lazy Load Routes (React.lazy + React Router)**
**Problem Statement:** Split your app into multiple routes, each lazy-loaded separately.

**Hint:** Use `React.lazy` and `Suspense` for each component.

**Solution Approach:**
Wrap each route’s component in `Suspense fallback={<Loader />}`.

---

#### 18. **Avoid Inline Function (useCallback)**
**Problem Statement:** Avoid defining functions inside JSX by using `useCallback`.

**Hint:** Move handlers out of the return block and memoize.

**Solution Approach:**
```jsx
const handleDelete = useCallback(() => { ... }, [id]);
```

---

#### 19. **Custom Hook with useRef — usePrevious**
**Problem Statement:** Create a hook `usePrevious` to return the previous value of any state or prop.

**Hint:** Use `useRef` to store the last value and update on each render.

**Solution Approach:**
```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => { ref.current = value; });
  return ref.current;
}
```

---

#### 20. **Context with Reducer (Context API + useReducer)**
**Problem Statement:** Create global state for a counter using Context and `useReducer`. Allow increment/decrement/reset.

**Hint:** Combine `createContext`, `useReducer`, and a provider.

**Solution Approach:**
```jsx
const [state, dispatch] = useReducer(reducer, { count: 0 });
```

---