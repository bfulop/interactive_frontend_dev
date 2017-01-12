import Inferno from 'inferno'

// routing modules
import { Router, Route, IndexRoute } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

// app components
import styles from './style.css'
import Subcomponent from './acomponent'
import Home from './Home'
import ComponentsList from './Components'

const browserHistory = createBrowserHistory()

const routes = (
  <Router history={browserHistory}>
    <Route component={Home} >
      <Route path='/' component={ComponentsList} />
      <Route path='/comp' component={Subcomponent} />
    </Route>
  </Router>
)

Inferno.render(routes, document.getElementById('inferno'))

// this is only relevant when using `hot` mode with webpack
// special thanks to Eric Clemmons: https://github.com/ericclemmons/webpack-hot-server-example
const reloading = document.readyState === 'complete'
if (module.hot) {
  module.hot.accept(function (err) {
    console.log('❌  HMR Error:', err)
  })
  if (reloading) {
    console.log('🔁  HMR Reloading.')
  } else {
    console.info('✅  HMR Enabled.')
  }
} else {
  console.info('❌  HMR Not Supported.')
}

