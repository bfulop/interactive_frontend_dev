/* global Inferno */

var fakeTexts = {
  title: 'Title Texts',
  subtitle: 'Sub Title Text',
  link: 'I\'m a link',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  bodyShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  bodyLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

function fakeElem (testText) {
  return Inferno.createElement('div', {className: 'mock-div'}, Inferno.createElement('span', {className: 'mock-div-text'}, testText || 'test text'))
}

module.exports = {
  fakeTexts: fakeTexts,
  fakeElem: fakeElem
}
