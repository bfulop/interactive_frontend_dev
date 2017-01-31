/* global describe, before, it, after */

// var webdriverio = require('webdriverio')
var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
var expect = chai.expect

var renderComponent = global.renderComponent
var desktop = global.desktop
var mobile = global.mobile

describe('my webdriverio tests', function () {
  var mockElems = require('../../test-mocks.js')
  var subject = require('./TestComponent')
  var component = subject.component
  var subcomponent = subject.subcomponent
  var css = subject.styles
  before('run some code in the browser', function () {
    return renderComponent(component, {texts: {text: mockElems.fakeTexts.title}}, css, [subcomponent])
  })

  it('mobile width assertion', function () {
    return expect(mobile.getElementSize('#mycomponent').then(function (result) { return result.width })).to.eventually.equal(320)
  })

  it('desktop width assetion', function () {
    return expect(desktop.getElementSize('#mycomponent').then(function (result) { return result.width })).to.eventually.equal(380)
  })

  // it('can get the title', function () {
  //   return expect(client.getTitle()).to.eventually.eql('Browser Live Testing')
  // })
})
