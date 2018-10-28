import * as React from 'react'
import { shallow } from 'enzyme'
import * as renderer from 'react-test-renderer'

import RoundRectButton, { RoundRectButtonProps } from '../index'

describe('RoundRectButton Component', () => {
  const content = 'Textured Round Button'
  it('[UI] render text', () => {
    const wrapper = shallow(<RoundRectButton>{ content }</RoundRectButton> )

    const text = wrapper.find('button').text()
    expect(text).toBe(content)
  })

  it('[UI] render with mini size', () => {
    const props: RoundRectButtonProps = { size: 'mini', }
    const wrapper = shallow(<RoundRectButton { ...props } />)

    const hasClass = wrapper.find('.round-rect-button').hasClass(`round-rect-button__${props.size}`)
    expect(hasClass).toBe(true)
  })

  it('[UI] render disabled button', () => {
    const props: RoundRectButtonProps = { disabled: true }
    const wrapper = shallow(<RoundRectButton { ...props } />)

    const hasClass = wrapper.find('.round-rect-button').hasClass(`round-rect-button__disabled`)
    expect(hasClass).toBe(true)
  })

  it('[BEHAVIOR] button clicked', () => {
    const props: RoundRectButtonProps = { onClick: jest.fn() }
    const wrapper = shallow(<RoundRectButton { ...props } />)

    wrapper.simulate('click')
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })

  it('[BEHAVIOR] disabled button clicked', () => {
    const props: RoundRectButtonProps = { disabled: true, onClick: jest.fn() }
    const wrapper = shallow(<RoundRectButton { ...props } />)

    wrapper.simulate('click')
    expect(props.onClick).toHaveBeenCalledTimes(0)
  })

  it('[SNAPSHOT] match the snapshot', () => {
    const props: RoundRectButtonProps = {
      size: 'small',
      style: { width: '100px' },
      className: 'custom_classname'
    }

    const tree = renderer.create(<RoundRectButton { ...props } >{ content }</RoundRectButton>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})