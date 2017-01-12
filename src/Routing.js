import Inferno from 'inferno'

// routing modules
import { Router, Route, IndexRoute } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

// app components
import Subcomponent from './Subcomponent'
import Components from './Components'
import Showcomponent from './Showcomponent'
import Home from './Home'

const browserHistory = createBrowserHistory()

const routes = (
  <Router history={browserHistory}>
    <Route component={Home} >
      <Route path='/' component={Components} />
      <Route path='/:component' component={Showcomponent} />
    </Route>
  </Router>
)

export default routes
