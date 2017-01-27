/* global describe, before, it, after */

// var webdriverio = require('webdriverio')
var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
var expect = chai.expect

var client = global.client
var renderComponent = global.renderComponent

describe('my webdriverio tests', function () {
  var subject = require('../src/webdriverComponent')
  var component = subject.component
  var subcomponent = subject.subcomponent
  var css = subject.styles
  before('run some code in the browser', function () {
    // global.client.end()
    return renderComponent(component, {texts: {text: 'wallaby'}}, css, [subcomponent])
  })

  it('can get the title', function () {
    return expect(client.getTitle()).to.eventually.eql('Browser Live Testing')
  })

  it('has the right size', function () {
    return expect(client.getElementSize('#mycomponent').then(function (result) { return result.width })).to.eventually.equal(220)
  })
})
