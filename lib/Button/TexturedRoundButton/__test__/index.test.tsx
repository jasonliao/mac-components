import * as React from 'react'
import { shallow } from 'enzyme'
import * as renderer from 'react-test-renderer'

import TexturedRoundButton, { TexturedRoundButtonProps } from '../index'

describe('TexturedRoundButton Component', () => {
  const content = 'Textured Round Button'
  it('[UI] render text', () => {
    const wrapper = shallow(<TexturedRoundButton>{ content }</TexturedRoundButton> )

    const text = wrapper.find('button').text()
    expect(text).toBe(content)
  })

  it('[UI] render with mini size', () => {
    const props: TexturedRoundButtonProps = { size: 'mini', }
    const wrapper = shallow(<TexturedRoundButton { ...props } />)

    const hasClass = wrapper.find('.textured-round-button').hasClass(`textured-round-button__${props.size}`)
    expect(hasClass).toBe(true)
  })

  it('[UI] render disabled button', () => {
    const props: TexturedRoundButtonProps = { disabled: true }
    const wrapper = shallow(<TexturedRoundButton { ...props } />)

    const hasClass = wrapper.find('.textured-round-button').hasClass(`textured-round-button__disabled`)
    expect(hasClass).toBe(true)
  })

  it('[BEHAVIOR] button clicked', () => {
    const props: TexturedRoundButtonProps = { onClick: jest.fn() }
    const wrapper = shallow(<TexturedRoundButton { ...props } />)

    wrapper.simulate('click')
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })

  it('[BEHAVIOR] disabled button clicked', () => {
    const props: TexturedRoundButtonProps = { disabled: true, onClick: jest.fn() }
    const wrapper = shallow(<TexturedRoundButton { ...props } />)

    wrapper.simulate('click')
    expect(props.onClick).toHaveBeenCalledTimes(0)
  })

  it('[SNAPSHOT] match the snapshot', () => {
    const props: TexturedRoundButtonProps = {
      size: 'small',
      style: { width: '100px' },
      className: 'custom_classname'
    }

    const tree = renderer.create(<TexturedRoundButton { ...props } >{ content }</TexturedRoundButton>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})