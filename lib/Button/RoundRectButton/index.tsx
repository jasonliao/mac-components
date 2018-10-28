import * as React from 'react'
import classNames from 'classnames'

import Button, { ButtonProps } from '../BaseComponents/Button'

import './index.scss'

export interface RoundRectButtonProps extends ButtonProps {}

export default class RoundRectButton extends Button<RoundRectButtonProps> {
  render() {
    const { size, disabled, style, className, children } = this.props

    const cls = classNames(
      className,
      'round-rect-button',
      `round-rect-button__${size}`,
      {
        'round-rect-button__disabled': disabled,
      }
    )

    return (
      <button
        className={cls}
        style={style}
        onClick={this.handleClick}
      >
        { children }
      </button>
    )
  }
}