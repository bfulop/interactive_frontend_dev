/* global describe, it, before, renderComponent,  expect, PageElement */

describe('test nightmare', function () {
  var rootelem = Object.create(PageElement)
  rootelem.init('#header')
  before('import the component', function () {
    var subject = require('./FestivalsHeader')
    var subjectData = require('./FestivalHeader-model')
    var component = subject.component
    var fakeComponent = require('../../wdio-Fakecomponent').component
    return renderComponent(component, subjectData, [{fn: fakeComponent, as: 'LogoBlocks'}])
  })

  it('test width', () => rootelem.desktop.width.then(r => expect(r).to.equal(1184)))
  it('test width', () => rootelem.desktop.bottom.then(r => expect(r).to.equal(1184)))
  it('test height', () => rootelem.desktop.height.then(r => expect(r).to.equal(104)))
  it('test mobile width', () => rootelem.mobile.width.then(r => expect(r).to.equal(344)))
  it('test mobile width', () => rootelem.mobile.left.then(r => expect(r).to.equal(344)))
  it('test tablet width', () => rootelem.tablet.width.then(r => expect(r).to.equal(752)))
  it('test tablet width', () => rootelem.tablet.bottom.then(r => expect(r).to.equal(752)))
  it('test tablet width', () => rootelem.tablet.right.then(r => expect(r).to.equal(752)))
  it('test getting style', () => rootelem.desktop.color.then(r => expect(r).to.equal(753)))
  it('test getting style', () => rootelem.desktop.fontsize.then(r => expect(r).to.equal(200)))
  it('test getting style', () => rootelem.desktop.visible.then(r => expect(r).to.equal(200)))

  describe('test chai helper', function () {
    var colorsubject
    before(function () {
      colorsubject = Promise.resolve('#BBCCDD')
    })
    it('assert color', () => colorsubject.then(r => expect(r).to.be.color('rgb(187, 204, 221)')))
  })
})

