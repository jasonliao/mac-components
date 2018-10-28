import * as React from 'react'
import classNames from 'classnames'

import CheckAndRadio, { CheckAndRadioProps } from '../BaseComponents/CheckAndRadio'

import './index.scss'

export interface CheckBoxButtonProps extends CheckAndRadioProps {}
export default class CheckBoxButton extends CheckAndRadio<CheckBoxButtonProps> {
  render() {
    const { size, disabled, className, style, children } = this.props
    const hasChecked = this.hasChecked()

    const cls = classNames(
      className,
      'checkbox-button',
      `checkbox-button__${size}`,
      {
        'checkbox-button__checked': hasChecked,
        'checkbox-button__disabled': disabled
      }
    )

    return (
      <div
        className={cls}
        style={style}
        onClick={this.handleClick}
      >
        <i className="checkbox-button__box"></i>
        <svg viewBox="0 0 8 8">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
            <polyline stroke="#fff" strokeWidth="1.5" points="1 5 3.25 7.5 7.5 1"></polyline>
          </g>
        </svg>
        <span className="checkbox-button__label">{ children }</span>
      </div>
    )
  }
}
