import Inferno from 'inferno'
import { Link } from 'inferno-router'

function ComponentsList({children}) {
  return (
    <div>
      <h1>Components List</h1>
      <Link to='/comp'>Comp</Link>
      {children}
    </div>
  )
}

export default ComponentsList
