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

module.exports = {
  init: init,
  testthis: testthis
}
