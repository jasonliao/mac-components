import * as React from 'react'
import { shallow } from 'enzyme'
import * as renderer from 'react-test-renderer'

import PushButton, { PushButtonProps } from '../index'

describe('PushButton Component', () => {
  it('render text', () => {
    const content = 'PushButton'
    const wrapper = shallow(<PushButton>{ content }</PushButton> )

    const text = wrapper.find('button').text()
    expect(text).toBe(content)
  })

  it('render with mini size', () => {
    const props: PushButtonProps = { size: 'mini', }
    const wrapper = shallow(<PushButton { ...props } />)
    const hasClass = wrapper.find('.push-button').hasClass(`push-button__${props.size}`)

    expect(hasClass).toBe(true)
  })

  it('render with type', () => {
    const props: PushButtonProps = { type: 'on' }

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
    const content = 'PushButton'
    const props = {
      type: 'on',
      size: 'small',
      style: { width: '100px' },
      className: 'custom_classname'
    } as PushButtonProps
    const tree = renderer.create(<PushButton { ...props } >{ content }</PushButton>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})