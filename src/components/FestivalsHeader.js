/* global Inferno */
var Inferno = require('inferno')
var createElement = require('inferno-create-element')

var aphrodite = require('aphrodite')
var css = aphrodite.css

var LogoBlocks = require('./Subcomponent').component

function FestivalHeader (dispatch, state) {
  var styles = aphrodite.StyleSheet.create({
    HeaderContent: {
      width: 1170,
      // border: '3px solid red',
      padding: 25
    }
  })
  return createElement(
    'div',
    {
      className: css(styles.HeaderContent)
    },
    createElement('div',
    {'data-wdio': 'FestivalHeaderLogo'},
    'i am the logo'
    ),
    state.text,
    LogoBlocks()
  )
}

module.exports = {
  component: FestivalHeader
}
