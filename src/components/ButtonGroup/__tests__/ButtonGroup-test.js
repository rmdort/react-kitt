import React from 'react'
import { shallow } from 'enzyme'
import ButtonGroup from './../'
import { buttonGroupClassName } from './../../../settings'

describe('ButtonGroup' , () => {
  it('renders a Button group', () => {
    expect(shallow(<ButtonGroup />).type()).toBe('div')
    expect(shallow(<ButtonGroup />).hasClass(buttonGroupClassName)).toEqual(true)
  })

  it('renders children', () => {
    expect(shallow(<ButtonGroup>hi</ButtonGroup>).text()).toBe('hi')
  })
})