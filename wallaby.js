delete process.env.ELECTRON_RUN_AS_NODE
// var wallabyWebpack = require('wallaby-webpack')
// var webpackPostprocessor = wallabyWebpack({})

module.exports = function (wallaby) {
  return {

    files: [
      {pattern: './wdio-Fakecomponent.js', load: true, instrument: false},
      {pattern: './nightmarejs-wallaby.js', load: true, instrument: false},
      {pattern: './test-mocks.js', load: true, instrument: false},
      {pattern: 'src/components/*.js', load: true, instrument: false},
      {pattern: './myjs.js', load: true, instrument: false},
      {pattern: 'src/components/*-spec.js', ignore: true}
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
      var nightmare = require('./nightmarejs-wallaby')
      nightmare.init(function () {
        global.testthis = nightmare.testthis
        global.renderComponent = nightmare.renderComponent
        global.PageElement = nightmare.PageElement
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
