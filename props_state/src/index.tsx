import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Count: React.FC<any> = ({ value }) => {
  return (
  <div>Count: {value}</div>
  )
}

const Counter: React.FC<any> = ({ action }) => {
  return (
    <button onClick={action}>Click me</button>
  )
}

const App: React.FC<any> = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <Count value={count} />
      <Counter action={handleClick} />
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
