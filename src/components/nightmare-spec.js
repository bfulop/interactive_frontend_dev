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

  it('test width', () => rootelem.desktop.width.then(r => expect(r).to.equal(800)))
  it('test height', () => rootelem.desktop.height.then(r => expect(r).to.equal(124)))
})

