import * as React from 'react'
import classNames from 'classnames'
import './index.scss'

export interface PushButtonProps {
  size?: 'regular' | 'small' | 'mini'
  type?: 'on' | 'off'
  disabled?: boolean
  style?: object
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

export default class PushButton extends React.Component<PushButtonProps, any> {
  static defaultProps: PushButtonProps = {
    size: 'regular',
    type: 'off',
    disabled: false,
    style: {},
    className: '',
    onClick: () => {}
  }

  handleClick = (e: React.MouseEvent) => {
    const { onClick, disabled } = this.props
    !disabled && onClick(e)
  } 

  render() {
    const { size, disabled, type, style, className, children } = this.props
    return (
      <button
        onClick={this.handleClick}
        className={classNames(
          className,
          'push-button',
          `push-button__${size}`,
          { 
            'push-button__disabled': disabled,
            'push-button__on': type === 'on' && !disabled
          }
        )}
        style={style}
      >
        { children }
      </button>
    )
  }
}
