import Inferno from 'inferno'
import R from 'ramda'
import List from './ComponentsList'
import {loadComponents} from '../Action'
import {
  COMPONENT_DISPLAY_ROUTE,
  COMPONENTS_LIST_ROUTE
} from '../routes'

const init = model => [{...model, error: false}, [loadComponents]]

const getComponent = (id, users) =>
  ({user: R.find(R.propEq('id', parseInt(id)), users)})

const isRoute = (model, route) =>
  R.equals(R.path(['route', 'props'], model), route)

const NotFound = () => <div>Not Found.</div>
const Detail = () => <div>Detail...</div>

const view = (dispatch, state) => {
  if (!R.props('route', state)) return NotFound()
  return (
    <div>
      {isRoute(state, COMPONENT_DISPLAY_ROUTE) &&
        Detail(dispatch, getComponent(R.path(['route', 'params', 'id'], state), R.prop('components', state)))}
      {isRoute(state, COMPONENTS_LIST_ROUTE) && List(dispatch, state)}
    </div>
  )
}

export default {init, view}
