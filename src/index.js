import React from 'react'
import ReactDOM from 'react-dom'
import { PushButton, CheckBoxButton } from '../lib/index'

const PushButtonStyle = {
  display: 'block',
  marginBottom: '20px'
}

const CheckBoxButtonStyle = {
  marginBottom: '20px'
}

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <h1>Push Button</h1>
        <PushButton style={PushButtonStyle}>Push Button</PushButton>
        <PushButton size="small" style={PushButtonStyle}>PushButton</PushButton>
        <PushButton size="mini" style={{ ...PushButtonStyle, width: '100px' }}>PushButton</PushButton>
        <PushButton type="on" style={PushButtonStyle}>PushButton</PushButton>
        <PushButton disabled style={PushButtonStyle}>PushButton</PushButton>
      </div>
      <div>
        <h1>Check Box Button</h1>
        <CheckBoxButton style={CheckBoxButtonStyle}>Check</CheckBoxButton>
        <CheckBoxButton size="small" style={CheckBoxButtonStyle} checked={false}>Check</CheckBoxButton>
        <CheckBoxButton size="mini" style={CheckBoxButtonStyle}>Check</CheckBoxButton>
        <CheckBoxButton disabled style={CheckBoxButtonStyle}>Check</CheckBoxButton>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#page')
)
