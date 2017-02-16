/* global describe, it, before, renderComponent,  expect, PageElement */

describe('test nightmare', function () {
  var rootelem = Object.create(PageElement)
  rootelem.init('#specembed')
  before('import the component', function () {
    var subject = require('./FestivalsHeader')
    var subjectData = require('./FestivalHeader-model')
    var component = subject.component
    var fakeComponent = require('../../wdio-Fakecomponent').component
    return renderComponent(component, subjectData, [{fn: fakeComponent, as: 'LogoBlocks'}])
  })

  it('test width', () => rootelem.desktop.width.then(r => expect(r).to.equal(1184)))
  it('test height', () => rootelem.desktop.height.then(r => expect(r).to.equal(104)))
  it('test mobile width', () => rootelem.mobile.width.then(r => expect(r).to.equal(344)))
  it('test tablet width', () => rootelem.tablet.width.then(r => expect(r).to.equal(752)))
})

