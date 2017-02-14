/* global describe, it, desktop, expect */

describe('test nightmare', function () {
  it('executes some code in the browser', function () {
    return testthis('specembed').then(function (res) {
      return expect(res).to.equal('specembed')
    })
  })
})

