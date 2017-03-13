var Inferno = require('inferno')
var InfernoServer = require('inferno-server')
var createElement = require('inferno-create-element')
var StyleSheetServer = require('aphrodite').StyleSheetServer
var resolve = require('path').resolve
var fs = require('fs')

var FestivalsHeader = require('../src/components/FestivalsHeader').component

var builtComponent = StyleSheetServer.renderStatic(function () {
  return InfernoServer.renderToStaticMarkup(FestivalsHeader())
})

builtComponent.css.content
builtComponent.html

function wrapHTML (html, css, js) {
  return `
    <html>
        <head>
            <style data-aphrodite>${css.content}</style>
        </head>
        <body>
            <div id='root'>${html}</div>
        </body>
    </html>
`
}

console.log(builtComponent)

fs.writeFile(resolve('./export/export.html'), wrapHTML(builtComponent.html, builtComponent.css), (err) => {
  if (err) throw err
  console.log('It\'s saved!')
})

