import Inferno from 'inferno'
import R from 'ramda'
import routes from './routes'
import Navigation from './Navigation'

import Components from './components/index'
const {init, view} = Components

// Huge thanks and credits for A. Sharif
// for laying out the architecture
// see https://medium.com/javascript-inside/introduction-to-functional-front-ends-with-inferno-a188454c3e19#.v93c0ytyr
const renderer = R.curry((node, component) => Inferno.render(component, node))
const render = renderer(document.getElementById('inferno'))

const runEffects =
  (dispatch, effects) => R.forEach(e => e().then(a => dispatch(a)()), effects)

const update = (action, state) => (action(state))

const StartApp = (render, [state, effects], view, update) => {
  var dispatch = R.curry(function (state, action) {
    return function () {
      return main(update(action, state), view)
    }
  })

  const main = ([state, effects], view) => {
    render(view(dispatch(state), state))
    runEffects(dispatch(state), effects)
  }

  main([state, effects], view)
}

StartApp(render,
  init({components: [], route: routes(Navigation.getLocation())}),
  view,
  update)

// this is only relevant when using `hot` mode with webpack
// special thanks to Eric Clemmons: https://github.com/ericclemmons/webpack-hot-server-example
// detects if hot reload is active
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

