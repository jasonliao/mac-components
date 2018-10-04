import React from 'react'
import ReactDOM from 'react-dom'
import { PushButton } from '../lib/index'

const App = () => {
  return (
    <div>
      <h1>Push Button</h1>
      <PushButton text="Push Button" onClick={() => { }} />
      <br />
      <br />
      <PushButton text="Push Button" size="small" onClick={() => { }} />
      <br />
      <br />
      <PushButton text="Push Button" size="mini" onClick={() => { }} style={{ width: '100px' }} />
      <br />
      <br />
      <PushButton text="Push Button" type="on" onClick={() => { }} />
      <br />
      <br />
      <PushButton text="Push Button" disabled onClick={() => { }} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#page')
)
