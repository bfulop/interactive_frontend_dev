/* global Inferno */

var aphrodite = require('aphrodite')
var css = aphrodite.css

var LogoBlocks = require('./Subcomponent').component

function FestivalHeader (dispatch, state) {
  var styles = aphrodite.StyleSheet.create({
    HeaderContent: {
      width: 1170,
      // border: '3px solid red',
      padding: 25,
      'background-color': 'teal'
    }
  })
  return Inferno.createElement(
    'div',
    {
      className: css(styles.HeaderContent),
      'data-wdio': 'FestivalHeader',
      id: 'header'
    },
    Inferno.createElement('div',
    {'data-wdio': 'FestivalHeaderLogo'},
    'state.maintitle'
    ),
    LogoBlocks()
  )
}

module.exports = {
  component: FestivalHeader
}
