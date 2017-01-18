import R from 'ramda'
import Navigation from './Navigation'
import routes from './routes'
import {getComponents} from './api.js'

export const loadComponents = () => {
  return getComponents()
    .catch(err => null)
    .then(Action.OnLoadComponents)
}

const Action = {
  LoadComponents: state => [{...state, error: false}, [loadComponents]],
  OnLoadComponents: users => state => [{
    ...state,
    users: users || state.users,
    error: !users || !users.length
  }, []],
  ShowComponent: id => state => [
    state,
    [Navigation.changeLocation(
     Action.OnLocationChange, routes.components.component({id}))]
  ],
  ShowComponents: state => [
    state,
    [Navigation.changeLocation(
     Action.OnLocationChange, routes.components())]
  ],
  OnLocationChange: location => state => [
    {...state, route: routes(location)},
    []
  ]
}

export default Action
