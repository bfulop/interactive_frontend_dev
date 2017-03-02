var Nightmare = require('nightmare')
var browsers = {}

function initBrowser (targetObj, workerid) {
  var defaultparams = {
    show: false,
    dock: false
  }
  var browserparams = {
    alwaysOnTop: false,
    show: true,
    dock: true,
    x: 0,
    y: 0
  }

  if (workerid === 0) {
    defaultparams = Object.assign(defaultparams, browserparams)
  }
  return Nightmare(Object.assign(defaultparams, targetObj))
}

function setupBrowser (browser, params, workerid) {
  var url = 'http://localhost:8022/index-spec.html'
  browsers[browser] = initBrowser(params, workerid)
  return browsers[browser].goto(url).then(function () {
    return browsers[browser]
  })
}

function init (workerid) {
  return Promise.all([
    setupBrowser('desktop', {
      width: 1200,
      height: 600
    }, workerid),
    setupBrowser('tablet', {
      width: 360,
      height: 640
    }, workerid),
    setupBrowser('mobile', {
      width: 768,
      height: 516
    }, workerid)
  ])
}

function renderComponent (component, state, helperlist) {
  var helpers = helperlist.map(function (helper) { return helper.fn.toString().replace(helper.fn.name, helper.as) }).join(` \n`)
  function renderOnClient (func, state, helpers) {
    try {
      var component = new Function(helpers + ' return ' + func)()
      return renderer(component(dispatch, state))
    } catch (err) {
      return err
    }
  }
  return Promise.all([
    browsers.desktop.evaluate(renderOnClient, component.toString(), state, helpers),
    browsers.mobile.evaluate(renderOnClient, component.toString(), state, helpers),
    browsers.tablet.evaluate(renderOnClient, component.toString(), state, helpers)
  ])
}

function getStyleProp (list, stylename) {
  return list.find(function (elem) {
    return elem.stylename === stylename
  }).stylevalue
}

var PageElementDimensions = {
  init (target, selector) {
    this.target = target
    this.selector = selector
  },
  resetStyleValues () {
    this._styles = null
  },
  get styles () {
    if (!this._styles) {
      this._styles = Promise.resolve(this.getStyles)
    }
    return this._styles
  },
  get getStyles () {
    var targetStyles = ['color', 'font-family', 'font-size', 'font-style', 'font-weight', 'font-variant', 'line-height', 'text-decoration', 'background-color']
    return this.target.evaluate(function (selector, targetStyles) {
      var elementstyles = window.getComputedStyle(document.querySelector(selector), null)
      return targetStyles.map(function (style) {
        return {
          stylename: style,
          stylevalue: elementstyles.getPropertyValue(style)
        }
      })
    }, this.selector, targetStyles)
  },
  get color () {
    return this.styles.then(r => getStyleProp(r, 'color'))
  },
  get backgroundcolor () {
    return this.styles.then(r => getStyleProp(r, 'background-color'))
  },
  get fontfamily () {
    return this.styles.then(r => getStyleProp(r, 'font-family'))
  },
  get fontweight () {
    return this.styles.then(r => getStyleProp(r, 'font-weight'))
  },
  get textdecoration () {
    return this.styles.then(r => getStyleProp(r, 'text-decoration'))
  },
  get fontvariant () {
    return this.styles.then(r => getStyleProp(r, 'font-variant'))
  },
  get fontsize () {
    return this.styles.then(r => parseInt(getStyleProp(r, 'font-size'), 10))
  },
  get lineheight () {
    return this.styles.then(r => parseInt(getStyleProp(r, 'line-height'), 10))
  },
  get visible () {
    return this.target.visible(this.selector)
  },
  get BoundingClientRect () {
    return this.target.evaluate(function (selector) {
      var rect = document.querySelector(selector).getBoundingClientRect()
      return {
        left: rect.left,
        right: rect.right,
        top: rect.top,
        bottom: rect.bottom,
        width: rect.width,
        height: rect.height
      }
    }, this.selector)
  },
  get clientRect () {
    if (!this._clientrect) {
      this._clientrect = Promise.resolve(this.BoundingClientRect)
    }
    return this._clientrect
  },
  get width () {
    return this.clientRect.then(r => r.width)
  },
  get height () {
    return this.clientRect.then(r => r.height)
  },
  get left () {
    return this.clientRect.then(r => r.left)
  },
  get right () {
    return this.clientRect.then(r => r.right)
  },
  get top () {
    return this.clientRect.then(r => r.top)
  },
  get bottom () {
    return this.clientRect.then(r => r.bottom)
  }

}

var PageElement = {
  init (selector) {
    this.selector = selector
    this.desktop = Object.create(PageElementDimensions)
    this.desktop.init(browsers.desktop, selector)
    this.mobile = Object.create(PageElementDimensions)
    this.mobile.init(browsers.mobile, selector)
    this.tablet = Object.create(PageElementDimensions)
    this.tablet.init(browsers.tablet, selector)
  }
}

module.exports = {
  init: init,
  PageElement: PageElement,
  renderComponent: renderComponent
}
