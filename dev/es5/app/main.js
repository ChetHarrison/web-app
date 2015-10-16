define(["exports", "module", "marionette"], function (exports, module, _marionette) {
  //   Module      : main.js
  // ----------------------------
  //		Description : kickoff the app.
  //		Copyright   : (c) Nimble Chef Inc. 2015
  //		Maintainer  : chet.harrison@nimblechef.com
  //		Stability   : experimental
  // Here is a longer description of this module
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var Mn = _interopRequire(_marionette);

  var app = new Mn.Application();

  app.on("start", function () {
    Backbone.history.start();
  });

  module.exports = app;
});
//# sourceMappingURL=main.js.map