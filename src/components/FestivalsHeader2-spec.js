/* global describe, before, it, context  */

describe('Festivals Header Component Specs', function () {
  var chai = require('chai')
  var chaiAsPromised = require('chai-as-promised')
  chai.use(chaiAsPromised)
  var expect = chai.expect

  var renderComponent = global.renderComponent
  var desktop = global.desktop
  var mobile = global.mobile
  var convertMobile = function (targetWidth) {
    // 1080px in mocks is 432px in CSS
    return targetWidth * 0.4
  }

  before('import the component', function () {
    var mockElems = require('../../test-mocks.js')
    var subject = require('./FestivalsHeader2')
    var component = subject.component
    var css = subject.styles
    // global.wdioteardown()
    return renderComponent(component, {texts: {text: 'header 2' + mockElems.fakeTexts.title}}, css, [])
  })
  describe('element width reponsive', function () {
    var subjectSelector = '[data-wdio="FestivalHeader"]'

    it('desktop width is 1170px', function () {
      return expect(desktop.getElementSize('#header', 'width')).to.eventually.equal(1170)
    })
    it('mobile width is 1080px', function () {
      return expect(mobile.getElementSize('#header', 'width')).to.eventually.equal(convertMobile(1080))
    })
  })
})
