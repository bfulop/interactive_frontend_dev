import Inferno from 'inferno'
import R from 'ramda'
import List from './ComponentsList'
import ComponentPresent from './ComponentPresent'
import {loadComponents} from '../Action'
import {
  COMPONENT_DISPLAY_ROUTE,
  COMPONENTS_LIST_ROUTE
} from '../routes'

const init = model => [{...model, error: false}, [loadComponents]]

function getComponent (name, components) {
  console.log('components', components)
  return { component: R.find(R.propEq('name', name), components) }
};

function getRouteComponent (state) {
  console.log('state', R.prop('components', state))
  return getComponent(R.path(['route', 'params', 'name'], state), R.prop('components', state))
}

const isRoute = (model, route) =>
  R.equals(R.path(['route', 'props'], model), route)

const NotFound = () => <div>Not Found.</div>

const view = (dispatch, state) => {
  if (!R.props('route', state)) return NotFound()
  return (
    <div>
      {isRoute(state, COMPONENT_DISPLAY_ROUTE) &&
        ComponentPresent(dispatch, getRouteComponent(state))}
      {isRoute(state, COMPONENTS_LIST_ROUTE) && List(dispatch, state)}
    </div>
  )
}

export default {init, view}
