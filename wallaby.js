var wallabyWebpack = require('wallaby-webpack')
var webpackPostprocessor = wallabyWebpack({})

module.exports = function (wallaby) {
  return {

    files: [
      {pattern: 'node_modules/chai/chai.js', instrument: false},
      {pattern: 'node_modules/inferno/dist/inferno.js', instrument: false},
      // {pattern: 'node_modules/aphrodite/dist/aphrodite.js', instrument: false},
      // {pattern: 'node_modules/inferno-test-utils/inferno-test-utils.js', instrument: false, load: false},

      {pattern: 'src/TestComponent.js', load: false}
    ],

    tests: [
      {pattern: 'test/**/*-spec.jsx', load: false}
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        presets: ['es2015', 'es2016', 'stage-2'],
        plugins: ['inferno']
      })
    },

    env: {
      kind: 'electron'
    },

    // debug: true,

    testFramework: 'mocha',

    postprocessor: webpackPostprocessor,

    setup: function () {
      // or whatever name you like
      window.resizeToAsync = function (width, height, done) {
        var ipc = require('electron').ipcRenderer
        ipc.send('resizeWindow',
          {
            pageId: window.location.href[window.location.href.lastIndexOf('.') - 1],
            width: width,
            height: height
          })
        ipc.once('resizeWindow', done)
      }
      window.__moduleBundler.loadTests()
    }

  }
}
