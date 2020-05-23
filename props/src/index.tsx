import React from 'react'
import ReactDOM from 'react-dom'

const Italic: React.FC<any> = ({ value }) => (
  <i>{value}</i>
)

const Strong: React.FC<any>  = ({ value }) => (
  <strong>{value}</strong>
)


const Content = () => {
  const text = "Hello";
  return (
  <div>
    <Italic value={text} />
    <Strong value={text}/>
  </div>
  )
}

ReactDOM.render(
  <Content />,
  document.getElementById('root')
)
