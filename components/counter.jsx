import { useState } from 'preact/hooks'

export default function Counter() {
  const [count, setCount] = useState(0)
  const handleClick = event => {
    setCount(count => count + 1)
  }
  return (
    <button onClick={handleClick}>
      <span>Count </span><span>{count}</span>
    </button>
  )
}
