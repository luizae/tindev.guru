const JSDOM = require('jsdom').JSDOM
const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
const React = require('react')

// Create DOM
const { window } = new JSDOM('<!doctype html><html><body></body></html>')
global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}

Enzyme.configure({ adapter: new Adapter() })
global.shallow = Enzyme.shallow
global.render = Enzyme.render
global.mount = Enzyme.mount
global.escapeSnapshot = component => component.debug().replace(/"/g, "'")

// Date and timer
const DATE_TO_USE = new Date('2018')
const _Date = Date
global.Date = jest.fn(() => DATE_TO_USE)
global.Date.UTC = _Date.UTC
global.Date.parse = _Date.parse
global.Date.now = _Date.now
