/* global describe, before, it, after */

// var webdriverio = require('webdriverio')
var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
var expect = chai.expect

var client = global.client
var renderComponent = global.renderComponent

describe('my webdriverio tests', function () {
  before('run some code in the browser', function () {
    // global.client.end()
    var subject = require('../src/webdriverComponent')
    var component = subject.component
    var subcomponent = subject.subcomponent
    return renderComponent(component, {texts: {text: 'wallaby'}}, [subcomponent])
  })

  it('can get the title', function () {
    return expect(client.getTitle()).to.eventually.eql('Browser Live Testing')
  })
})
