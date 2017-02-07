var webdriverio = require('webdriverio')

var wdioclient = webdriverio.multiremote({
  desktopBrowser: {
    desiredCapabilities: {
      browserName: 'chrome'
    }
  },
  mobileBrowser: {
    desiredCapabilities: {
      browserName: 'chrome'
    }
  }
})

function wrapRenderer (targetFunc, helperlist) {
  return `return (function (state, styles) {
      function dispatch(action){console.log(action)}
      ${helperlist.map(function (helper) { return helper.fn.toString().replace(helper.fn.name, helper.as) }).join(` \n`)}
      ${targetFunc.toString()}
      return renderer(${targetFunc.name}(dispatch, state))
    }).apply(null, arguments)
  `
}

function init (browserSizes) {
  return wdioclient.init().url('http://localhost:8022/index-spec.html')
  .then(function () {
    return {
      wdioclient: wdioclient,
      renderComponent: function (component, state, css, helperlist) {
        var renderDef = wrapRenderer(component, helperlist)
        wdioclient.execute(renderDef, state, css)
      },

      desktop: wdioclient.select('desktopBrowser').windowHandleSize(browserSizes.desktop),

      mobile: wdioclient.select('mobileBrowser').windowHandleSize(browserSizes.mobile)

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
