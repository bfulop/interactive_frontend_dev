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

      {pattern: './wdio-wallaby.js', load: true, instrument: false},
      {pattern: './wdio-pageobject.js', load: true, instrument: false},
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
    // debug: true,

    testFramework: 'mocha',

    setup: function (wallaby) {
      if (wallaby.workerId !== 0) {
        console.log('wid', wallaby.workerId)
      }
      if (global.wdiorunning) return
      // console.log('wdio', global.wdioclient)
      wallaby.delayStart()
      var mocha = wallaby.testFramework
      mocha.asyncOnly = true
      var chai = require('chai')
      var chaiAsPromised = require('chai-as-promised')
      chai.use(chaiAsPromised)
      global.expect = chai.expect
      var wdioclient = require('./wdio-wallaby')
      var pageObject = require('./wdio-pageobject')
      wdioclient.init().then(function (wdio) {
        global.renderComponent = wdio.renderComponent
        global.wdioteardown = wdio.teardown
        pageObject.init(wdio)
        global.PageElement = pageObject.PageElement
        global.distance = pageObject.distance
        global.convertmobile = pageObject.convertMobile
        wdio.wdioclient.execute(function (workerId) {
          setWallabyWorkerIdAsPageTitle(workerId)
        }, wallaby.workerId)
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
