import * as React from 'react'
import classNames from 'classnames'
import './index.scss'

interface Props {
  text: string
  size?: string
  type?: string
  disabled?: boolean
  onClick: (e: React.MouseEvent) => void
  style?: object
}

export default class PushButton extends React.Component<Props, any> {
  static defaultProps = {
    size: 'regular',
    type: 'off',
    disabled: false
  }

  handleClick = (e: React.MouseEvent): void => {
    const { onClick, disabled } = this.props
    !disabled && onClick(e)
  } 

  render() {
    const { text, size, disabled, type, style } = this.props
    return (
      <button
        onClick={this.handleClick}
        className={classNames(
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
