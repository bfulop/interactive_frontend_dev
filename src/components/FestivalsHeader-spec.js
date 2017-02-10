/* global expect, describe, before, it, PageElement, renderComponent, sizes  */

describe('Festivals Header Component Specs', function () {
  before('import the component', function () {
    var mockElems = require('../../test-mocks.js')
    var subject = require('./FestivalsHeader')
    var fakeComponent = require('../../wdio-Fakecomponent').component
    var component = subject.component
    var css = subject.styles
    fakeComponent

    return renderComponent(component, {texts: {text: 'header 1' + mockElems.fakeTexts.title}}, css, [{fn: fakeComponent, as: 'LogoBlocks'}])
  })

  describe('Specs', function () {
    var rootelem = Object.create(PageElement)
    rootelem.init('[data-wdio="FestivalHeader"]')

    describe('root elem Specs', function () {
      it('use posX', () => rootelem.desktop.posX.then(r => expect(r).to.equal(0)))
      it('use left shorthand', () => rootelem.desktop.left.then(r => expect(r).to.equal(1)))
    })
  })

  // describe.skip('testing with PageObjects', function () {
  //   var username = Object.create(PageElement)
  //   username.init('#username')

  //   it('username on desktop should be 131px wide', function () {
  //     return expect(username.desktop.width).to.eventually.equal(131)
  //   })
  //   it('should be 100% wide on mobile', function () {
  //     return expect(username.mobile.width).to.eventually.equal(sizes.mobile.width)
  //   })
  // })
})
