import * as React from 'react'
import classNames from 'classnames'

import Button, { ButtonProps } from '../BaseComponents/Button'

import './index.scss'

export interface PushButtonProps extends ButtonProps {
  type?: 'on' | 'off'
}

export default class PushButton extends Button<PushButtonProps> {
  static defaultProps: PushButtonProps = {
    ...Button.defaultProps,
    type: 'off'
  }

  render() {
    const { size, disabled, type, style, className, children } = this.props

    const cls = classNames(
      className,
      'push-button',
      `push-button__${size}`,
      {
        'push-button__disabled': disabled,
        'push-button__on': type === 'on' && !disabled
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
