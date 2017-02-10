var desktop, mobile

function init (wdio) {
  desktop = wdio.desktop
  mobile = wdio.mobile
}

var convertMobile = function (targetWidth) {
// 1080px in mocks is 360px in CSS
  return targetWidth / 3
}

function distance (posA, posB) {
  return Promise.all([posA, posB]).then(function (values) {
    return values[1] - values[0]
  })
}

var PageElementDimensions = {
  init (target, selector) {
    this.target = target
    this.selector = selector
  },
  get element () {
    return this.target.element(this.selector)
  },
  get size () {
    return this.element.getElementSize()
  },
  get width () {
    return this.size.then(function (res) {
      return res.width
    })
  },
  get height () {
    return this.size.then(function (res) {
      return res.height
    })
  },
  get location () {
    return this.element.getLocation()
  },
  get posX () {
    return this.location.then(function (res) {
      return res.x
    })
  },
  get left () {
    return this.posX
  },
  get posY () {
    return this.location.then(function (res) {
      return res.y
    })
  },
  get top () {
    return this.posY
  },
  get right () {
    return Promise.all([this.posX, this.width]).then(function (values) {
      return values[0] + values[1]
    })
  },
  get bottom () {
    return Promise.all([this.posY, this.height]).then(function (values) {
      return values[0] + values[1]
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
  }
}

module.exports = {
  init: init,
  PageElement: PageElement,
  distance: distance,
  convertMobile: convertMobile
}
