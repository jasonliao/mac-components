import * as React from 'react'
import { shallow } from 'enzyme'
import * as renderer from 'react-test-renderer'

import RadioButton, { RadioButtonProps } from '../index'

describe('RadioButton Component', () => {
  const label = 'Radio'
  it('[UI] render label', () => {
    const wrapper = shallow(<RadioButton>{ label }</RadioButton>)

    const text = wrapper.find('.radio-button__label').text()
    expect(text).toBe(label)
  })

  it('[UI] render with mini size', () => {
    const props: RadioButtonProps = { size: 'mini' }
    const wrapper = shallow(<RadioButton { ...props } />)

    const hasClass = wrapper.find('.radio-button').hasClass(`radio-button__${props.size}`)
    expect(hasClass).toBe(true)
  })

  it('[UI] render disabled radio', () => {
    const props: RadioButtonProps = { disabled: true }
    const wrapper = shallow(<RadioButton { ...props } />)

    const hasClass = wrapper.find('.radio-button').hasClass('radio-button__disabled')
    expect(hasClass).toBe(true)
  })

  it('[BEHAVIOR] radio clicked(uncontrolled)', () => {
    const props: RadioButtonProps = { onChange: jest.fn() }
    const wrapper = shallow(<RadioButton { ...props } />)
    const stateChecked = wrapper.state('checked')
  
    wrapper.simulate('click')
    expect(props.onChange).toHaveBeenCalledTimes(1)
    expect(wrapper.state('checked')).toBe(!stateChecked)
  })

  it('[BEHAVIOR] disabled radio clicked(uncontrolled)', () => {
    const props: RadioButtonProps = {
      disabled: true,
      onChange: jest.fn()
    }
    const wrapper = shallow(<RadioButton { ...props } />)
    const stateChecked = wrapper.state('checked')

    wrapper.simulate('click')
    expect(props.onChange).toHaveBeenCalledTimes(0)
    expect(wrapper.state('checked')).toBe(stateChecked)
  })

  it('[BEHAVIOR] radio clicked(controlled)', () => {
    const props: RadioButtonProps = {
      onChange: jest.fn(),
      checked: false
    }
    const wrapper = shallow(<RadioButton { ...props } />)
    const stateChecked = wrapper.state('checked')

    wrapper.simulate('click')
    expect(props.onChange).toHaveBeenCalledTimes(1)
    expect(wrapper.state('checked')).toBe(stateChecked)
  })

  it('[BEHAVIOR] disabled radio clicked(controlled)', () => {
    const props: RadioButtonProps = {
      onChange: jest.fn(),
      checked: false,
      disabled: true
    }
    const wrapper = shallow(<RadioButton { ...props } />)
    const stateChecked = wrapper.state('checked')

    wrapper.simulate('click')
    expect(props.onChange).toHaveBeenCalledTimes(0)
    expect(wrapper.state('checked')).toBe(stateChecked)
  })

  it('[SNAPSHOT] match the snapshot', () => {
    const props: RadioButtonProps = {
      size: 'small',
      checked: true,
      style: { width: '130px' },
      className: 'custom_classname'
    }
    const tree = renderer.create(<RadioButton { ...props }>{ label }</RadioButton>)
    expect(tree).toMatchSnapshot()

  })
})