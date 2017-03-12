var Inferno = require('inferno')
var InfernoServer = require('inferno-server')
var createElement = require('inferno-create-element')
var StyleSheetServer = require('aphrodite').StyleSheetServer

var TestComponent = function () {
  return createElement(
    'div',
    null,
    'hello world'
  )
}

var FestivalsHeader = require('../src/components/FestivalsHeader').component

var builtComponent = StyleSheetServer.renderStatic(function () {
  return InfernoServer.renderToStaticMarkup(FestivalsHeader())
})

builtComponent.css.content
builtComponent.html

console.log(builtComponent)
