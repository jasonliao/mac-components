import React from 'react'
import ReactDOM from 'react-dom'
import { PushButton, CheckBoxButton, RadioButton, TexturedRoundButton, RoundRectButton } from '../lib/index'

const PushButtonStyle = {
  display: 'block',
  marginBottom: '20px'
}

const CheckBoxButtonStyle = {
  marginBottom: '20px'
}

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <div style={{ width: '33%'}}>
        <h1>Push Button</h1>
        <PushButton style={PushButtonStyle}>Push Button</PushButton>
        <PushButton size="small" style={PushButtonStyle}>Push Button</PushButton>
        <PushButton type="on" style={PushButtonStyle}>PushButton</PushButton>
        <PushButton disabled style={PushButtonStyle}>PushButton</PushButton>
      </div>
      <div style={{ width: '33%'}}>
        <h1>Textured Round Button</h1>
        <TexturedRoundButton style={PushButtonStyle}>Textured Round Button</TexturedRoundButton>
        <TexturedRoundButton size="small" style={PushButtonStyle}>Textured Round Button</TexturedRoundButton>
        <TexturedRoundButton size="mini" style={PushButtonStyle}>Textured Round Button</TexturedRoundButton>
        <TexturedRoundButton disabled style={PushButtonStyle}>Textured Round Button</TexturedRoundButton>
      </div>
      <div style={{ width: '33%'}}>
        <h1>Round Rect Button</h1>
        <RoundRectButton style={PushButtonStyle}>Round Rect Button</RoundRectButton>
        <RoundRectButton size="small" style={PushButtonStyle}>Round Rect Button</RoundRectButton>
        <RoundRectButton size="mini" style={PushButtonStyle}>Round Rect Button</RoundRectButton>
        <RoundRectButton disabled style={PushButtonStyle}>Round Rect Button</RoundRectButton>
      </div>
      <div style={{ width: '33%'}}>
        <h1>Check Box Button</h1>
        <CheckBoxButton style={CheckBoxButtonStyle}>Check</CheckBoxButton>
        <CheckBoxButton size="small" style={CheckBoxButtonStyle}>Check</CheckBoxButton>
        <CheckBoxButton size="mini" style={CheckBoxButtonStyle}>Check</CheckBoxButton>
        <CheckBoxButton disabled style={CheckBoxButtonStyle}>Check</CheckBoxButton>
      </div>
      <div style={{ width: '33%'}}>
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
