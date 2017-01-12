import Inferno from 'inferno'
import { Link } from 'inferno-router'

function showComponent(props) {
  return (
    <div>
      <h3>Presenting a component</h3>
      <h1>props.params.component</h1>
    </div>
  )
}

export default showComponent
