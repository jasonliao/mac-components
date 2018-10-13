import * as React from 'react'
import { shallow } from 'enzyme'
import * as renderer from 'react-test-renderer'

import CheckBoxButton, { CheckBoxButtonProps } from '../index'

describe('CheckBoxButton Component', () => {
  const label = 'Check'
  it('[UI] render label', () => {
    const wrapper = shallow(<CheckBoxButton>{ label }</CheckBoxButton>)

    const text = wrapper.find('.checkbox-button__label').text()
    expect(text).toBe(label)
  })

  it('[UI] render with mini size', () => {
    const props: CheckBoxButtonProps = { size: 'mini' }
    const wrapper = shallow(<CheckBoxButton { ...props } />)

    const hasClass = wrapper.find('.checkbox-button').hasClass(`checkbox-button__${props.size}`)
    expect(hasClass).toBe(true)
  })

  it('[UI] render disabled checkbox', () => {
    const props: CheckBoxButtonProps = { disabled: true }
    const wrapper = shallow(<CheckBoxButton { ...props } />)

    const hasClass = wrapper.find('.checkbox-button').hasClass('checkbox-button__disabled')
    expect(hasClass).toBe(true)
  })

  it('[BEHAVIOR] checkbox clicked(uncontrolled)', () => {
    const props: CheckBoxButtonProps = { onChange: jest.fn() }
    const wrapper = shallow(<CheckBoxButton { ...props } />)
    const stateChecked = wrapper.state('checked')

    wrapper.simulate('click')
    expect(props.onChange).toHaveBeenCalledTimes(1)
    expect(wrapper.state('checked')).toBe(!stateChecked)
  })

  it('[BEHAVIOR] disabled checkbox clicked(uncontrolled)', () => {
    const props: CheckBoxButtonProps = {
      disabled: true,
      onChange: jest.fn()
    }
    const wrapper = shallow(<CheckBoxButton { ...props } />)
    const stateChecked = wrapper.state('checked')

    wrapper.simulate('click')
    expect(props.onChange).toHaveBeenCalledTimes(0)
    expect(wrapper.state('checked')).toBe(stateChecked)
  })

  it('[BEHAVIOR] checkbox clicked(controlled)', () => {
    const props: CheckBoxButtonProps = {
      onChange: jest.fn(),
      checked: false
    }
    const wrapper = shallow(<CheckBoxButton { ...props } />)
    const stateChecked = wrapper.state('checked')

    wrapper.simulate('click')
    expect(props.onChange).toHaveBeenCalledTimes(1)
    expect(wrapper.state('checked')).toBe(stateChecked)
  })

  it('[BEHAVIOR] disabled checkbox clicked(controlled)', () => {
    const props: CheckBoxButtonProps = {
      onChange: jest.fn(),
      checked: false,
      disabled: true
    }
    const wrapper = shallow(<CheckBoxButton { ...props } />)
    const stateChecked = wrapper.state('checked')

    wrapper.simulate('click')
    expect(props.onChange).toHaveBeenCalledTimes(0)
    expect(wrapper.state('checked')).toBe(stateChecked)
  })

  it('[SNAPSHOT] match the snapshot', () => {
    const props: CheckBoxButtonProps = {
      size: 'small',
      checked: true,
      style: { width: '130px' },
      className: 'custom_classname'
    }
    const tree = renderer.create(<CheckBoxButton { ...props }>{ label }</CheckBoxButton>)
    expect(tree).toMatchSnapshot()

  })
})