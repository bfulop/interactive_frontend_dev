/* global Inferno */

function SubComponent (dispatch, state) {
  return Inferno.createElement(
    'div',
    null,
    'I am a subcomponent'
    )
}

module.exports = {
  component: SubComponent
}
