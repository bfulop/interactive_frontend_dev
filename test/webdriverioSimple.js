// var webdriverio = require('webdriverio')
var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
var expect = chai.expect

var client = global.wdioclient

describe('my webdriverio tests', function () {
  it('can get the title', function () {
    return expect(client.getTitle()).to.eventually.eql('DuckDuckGo')
  })
})
