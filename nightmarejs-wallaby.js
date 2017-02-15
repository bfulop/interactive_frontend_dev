var Nightmare = require('nightmare')
var nightmare

function testthis (aparam) {
  return nightmare
  .evaluate(function (param) {
    return param
  }, aparam)
}

function init (cb) {
  nightmare = Nightmare({
    show: true,
    dock: true,
    openDevTools: {
      mode: 'detach'
    }
  })
  nightmare.goto('http://localhost:8022/index-spec.html').then(function () {
    cb()
  })
}

var PageElementDimensions = {
  init (target, selector) {
    this.target = target
    this.selector = selector
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
    this.desktop.init(nightmare, selector)
  }
}

module.exports = {
  init: init,
  testthis: testthis,
  PageElement: PageElement
}
