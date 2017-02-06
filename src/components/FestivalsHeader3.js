var aphrodite = require('aphrodite')
var css = aphrodite.css

var styles = aphrodite.StyleSheet.create({
  HeaderContent: {
    width: 1170,
    border: '3px solid blue'
  }
})

function FestivalHeader (dispatch, state) {
  return Inferno.createElement('div', {className: css(styles.HeaderContent), 'data-wdio': 'FestivalHeader', id: 'header'}, state.texts.text)
}

module.exports = {
  component: FestivalHeader,
  styles: styles
}
