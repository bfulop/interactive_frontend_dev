import Inferno from 'inferno'
import createElement from 'inferno-create-element'
import R from 'ramda'
import Action from '../Action'

export default function (dispatch, {error, components}) {
  return (
    <div>
      <h3>Components List</h3>
      <div>
        {error ? <span>Error. Not Found.</span> :
        components ?
          <div>{R.map(({id, name}) =>
            <div key={id}>{name}
              <button onClick={dispatch(Action.ShowComponent(id))}>Edit</button></div>,
            components)}
          </div> :
          <p>Loading.</p>}
      </div>
    </div>
  )
}
