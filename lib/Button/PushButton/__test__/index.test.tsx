import * as React from 'react'
import { shallow } from 'enzyme'
import * as renderer from 'react-test-renderer'

import PushButton from '../index'

describe('PushButton Component', () => {
  it('render text', () => {
    const props = { text: 'PushButton' }
    const wrapper = shallow(<PushButton { ...props } />)

    const text = wrapper.find('button').text()
    expect(text).toBe(props.text)
  })

  it('render with mini size', () => {
    const props = { size: 'mini' }
    const wrapper = shallow(<PushButton { ...props } />)
    const hasClass = wrapper.find('.push-button').hasClass(`push-button__${props.size}`)

    expect(hasClass).toBe(true)
  })

  it('render with type', () => {
    const props = { type: 'on' }

    const wrapper = shallow(<PushButton { ...props } />)
    const hasClass = wrapper.find('.push-button').hasClass(`push-button__${props.type}`)

    expect(hasClass).toBe(true)
  })

  it('render disabled button', () => {
    const props = { disabled: true }

    const wrapper = shallow(<PushButton { ...props } />)
    const hasClass = wrapper.find('.push-button').hasClass(`push-button__disabled`)

    wrapper.simulate('click')

    expect(hasClass).toBe(true)
  })

  it('button clicked', () => {
    const props = { onClick: jest.fn() }
    const wrapper = shallow(<PushButton { ...props } />)
    wrapper.simulate('click')

    expect(props.onClick).toHaveBeenCalledTimes(1)
  })

  it('disabled button clicked', () => {
    const props = { disabled: true, onClick: jest.fn() }

    const wrapper = shallow(<PushButton { ...props } />)
    wrapper.simulate('click')

    expect(props.onClick).toHaveBeenCalledTimes(0)
  })

  it('match the snapshot', () => {
    const props = {
      text: 'PushButton',
      type: 'on',
      size: 'small',
      style: { width: '100px' },
      className: 'custom_classname'
    }
    const tree = renderer.create(<PushButton { ...props } />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})