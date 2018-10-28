import * as React from 'react'

export interface CheckAndRadioProps {
  size?: 'regular' | 'small' | 'mini'
  checked?: boolean
  style?: object
  className?: string
  disabled?: boolean
  onChange?: (checked: boolean, e: React.MouseEvent) => void,
  render?: () => React.ReactElement<any>
}

interface State {
  checked: boolean
}

export default class CheckAndRadio<TProps extends CheckAndRadioProps> extends React.Component<TProps> {
  static defaultProps: CheckAndRadioProps = {
    size: 'regular',
    checked: undefined,
    style: null,
    className: undefined,
    disabled: false,
    onChange: undefined,
    render: undefined
  }

  state: State = {
    checked: false
  }

  handleClick = (e: React.MouseEvent) => {
    const { disabled, onChange, checked } = this.props
    const hasChecked = this.hasChecked()

    if (disabled) return

    if (checked === undefined) {
      this.setState({ checked: !hasChecked })
    }
    onChange && onChange(!hasChecked, e)
  }

  hasChecked() {
    const { checked: stateChecked } = this.state
    const { checked } = this.props

    return checked === undefined ? stateChecked : checked
  }
}
