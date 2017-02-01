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

      {pattern: './wallaby-wdio.js', load: true, instrument: false},
      {pattern: './test-mocks.js', load: true, instrument: false},
      {pattern: 'src/components/*.js', load: true, instrument: false},
      {pattern: 'src/components/*-spec.js', ignore: true}
    ],

    tests: [
      {pattern: 'src/**/*-spec.js', load: true}
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
    workers: {
      initial: 2,
      regular: 2
    },
    // debug: true,

    testFramework: 'mocha',

    setup: function (wallaby) {
      if (global.wdiorunning) return
      // console.log('wdio', global.wdioclient)
      wallaby.delayStart()
      var mocha = wallaby.testFramework
      mocha.asyncOnly = true
      var wdioclient = require('./wallaby-wdio')
      wdioclient.init(wallaby.workerId).then(function (wdio) {
        global.workerId = wallaby.workerId
        global[wdioclient + wallaby.workerId] = wdioclient
        global.renderComponent = wdio.renderComponent
        global.wdioteardown = wdio.teardown
        console.log('will start tests')
        wallaby.start()
      })
      global.wdiorunning = true
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
