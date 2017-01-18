import Inferno from 'inferno'

function button (dispatch, {texts, children}) {
  return (
    <div>
      <h1>{texts.text}</h1>
    </div>
  )
}

export default button
