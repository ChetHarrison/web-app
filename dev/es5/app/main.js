define(["exports", "module", "config", "app", "stock"], function (exports, module, _config, _app, _stock) {
  //   Module      : main.js
  // ----------------------------
  //		Description : kickoff the app.
  //		Copyright   : (c) Nimble Chef Inc. 2015
  //		Maintainer  : chet.harrison@nimblechef.com
  //		Stability   : experimental
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var config = _interopRequire(_config);

  var App = _interopRequire(_app);

  var Stock = _interopRequire(_stock);

  App.start();

  module.exports = app;
});
//# sourceMappingURL=main.js.map