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
  OnLoadComponents: components => state => [{
    ...state,
    components: components || state.users,
    error: !components || !components.length
  }, []],
  ShowComponent: name => state => [
    state,
    [Navigation.changeLocation(
     Action.OnLocationChange, routes.components.component({name}))]
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
