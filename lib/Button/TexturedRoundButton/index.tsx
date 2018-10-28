import * as React from 'react'
import classNames from 'classnames'

import Button, { ButtonProps } from '../BaseComponents/Button'

import './index.scss'

export interface TexturedRoundButtonProps extends ButtonProps {}

export default class TexturedRoundButton extends Button<TexturedRoundButtonProps> {
  render() {
    const { size, disabled, style, className, children } = this.props

    const cls = classNames(
      className,
      'textured-round-button',
      `textured-round-button__${size}`,
      {
        'textured-round-button__disabled': disabled,
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