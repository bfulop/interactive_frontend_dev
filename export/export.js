var Inferno = require('inferno')
var InfernoServer = require('inferno-server')
var createElement = require('inferno-create-element')
var StyleSheetServer = require('aphrodite').StyleSheetServer
var resolve = require('path').resolve
var fs = require('fs')

var FestivalsHeader = require('../src/components/FestivalsHeader').component

function fakeDispatch (action) {
  console.log('dispatch called', action)
}

var builtComponent = StyleSheetServer.renderStatic(function () {
  return InfernoServer.renderToStaticMarkup(FestivalsHeader(fakeDispatch, {
    text: '{{twig.text}}'
  }))
})

builtComponent.css.content
builtComponent.html

function wrapHTML (html, css, js) {
  return `
    <!DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" href="style.css">
            <style data-aphrodite>${css.content}</style>
        </head>
        <body>
            <div id='root'>${html}</div>
        </body>
    </html>
`
}

console.log(builtComponent)

fs.writeFile(resolve('./public/export.html'), wrapHTML(builtComponent.html, builtComponent.css), (err) => {
  if (err) throw err
  console.log('It\'s saved!')
})

