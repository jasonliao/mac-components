import * as React from 'react'
import classNames from 'classnames'

import './index.scss'

export interface CheckBoxButtonProps {
  size?: 'regular' | 'small' | 'mini'
  checked?: boolean
  position?: 'left' | 'right' | 'above' | 'below'
  style?: object
  className?: string
  disabled?: boolean
  onChange?: (checked: boolean, e: React.MouseEvent) => void
}

interface State {
  checked: boolean
}

export default class CheckBoxButton extends React.Component<CheckBoxButtonProps, State> {
  static defaultProps = {
    size: 'regular',
    position: 'left',
    style: {},
    className: '',
    disabled: false,
    onChange: () => {}
  }

  state = {
    checked: false
  }

  handleClick = (e: React.MouseEvent) => {
    const { disabled, onChange, checked } = this.props
    const hasChecked = this.hasChecked()

    if (!disabled) {
      if (checked === undefined) {
        this.setState({ checked: !hasChecked })
      }
      onChange(!hasChecked, e)
    }
  }

  hasChecked() {
    // 如果传了 `props.checked`，则使用
    // 没有则使用组件内 `state.checked`
    const { checked: stateChecked } = this.state
    const { checked } = this.props

    return checked === undefined ? stateChecked : checked 
  }

  render() {
    const { size, disabled, className, style, children } = this.props
    const hasChecked = this.hasChecked()

    return (
      <div className={
          classNames(
            className,
            'checkbox-button',
            `checkbox-button__${size}`,
            {
              'checkbox-button__checked': hasChecked,
              'checkbox-button__disabled': disabled
            }
          )
        }
        onClick={this.handleClick}
        style={style}
      >
        <i className="checkbox-button__box"></i>
        <span className="checkbox-button__label">{ children }</span>
      </div>
    )
  }
}