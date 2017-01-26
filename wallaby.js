// var wallabyWebpack = require('wallaby-webpack')
// var webpackPostprocessor = wallabyWebpack({})

module.exports = function (wallaby) {
  return {

    files: [
      // {pattern: 'node_modules/chai/chai.js', instrument: false},
      // {pattern: 'node_modules/webdriverio/build/index.js', instrument: false},
      // {pattern: 'node_modules/inferno/dist/inferno.js', instrument: false},
      // {pattern: 'node_modules/aphrodite/dist/aphrodite.js', instrument: false},
      // {pattern: 'node_modules/inferno-test-utils/inferno-test-utils.js', instrument: false, load: false},

      {pattern: 'src/webdriverComponent.js', load: true, instrument: false}
    ],

    tests: [
      {pattern: 'test/webdriverioSimple.js', load: true}
    ],

    // compilers: {
    //   '**/*.js': wallaby.compilers.babel({
    //     presets: ['es2015', 'es2016', 'stage-2']
    //     // plugins: ['inferno']
    //   })
    // },

    env: {
      type: 'node'
    },

    // debug: true,

    testFramework: 'mocha',

    setup: function (wallaby) {
      if (global.client) return
      // console.log('wdio', global.wdioclient)
      wallaby.delayStart()
      var mocha = wallaby.testFramework
      mocha.asyncOnly = true

      function wrapRenderer (targetFunc) {
        return `return (function (sometext) {
            ${targetFunc.toString()}
            return Inferno.render(${targetFunc.name}(sometext), document.body)
         }).apply(null, arguments)
        `
      }

      var webdriverio = require('webdriverio')
      var options = { desiredCapabilities: { browserName: 'chrome' } }
      var wdioclient = webdriverio.remote(options)
      global.client = wdioclient.init().url('http://localhost:8022/index-spec.html')
      .then(function (result) {
        global.renderComponent = function (component, props) {
          var renderDef = wrapRenderer(component)
          wdioclient.execute(renderDef, props)
        }
        wallaby.start()
        return result
      })
    },

    teardown: function (wallaby) {
      // global.wdioclient.end()
    }

    // postprocessor: webpackPostprocessor

    // setup: function () {
    //   // window.__moduleBundler.loadTests()
    // }

  }
}
