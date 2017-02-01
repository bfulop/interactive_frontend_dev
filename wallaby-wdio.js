var webdriverio = require('webdriverio')

var conf = {
  browserSizes: {
    1: {width: 432, height: 700},
    0: {width: 1200, height: 600}
  }
}

function wrapRenderer (targetFunc, helperlist) {
  return `return (function (state, styles) {
      function dispatch(action){console.log(action)}
      ${helperlist.map(function (helper) { return helper.toString() }).join(` \n`)}
      ${targetFunc.toString()}
      return renderer(${targetFunc.name}(dispatch, state))
    }).apply(null, arguments)
  `
}

function init (workerId) {
  console.log('worker id', workerId)
  var wdioclient = webdriverio.remote({
    desiredCapabilities: {
      browserName: 'chrome'
    }
  })
  return wdioclient.init().url('http://localhost:8022/index-spec.html')
  .then(function () {
    wdioclient.windowHandleSize(conf.browserSizes[workerId])
    return {
      renderComponent: function (component, state, css, helperlist) {
        var renderDef = wrapRenderer(component, helperlist)
        wdioclient.execute(renderDef, state, css)
      },
      client: wdioclient
    }
  })
}

function teardown () {
  console.log('shutting down')
  return wdioclient.end()
}

module.exports = {
  init: init,
  teardown: teardown
}
