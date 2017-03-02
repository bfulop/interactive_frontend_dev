var convertMobile = function (targetWidth) {
// 1080px in mocks is 360px in CSS
  return targetWidth / 3
}

var convertTablet = function (targetWidth) {
// 1536px in mocks is 768px in CSS
  return targetWidth / 2
}

global.convertMobile = convertMobile
global.convertTablet = convertTablet
