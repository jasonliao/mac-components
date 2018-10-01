import * as React from 'react'
import * as ReactDOM from 'react-dom'
import PushButton from './Button/PushButton/index'

ReactDOM.render(
  <PushButton text="Push Button" onClick={() => { console.log(1) }} />,
  document.querySelector('#page')
)
