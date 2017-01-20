module.exports = function (wallaby) {
  return {

    files: [
      {pattern: 'node_modules/inferno/dist/inferno.js', instrument: false},
      // {pattern: 'node_modules/inferno-test-utils/inferno-test-utils.js', instrument: false, load: false},

      'src/TestComponent.js'
    ],

    tests: [
      {pattern: 'test/**/*-spec.jsx'}
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

    testFramework: 'mocha'

  }
}