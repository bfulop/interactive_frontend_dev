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
      window.__moduleBundler.loadTests()
    }

  }
}
