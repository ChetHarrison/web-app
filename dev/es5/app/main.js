define(["exports", "module", "marionette", "backbone"], function (exports, module, _marionette, _backbone) {
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

  var Bb = _interopRequire(_backbone);

  var app = new Mn.Application();

  app.backbone = Bb;

  app.on("start", function () {
    return Bb.history.start();
  });

  app.start();

  module.exports = app;
});
//# sourceMappingURL=main.js.map