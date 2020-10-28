# Instructions

Using React hooks, make a hook called `useHover` that works as following example.

## **Input**
  - *None*

## **Output**
  - A [`ref`](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) callback and a boolean indicating the `hover` condition.

## Example

```js
function App(props) {
  const [hoverRef, isHovered] = useHover();
  return <div ref={hoverRef}>{isHovered ? "Hovered !" : "Hover me !"}</div>
}
```
## Restrictions
- Don't use external libraries
