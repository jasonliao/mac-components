import * as React from 'react'

export interface ButtonProps {
  size?: 'regular' | 'small' | 'mini'
  disabled?: boolean
  style?: object
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

export default class Button<TProps extends ButtonProps> extends React.Component<TProps, any> {
  static defaultProps: ButtonProps = {
    size: 'regular',
    disabled: false,
    style: null,
    className: undefined,
    onClick: undefined
  }

  handleClick = (e: React.MouseEvent) => {
    const { onClick, disabled } = this.props
    !disabled && onClick && onClick(e)
  } 
}