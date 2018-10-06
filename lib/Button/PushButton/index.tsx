import * as React from 'react'
import classNames from 'classnames'
import './index.scss'

interface Props {
  text?: string
  size?: string
  type?: string
  disabled?: boolean
  style?: object
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

export default class PushButton extends React.Component<Props, any> {
  static defaultProps = {
    text: '',
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
    const { text, size, disabled, type, style, className } = this.props
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
        style={{ ...style }}
      >
        { text }
      </button>
    )
  }
}
