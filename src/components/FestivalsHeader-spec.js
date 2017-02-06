/* global expect, describe, before, it, PageElement, renderComponent, sizes  */

describe('Festivals Header Component Specs', function () {
  before('import the component', function () {
    var mockElems = require('../../test-mocks.js')
    var subject = require('./FestivalsHeader')
    var component = subject.component
    var css = subject.styles
    return renderComponent(component, {texts: {text: 'header 1' + mockElems.fakeTexts.title}}, css, [])
  })

  describe('testing with PageObjects', function () {
    var username = Object.create(PageElement)
    username.init('#username')

    it('username on desktop should be 131px wide', function () {
      return expect(username.desktop.width).to.eventually.equal(131)
    })
    it('should be 100% wide on mobile', function () {
      return expect(username.mobile.width).to.eventually.equal(sizes.mobile.width)
    })
  })
})
