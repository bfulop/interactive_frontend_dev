import Inferno from 'inferno'
import createElement from 'inferno-create-element'

var message = 'subcomponent'

function MyComponent(props) {
  return createElement('div', null, message)
}

export default MyComponent
