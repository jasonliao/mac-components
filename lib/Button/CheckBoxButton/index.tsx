import * as React from 'react'
import classNames from 'classnames'

import './index.scss'

interface Props {
  label?: string
  size?: string
  checked?: boolean
  position?: string
  style?: object
  className?: string
  disabled?: boolean
  onChange?: (e: React.MouseEvent, checked: boolean) => void
}

interface State {
  checked: boolean
}

export default class CheckBoxButton extends React.Component<Props, State> {
  static defaultProps = {
    label: '',
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
      onChange(e, !hasChecked)
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
    const { size, label, disabled } = this.props
    const hasChecked = this.hasChecked()

    return (
      <div className={classNames(
        'checkbox-button',
        `checkbox-button__${size}`,
        {
          'checkbox-button__checked': hasChecked,
          'checkbox-button__disabled': disabled
        }
      )}
      onClick={this.handleClick}
      >
        <i className="checkbox-button__box"></i>
        <span className="checkbox-button__label">{ label }</span>
      </div>
    )
  }
}