import * as React from 'react'
import './index.scss'

interface Props {
  text: string
  size?: string
  type?: string
  disabled?: boolean
  onClick: (e: React.MouseEvent) => void
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
    const { text, size, disabled } = this.props
    return (
      <button
        onClick={this.handleClick}
        className={`push-button push-button__${size} ${disabled ? 'push-button__disabled' : ''}`}
      >
        { text }
      </button>
    )
  }
}