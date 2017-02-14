delete process.env.ELECTRON_RUN_AS_NODE
// var wallabyWebpack = require('wallaby-webpack')
// var webpackPostprocessor = wallabyWebpack({})

module.exports = function (wallaby) {
  return {

    files: [
      {pattern: './wdio-Fakecomponent.js', load: true, instrument: false},
      {pattern: './test-mocks.js', load: true, instrument: false},
      {pattern: 'src/components/*.js', load: true, instrument: false},
      {pattern: 'src/components/*-spec.js', ignore: true},
      {pattern: 'src/components/nightmare-running.js'}
    ],

    tests: [
      {pattern: 'src/**/nightmare-spec.js', load: true}
    ],

    env: {
      type: 'node'
    },
    // debug: true,

    testFramework: 'mocha',

    setup: function (wallaby) {
      if (wallaby.workerId !== 0) {
        console.log('wid', wallaby.workerId)
      }
      if (global.wdiorunning) return
      wallaby.delayStart()
      var mocha = wallaby.testFramework
      wallaby.testFramework.timeout(15000)
      mocha.asyncOnly = true
      global.expect = require('chai').expect

      var Nightmare = require('nightmare')
      var nightmare = global.desktop = Nightmare({
        show: true,
        dock: true,
        openDevTools: {
          mode: 'detach'
        }
      })
      nightmare.goto('http://localhost:8022/index-spec.html')
      .then(function () {
        wallaby.start()
      })
      global.testthis = function (aparam) {
        return nightmare
        .evaluate(function (param) {
          return param
        }, aparam)
      }

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
