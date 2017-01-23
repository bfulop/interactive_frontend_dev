// var webdriverio = require('webdriverio')
var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
var expect = chai.expect

var client = global.wdioclient

describe('my webdriverio tests', function () {
  before('run some code in the browser', function () {
    client.setValue('#testinput', 'te')
  })

  it('can get the title', function () {
    return expect(client.getTitle()).to.eventually.eql('Browser Live Testing')
  })
  // it('can add two numbers together', function () {
  //   return expect(addnumbers(2, 3)).to.eql(4)
  // })
})
