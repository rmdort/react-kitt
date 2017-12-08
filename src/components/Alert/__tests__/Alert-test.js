import React from 'react'
import { shallow, mount } from 'enzyme'
import Alert from './../'
import {
  alertClassName,
  alertTitleClassName,
  alertCloseClassName,
} from './../../../settings'

describe('Alert', () => {
  it('should render alert element', () => {
    const wrapper = mount(<Alert />)
    expect(wrapper.find(`.${alertClassName}`).type()).toBe('div')
    expect(wrapper.find(`.${alertTitleClassName}`).length).toBe(0)
    expect(wrapper.find('div').first().hasClass(alertClassName)).toEqual(true)
  })

  it('should render title', () => {
    const wrapper = mount(<Alert title='hi' />)
    expect(wrapper.find(`.${alertTitleClassName}`).length).toBe(1)
  })

  it('should render close button', () => {
    const wrapper = mount(<Alert title='hi' />)
    expect(wrapper.find(`.${alertCloseClassName}`).length).toBe(1)
  })

  it('should render functional component', () => {
    const wrapper = mount(<Alert title='hi'>{() => <p>content</p>}</Alert>)
    expect(wrapper.find('p').text()).toBe('content')
  })

  it('should render children', () => {
    const wrapper = mount(<Alert title='hi'><p>content</p></Alert>)
    expect(wrapper.find('p').text()).toBe('content')
  })

  it('should support animation', () => {
    const wrapper = mount(<Alert animation='o-slide' />)
    expect(wrapper.prop('animation')).toEqual('o-slide')
  })
  
})