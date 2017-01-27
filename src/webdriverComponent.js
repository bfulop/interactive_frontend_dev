var aphrodite = require('aphrodite')
var css = aphrodite.css

var styles = aphrodite.StyleSheet.create({
  red: {
    backgroundColor: 'green',
    width: 190,
    padding: 10,
    border: '5px solid red'
  }
})

function subcomponent (dispatch, state) {
  return Inferno.createElement('h6', null, 'my god it\'s great ', state.texts.text)
}

function component (dispatch, state) {
  return Inferno.createElement('div', {className: css(styles.red), id: 'mycomponent'}, Inferno.createElement('h1', null, 'My live test ', state.texts.text), subcomponent(dispatch, state))
}

module.exports = {
  component: component,
  subcomponent: subcomponent,
  styles: styles
}
