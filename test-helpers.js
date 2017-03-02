var convertMobile = function (targetWidth) {
// 1080px in mocks is 360px in CSS
  return targetWidth / 3
}

var convertTablet = function (targetWidth) {
// 1536px in mocks is 768px in CSS
  return targetWidth / 2
}

function distance (posA, posB) {
  return Promise.all([posA, posB]).then(function (values) {
    return values[1] - values[0]
  })
}

var browserSizes = {
  desktop: {
    width: 1200,
    height: 600
  },
  tablet: {
    width: 768,
    height: 516
  },
  mobile: {
    width: 360,
    height: 640
  }
}

global.convertMobile = convertMobile
global.convertTablet = convertTablet
global.sizes = browserSizes
global.distance = distance
