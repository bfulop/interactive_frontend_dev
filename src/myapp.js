import Inferno from 'inferno'
import createElement from 'inferno-create-element'
import styles from './style.css'
import Subcomponent from './acomponent'

function MyComponent (props) {
  return createElement('div', { className: styles.red }, 'functional component')
  // return <div className={styles.red}>Hello worlddd</div>;
}

let message = 'Hello worldtt'

function runapp () {
  console.log('sun')
  Inferno.render(
    <Subcomponent message={message} headelem={MyComponent} >
      <h1>My component</h1>
    </Subcomponent>
    ,
    document.getElementById('inferno')
  )
  // Inferno.render(
  //   <subcomponent />, document.getElementById('inferno')
  // )
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

