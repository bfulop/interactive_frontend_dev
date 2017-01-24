/* global describe, before, it, after */

// var webdriverio = require('webdriverio')
var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
var expect = chai.expect

var client = global.client

describe('my webdriverio tests', function () {
  before('run some code in the browser', function () {
    return global.runwdio('testingssssss').then(function (result) {
      console.log('Exerc runs sin rtest: ' + result.value)
      return result.value
    })
  })

  it('can get the title', function () {
    return expect(client.getTitle()).to.eventually.eql('Browser Live Testing')
  })

  // it('can run the code in the browser', function () {
  //   return expect(mytest()).to.eventually.eql(10)
  // })
})
