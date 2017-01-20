// import Inferno from 'inferno'
// import { shallowRender } from 'inferno-test-utils'
import {button, addnumbers} from '../src/TestComponent'

var expect = chai.expect
/* global describe, beforeEach, afterEach, it, expect, button, addnumbers, before  */
// import Inferno from 'inferno'
// import InfernoTestUtils from 'inferno-test-utils'

describe('handle the Animations', function () {
  var subject, container, instance

  before(function () {
    container = document.createElement('div')
    document.body.appendChild(container)
    instance = Inferno.render(button(), container)
    // var output = shallowRender(Inferno.createElement('div', { className: 'test' }, "I'm a child!"))
  })

  describe('Follow button', function () {
    it('should display user name', function () {
      expect(addnumbers(1, 1)).to.eql(2)
    })
  })
})
