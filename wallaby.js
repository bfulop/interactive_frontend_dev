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

      {pattern: 'src/webdriverComponent.js', load: true}
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
      // wallaby.delayStart()
      var mocha = wallaby.testFramework
      mocha.asyncOnly = true
      var webdriverio = require('webdriverio')
      var options = { desiredCapabilities: { browserName: 'chrome' } }
      var wdioclient = webdriverio.remote(options)
      global.client = wdioclient.init().url('http://localhost:8022/index-spec.html')
      global.client.then(function () {
        global.runwdio = function (mylog) {
          return wdioclient.execute(function (atext) {
            Inferno.render(Inferno.createElement('div', null, atext), document.body)
          }, mylog)
        }
        console.log('client initialised')
        global.runwdio('starting phase').then(function (result) {
          console.log('Exec run in test: ' + result)
          wallaby.start()
          return result.value
        })
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
