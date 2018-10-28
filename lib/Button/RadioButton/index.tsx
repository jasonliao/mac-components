import * as React from 'react'
import classNames from 'classnames'

import CheckAndRadio, { CheckAndRadioProps } from '../BaseComponents/CheckAndRadio'

import './index.scss'

export interface RadioButtonProps extends CheckAndRadioProps {}

export default class RadioButton extends CheckAndRadio<RadioButtonProps> {
  render() {
    const { size, disabled, className, children, style } = this.props
    const hasChecked = this.hasChecked()

    const cls = classNames(
      className,
      'radio-button',
      `radio-button__${size}`,
      {
        'radio-button__checked': hasChecked,
        'radio-button__disabled': disabled
      }
    )

    return (
      <div
        className={cls}
        style={style}
        onClick={this.handleClick}
      >
        <i className="radio-button__box"></i>
        <span className="radio-button__label">{ children }</span>
      </div>
    )
  } 
}
