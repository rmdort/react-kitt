import React from 'react'
import { shallow } from 'enzyme'
import Button from './../'
import { buttonClassName } from './../../../settings'

describe('Button', () => {
  it('should render button element', () => {
    expect(shallow(<Button />).type()).toBe('button')
    expect(shallow(<Button />).hasClass(buttonClassName)).toEqual(true)
  })

  it('should render primary button element', () => {
    expect(shallow(<Button primary />).hasClass(`${buttonClassName}-primary`)).toEqual(true)
  })

  it('should render children if label is empty', () => {
    expect(shallow(<Button>text</Button>).text()).toEqual('text')
  })

  it('should render secondary button element', () => {
    expect(shallow(<Button secondary />).hasClass(`${buttonClassName}-secondary`)).toEqual(true)
  })

  it('should render outline button element', () => {
    expect(shallow(<Button outline />).hasClass(`${buttonClassName}-outline`)).toEqual(true)
  })

  it('should render link element if href is in the props', () => {
    expect(shallow(<Button href='/' />).type()).toBe('a')
    expect(shallow(<Button href='/' />).prop('href')).toBe('/')    
  })
})