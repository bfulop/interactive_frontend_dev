/* global describe, it, desktop, expect, PageElement */

describe('test nightmare', function () {
  var rootelem = Object.create(PageElement)
  rootelem.init('#specembed')

  it('test width', () => rootelem.desktop.width.then(r => expect(r).to.equal(804)))
  it('test height', () => rootelem.desktop.height.then(r => expect(r).to.equal(124)))
})

