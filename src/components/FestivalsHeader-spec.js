/* global expect, describe, before, it, PageElement, renderComponent, sizes  */

describe('Festivals Header Component Specs', function () {
  before('import the component', function () {
    var mockElems = require('../../test-mocks.js')
    var subject = require('./FestivalsHeader')
    var subjectData = require('./FestivalHeader-model')
    var fakeComponent = require('../../wdio-Fakecomponent').component
    var component = subject.component
    var css = subject.styles
    fakeComponent

    return renderComponent(component, subjectData, css, [{fn: fakeComponent, as: 'LogoBlocks'}])
  })

  describe('Specs', function () {
    var rootelem = Object.create(PageElement)
    rootelem.init('[data-wdio="FestivalHeader"]')

    describe('test chai helper', function () {
      var colorsubject
      before(function () {
        colorsubject = Promise.resolve('red')
      })
      it('assert color', () => colorsubject.then(r => expect(r).to.equal('blue')))
    })

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
