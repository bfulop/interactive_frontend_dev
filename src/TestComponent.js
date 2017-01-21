import { StyleSheet, css } from 'aphrodite'

const mystyles = {
  red: {
    backgroundColor: 'orange',
    height: 500,
    color: 'cyan'
  },
  blue: {
    fontSize: 20
  }
}

const styles = StyleSheet.create(mystyles)

function addnumbers (a, b) {
  return a + b
  // return a + b
}

function button () {
  return (
    <div>
      <style data-aphrodite />
      <h1 className={css(styles.red)}>Hello Wor</h1>
    </div>
  )
}

export { button, addnumbers, styles, mystyles }
