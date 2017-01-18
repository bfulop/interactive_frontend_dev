import Inferno from 'inferno'

import Button from './components/button'
import Routing from './Routing'

Inferno.render(Routing, document.getElementById('inferno'))

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

