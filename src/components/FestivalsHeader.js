/* global Inferno */

var aphrodite = require('aphrodite')
var css = aphrodite.css

var styles = aphrodite.StyleSheet.create({
  HeaderContent: {
    width: 1170,
    // border: '3px solid red',
    padding: 25
  }
})

function FestivalHeader (dispatch, state) {
  return Inferno.createElement(
    'div',
    {className: css(styles.HeaderContent), 'data-wdio': 'FestivalHeader', id: 'header'},
    Inferno.createElement('div',
    {'data-wdio': 'FestivalHeaderLogo'},
    'i am the logo'
    ),
    Inferno.createElement('input',
    {'id': 'username'},
    'i am the logo'
    )
  )
}

module.exports = {
  component: FestivalHeader,
  styles: styles
}