/* global describe, before, it, after */

// var webdriverio = require('webdriverio')
var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
var expect = chai.expect

var client = global.client

describe('my webdriverio tests', function () {
  var subject
  before('run some code in the browser', function () {
    subject = require('../src/webdriverComponent')
    return client.execute(subject, 2, 3).then(function (result) {
      console.log('code executed on client', result.value)
      return result
    })
  })

  it('can get the title', function () {
    return expect(client.getTitle()).to.eventually.eql('Browser Live Testing')
  })

  // it('can run the code in the browser', function () {
  //   return expect(mytest()).to.eventually.eql(10)
  // })
})
