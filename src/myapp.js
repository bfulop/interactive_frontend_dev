import Inferno from 'inferno'
import createElement from 'inferno-create-element'
import acomponent from './acomponent'

function runapp() {
  Inferno.render(
    acomponent(), document.getElementById('inferno')
  )
}

// this is only relevant when using `hot` mode with webpack
// special thanks to Eric Clemmons: https://github.com/ericclemmons/webpack-hot-server-example
const reloading = document.readyState === 'complete'
if (module.hot) {
  module.hot.accept(function (err) {
    console.log('❌  HMR Error:', err)
  })
  if (reloading) {
    console.log('🔁  HMR Reloading.')
    runapp()
  } else {
    console.info('✅  HMR Enabled.')
    runapp()
  }
} else {
  console.info('❌  HMR Not Supported.')
  runapp()
}

