import * as React from 'react'
import { shallow } from 'enzyme'

import PushButton from '../index'

describe('PushButton Component', () => {
  const nessProps = {
    text: 'PushButton',
    onClick: () => {}
  }

  it('render text', () => {
    const props = { ...nessProps }
    const wrapper = shallow(<PushButton { ...props } />)

    const text = wrapper.find('button').text()
    expect(text).toBe(props.text)
  })

  it('render with mini size', () => {
    const props = { ...nessProps, size: 'mini' }
    const wrapper = shallow(<PushButton { ...props } />)
    const hasClass = wrapper.find('.push-button').hasClass(`push-button__${props.size}`)

    expect(hasClass).toBe(true)
  })

  it('render with type', () => {
    const props = { ...nessProps, type: 'on' }

    const wrapper = shallow(<PushButton { ...props } />)
    const hasClass = wrapper.find('.push-button').hasClass(`push-button__${props.type}`)

    expect(hasClass).toBe(true)
  })

  it('render disabled button', () => {
    const props = { ...nessProps, disabled: true }

    const wrapper = shallow(<PushButton { ...props } />)
    const hasClass = wrapper.find('.push-button').hasClass(`push-button__disabled`)

    wrapper.simulate('click')

    expect(hasClass).toBe(true) && expect(props.onClick).toHaveBeenCalledTimes(1)
  })

  it('button clicked', () => {
    const props = { ...nessProps, onClick: jest.fn() }
    const wrapper = shallow(<PushButton { ...props } />)
    wrapper.simulate('click')

    expect(props.onClick).toHaveBeenCalledTimes(1)
  })

  it('disabled button clicked', () => {
    const props = { ...nessProps, disabled: true, onClick: jest.fn() }

    const wrapper = shallow(<PushButton { ...props } />)
    wrapper.simulate('click')

    expect(props.onClick).toHaveBeenCalledTimes(0)
  })
})