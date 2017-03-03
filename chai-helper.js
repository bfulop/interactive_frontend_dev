// chai helpers

module.exports = function (chai, utils) {
  var Assertion = chai.Assertion
  Assertion.addMethod('color', function (color) {
    var obj = this._obj

    this.assert(
      obj === color
    , 'expected #{this} to be of type #{exp} but got #{act}'
    , 'expected #{this} to not be of type #{act}'
    , color        // expected
    , obj   // actual
    )
  })
}
