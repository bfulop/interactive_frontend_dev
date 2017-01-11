import Inferno from 'inferno'
import createElement from 'inferno-create-element'
import Component from 'inferno-component'
// import acomponent from './acomponent'
// import { styles } from './style.css'
import styles from './style.css'
console.log("ssss", styles);
class MyComponent extends Component {
  render() {
    return <div className={styles.red}>Hello worlddd</div>;
  }
}


function runapp() {
  Inferno.render(
    <MyComponent />, document.getElementById('inferno')
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

