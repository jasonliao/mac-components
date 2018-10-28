import React from 'react'
import ReactDOM from 'react-dom'
import { PushButton, CheckBoxButton, RadioButton, TexturedRoundButton } from '../lib/index'

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
        <PushButton size="small" style={PushButtonStyle}>Push Button</PushButton>
        <PushButton type="on" style={PushButtonStyle}>PushButton</PushButton>
        <PushButton disabled style={PushButtonStyle}>PushButton</PushButton>
      </div>
      <div>
        <h1>Textured Round Button</h1>
        <TexturedRoundButton style={PushButtonStyle}>Textured Round Button</TexturedRoundButton>
        <TexturedRoundButton size="small" style={PushButtonStyle}>Textured Round Button</TexturedRoundButton>
        <TexturedRoundButton size="mini" style={PushButtonStyle}>Textured Round Button</TexturedRoundButton>
        <TexturedRoundButton disabled style={PushButtonStyle}>Textured Round Button</TexturedRoundButton>
      </div>
      <div>
        <h1>Check Box Button</h1>
        <CheckBoxButton style={CheckBoxButtonStyle}>Check</CheckBoxButton>
        <CheckBoxButton size="small" style={CheckBoxButtonStyle}>Check</CheckBoxButton>
        <CheckBoxButton size="mini" style={CheckBoxButtonStyle}>Check</CheckBoxButton>
        <CheckBoxButton disabled style={CheckBoxButtonStyle}>Check</CheckBoxButton>
      </div>
      <div>
        <h1>Radio Button</h1>
        <RadioButton style={CheckBoxButtonStyle}>Radio</RadioButton>
        <RadioButton size="small" style={CheckBoxButtonStyle}>Radio</RadioButton>
        <RadioButton size="mini" style={CheckBoxButtonStyle}>Radio</RadioButton>
        <RadioButton disabled>Radio</RadioButton>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#page')
)
