var Nightmare = require('nightmare')
var desktop, mobile, tablet

function init (cb) {
  desktop = Nightmare({
    width: 1200,
    height: 600,
    show: true,
    dock: true,
    alwaysOnTop: false,
    x: 0,
    y: 0

  })
  desktop.goto('http://localhost:8022/index-spec.html')
  .then(function () {
    mobile = Nightmare({
      width: 360,
      height: 640,
      show: true,
      dock: true,
      alwaysOnTop: false,
      x: 0,
      y: 0
    })
    mobile.goto('http://localhost:8022/index-spec.html')
    .then(function () {
      tablet = Nightmare({
        width: 768,
        height: 516,
        show: true,
        dock: true,
        alwaysOnTop: false,
        x: 0,
        y: 0
      })
      tablet.goto('http://localhost:8022/index-spec.html')
      .then(function () {
        cb()
      })
    })
  })
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
    desktop.evaluate(renderOnClient, component.toString(), state, helpers),
    mobile.evaluate(renderOnClient, component.toString(), state, helpers),
    tablet.evaluate(renderOnClient, component.toString(), state, helpers)
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
    var targetStyles = ['color', 'width', 'height']
    console.log('getting styles')
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
  get fontsize () {
    return this.styles.then(r => getStyleProp(r, 'width'))
  },
  get BoundingClientRect () {
    console.log('getting sizes')
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
  get width () {
    return this.BoundingClientRect.then(function (res) {
      return res.width
    })
  },
  get height () {
    return this.BoundingClientRect.then(function (res) {
      return res.height
    })
  },
  get left () {
    return this.BoundingClientRect.then(function (res) {
      return res.left
    })
  },
  get right () {
    return this.BoundingClientRect.then(function (res) {
      return res.right
    })
  },
  get top () {
    return this.BoundingClientRect.then(function (res) {
      return res.top
    })
  },
  get bottom () {
    return this.BoundingClientRect.then(function (res) {
      return res.bottom
    })
  }
}

var PageElement = {
  init (selector) {
    this.selector = selector
    this.desktop = Object.create(PageElementDimensions)
    this.desktop.init(desktop, selector)
    this.mobile = Object.create(PageElementDimensions)
    this.mobile.init(mobile, selector)
    this.tablet = Object.create(PageElementDimensions)
    this.tablet.init(tablet, selector)
  }
}

module.exports = {
  init: init,
  PageElement: PageElement,
  renderComponent: renderComponent
}
