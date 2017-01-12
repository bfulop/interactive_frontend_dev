import Inferno from 'inferno'

function button (props) {
  function gotolink () {
    props.router.navigate('/title')
  }
  return (
    <div>
      <h1 onClick={gotolink}>a button fsss</h1>

    </div>
  )
}

export default button
