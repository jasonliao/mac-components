import * as React from 'react'
import { shallow } from 'enzyme'
import * as renderer from 'react-test-renderer'

import PushButton, { PushButtonProps } from '../index'

describe('PushButton Component', () => {
  const content = 'PushButton'
  it('[UI] render text', () => {
    const wrapper = shallow(<PushButton>{ content }</PushButton> )

    const text = wrapper.find('button').text()
    expect(text).toBe(content)
  })

  it('[UI] render with mini size', () => {
    const props: PushButtonProps = { size: 'mini', }
    const wrapper = shallow(<PushButton { ...props } />)

    const hasClass = wrapper.find('.push-button').hasClass(`push-button__${props.size}`)
    expect(hasClass).toBe(true)
  })

  it('[UI] render with type', () => {
    const props: PushButtonProps = { type: 'on' }
    const wrapper = shallow(<PushButton { ...props } />)

    const hasClass = wrapper.find('.push-button').hasClass(`push-button__${props.type}`)
    expect(hasClass).toBe(true)
  })

  it('[UI] render disabled button', () => {
    const props: PushButtonProps = { disabled: true }
    const wrapper = shallow(<PushButton { ...props } />)

    const hasClass = wrapper.find('.push-button').hasClass(`push-button__disabled`)
    expect(hasClass).toBe(true)
  })

  it('[BEHAVIOR] button clicked', () => {
    const props: PushButtonProps = { onClick: jest.fn() }
    const wrapper = shallow(<PushButton { ...props } />)

    wrapper.simulate('click')
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })

  it('[BEHAVIOR] disabled button clicked', () => {
    const props: PushButtonProps = { disabled: true, onClick: jest.fn() }
    const wrapper = shallow(<PushButton { ...props } />)

    wrapper.simulate('click')
    expect(props.onClick).toHaveBeenCalledTimes(0)
  })

  it('[SNAPSHOT] match the snapshot', () => {
    const props: PushButtonProps = {
      type: 'on',
      size: 'small',
      style: { width: '100px' },
      className: 'custom_classname'
    }

    const tree = renderer.create(<PushButton { ...props } >{ content }</PushButton>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})