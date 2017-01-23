/* global describe, beforeEach, afterEach, it, expect, button, addnumbers, before, Inferno, chai  */
import {button, addnumbers, styles, mystyles } from '../src/TestComponent'
import { StyleSheet, css, StyleSheetServer } from 'aphrodite'

var expect = chai.expect

describe('handle the Animations', function () {
  var container

  before(function () {
    container = document.createElement('div')
    document.body.appendChild(container)
    Inferno.render(button(), container)
    var renderedelem = container.querySelector('h1')

    var mystyleElem = document.querySelector('style')

    function extractStyles (classDef) {
      return StyleSheetServer.renderStatic(function () {
        var targetstyles = StyleSheet.create(mystyles)
        css(targetstyles[classDef])
        return ''
      }).css
    }

    var componentstyles = ``
    var classDef
    for (classDef in styles) {
      componentstyles += extractStyles(classDef).content
    }
    componentstyles
    mystyleElem.textContent = componentstyles

    var position = window.getComputedStyle(renderedelem)
    var myresult = position.height
    myresult

    var dimensions = renderedelem.getBoundingClientRect().width
    dimensions

    beforeEach(function (done) {
      window.resizeToAsync(1000, 1000, done)
    })
  })

  describe('Testing wallaby', function () {
    it('report if test fails', function () {
      expect(addnumbers(1, 1)).to.eql(2)
    })
  })
})
