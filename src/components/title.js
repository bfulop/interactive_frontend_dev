import Inferno from 'inferno'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  red: {
    backgroundColor: 'orange'
  }
})

function title (dispatch, {texts, children}) {
  return (
    <div>
      <h1 className={css(styles.red)}>{texts.text}</h1>
    </div>
  )
}

export default title
