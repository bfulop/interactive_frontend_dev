
function subcomponent (dispatch, state) {
  return Inferno.createElement('h6', null, 'my god it\'s great', state.texts.text)
}

function component (dispatch, state) {
  return Inferno.createElement('div', null, Inferno.createElement('h1', null, 'My live test ', state.texts.text), subcomponent(dispatch, state))
}

module.exports = {
  component: component,
  subcomponent: subcomponent
}
