import Inferno from 'inferno'
import Navigo from 'navigo'

import Button from './components/button'
import Title from './components/title'

// import Routing from './ReactRouter'

var router = new Navigo(null, false)

var myglobal = 'aaaaaaaa'

router
  .on(function () {
    // show home page here
    Inferno.render(<Button router={router} />, document.getElementById('inferno'))
  })
  .resolve()

router
  .on({
    '/title': function () {
      Inferno.render(<Title />, document.getElementById('inferno'))
    }
  })
  .resolve()

// this is only relevant when using `hot` mode with webpack
// special thanks to Eric Clemmons: https://github.com/ericclemmons/webpack-hot-server-example
const reloading = document.readyState === 'complete'
if (module.hot) {
  module.hot.accept(function (err) {
    console.log('❌  HMR Error:', err)
  })
} else {
  console.info('❌  HMR Not Supported.')
}

