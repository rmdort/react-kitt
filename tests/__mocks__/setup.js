// setup file
require('raf').polyfill(global)
console.log(process.env.NODE_ENV)
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });