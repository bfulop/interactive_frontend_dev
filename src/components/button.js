import Inferno from 'inferno'

function button (dispatch, {texts, children}) {
  return (
    <div>
      <h1>{texts.text}</h1>
    </div>
  )
}

function multiplynumbers (a, b) {
  return a * b
}

function addnumbers (a, b) {
  return a + b
}

export default button
