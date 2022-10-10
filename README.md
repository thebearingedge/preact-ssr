# preact-ssr

Trying out `vite-plugin-ssr` with `preact`. It's fast. Something super weird though:

```jsx
// this crashes
<button onClick={handleClick}>
  Count <span>{count}</span>
</button>

/**
 * Error: Objects are not valid as a child. Encountered an object with the keys {0,1,2,3,4,5}.
 *
 * in button (at ~/repos/preact-ssr/components/counter.jsx:9)
 * in Counter (at ~/repos/preact-ssr/pages/index.page.jsx:9)
 * in Page (at ~/repos/preact-ssr/renderer/_default.page.server.jsx:19)
 */

// this does not
<button onClick={handleClick}>
  <span>Count</span> <span>{count}</span>
</button>

// i don't get it
```
