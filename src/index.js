import React from 'react'
import ReactDOM from 'react-dom'
import { PushButton, CheckBoxButton } from '../lib/index'

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <h1>Push Button</h1>
        <PushButton text="Push Button" />
        <br />
        <br />
        <PushButton text="Push Button" size="small" />
        <br />
        <br />
        <PushButton text="Push Button" size="mini" style={{ width: '100px' }} />
        <br />
        <br />
        <PushButton text="Push Button" type="on" />
        <br />
        <br />
        <PushButton text="Push Button" disabled />
      </div>
      <div>
        <h1>Check Box Button</h1>
        <CheckBoxButton label="Check" onChange={(e, checked) => { console.log(checked) }} />
        <br />
        <CheckBoxButton label="Check" size="small" checked={false} />
        <br />
        <CheckBoxButton label="Check" size="mini" />
        <br />
        <CheckBoxButton label="Check" disabled={true} />
        <br />
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#page')
)
