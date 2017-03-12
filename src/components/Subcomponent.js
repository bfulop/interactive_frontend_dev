/* global Inferno */
var Inferno = require('inferno')
var createElement = require('inferno-create-element')

function SubComponent (dispatch, state) {
  return createElement(
    'div',
    null,
    'I am a subcomponent'
    )
}

module.exports = {
  component: SubComponent
}
