import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App: React.FC<any> = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
