
/* global Inferno */

function SubComponent (dispatch, state) {
  return Inferno.createElement(
    'div',
    null,
    'I am a test double subcomponent'
    )
}

module.exports = {
  component: SubComponent
}
