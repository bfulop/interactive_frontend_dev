import {addnumbers} from '../src/components/button'
/* global describe, beforeEach, afterEach, it, expect, button, addnumbers, before  */
// import Inferno from 'inferno'
// import InfernoTestUtils from 'inferno-test-utils'

describe('handle the Animations', function () {
  var subject, container

  before(function () {
    addnumbers
  })

  describe('Follow button', function () {
    it('should display user name', function () {
      expect(addnumbers(1, 2)).to.eql(3)
    })
  })
})
