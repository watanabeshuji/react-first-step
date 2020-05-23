import React from 'react'
import ReactDOM from 'react-dom'

const LeftPanel: React.FC<any> = () => (
  <span>LEFT</span>
)

const RightPanel: React.FC<any> = () => (
  <span>RIGHT</span>
)

const Content: React.FC<any> = () => (
  <div>
    <LeftPanel />
    <span>|</span>
    <RightPanel />
  </div>
)

ReactDOM.render(<Content/>, document.getElementById('root'))
