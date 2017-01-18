import Inferno from 'inferno'
import createElement from 'inferno-create-element'
import R from 'ramda'
import Action from '../Action'

export default function (dispatch, {component}) {
  return (
    <div>
      <h3>The component</h3>
      <div>
        {component ?
          <div>
            {component.name}
            {component.component(dispatch, component.defaults)}
          </div> :
          <p>Loading.</p>}
      </div>
    </div>
  )
}
