import React from 'react'
import { shallow } from 'enzyme'
import Button from './../'

describe('Button', () => {
  it('should render button element', () => {
    expect(shallow(<Button />).type()).toBe('button')
    expect(shallow(<Button />).hasClass('o-button')).toEqual(true)
  })

  it('should render primary button element', () => {
    expect(shallow(<Button primary />).hasClass('o-button-primary')).toEqual(true)
  })

  it('should render secondary button element', () => {
    expect(shallow(<Button secondary />).hasClass('o-button-secondary')).toEqual(true)
  })

  it('should render link element if href is in the props', () => {
    expect(shallow(<Button href='/' />).type()).toBe('a')
    expect(shallow(<Button href='/' />).prop('href')).toBe('/')    
  })
})