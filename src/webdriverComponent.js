/* global Inferno  */

var aphrodite = require('aphrodite')
var css = aphrodite.css

var styles = aphrodite.StyleSheet.create({
  red: {
    backgroundColor: '#065F5',
    color: '#39D399',
    width: 'calc(100% - 194px)',
    padding: 60,
    border: '5px solid #37CD94',
    '@media (min-width: 600px)': {
      backgroundColor: 'red',
      width: 250
    }
  }
})

function subcomponent (dispatch, state) {
  return Inferno.createElement('h1', null, 'Should be 380px wide')
}

function component (dispatch, state) {
  return Inferno.createElement('div', {className: css(styles.red), id: 'mycomponent'}, Inferno.createElement('h5', null, 'Live browser test WebdriverIO and ', state.texts.text), subcomponent(dispatch, state))
}

module.exports = {
  component: component,
  subcomponent: subcomponent,
  styles: styles
}
