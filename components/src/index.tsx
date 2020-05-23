import React from 'react'
import ReactDOM from 'react-dom'

const LeftPanel = () => (
  <span>LEFT</span>
)

const RightPanel = () => (
  <span>RIGHT</span>
)

const Content= () => (
  <div>
    <LeftPanel />
    <span>|</span>
    <RightPanel />
  </div>
)

ReactDOM.render(<Content/>, document.getElementById('root'))
