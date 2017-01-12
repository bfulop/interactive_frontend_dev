import Inferno from 'inferno'
import { Link } from 'inferno-router'

// importing ALL the Components
import Button from './components/button'

function Components (props) {
  return (
    <div>
      <h1>Components LisTt</h1>
      <Link to='/Button'>Button</Link>
      <Button />
      <span>{props.params.component}</span>
    </div>
  )
}

export default Components
