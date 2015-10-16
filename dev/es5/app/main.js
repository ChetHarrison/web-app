define(["exports", "messages", "lib/print"], function (exports, _messages, _libPrint) {
  //   Module      : main.js
  // ----------------------------
  //		Description : kickoff the app.
  //		Copyright   : (c) Nimble Chef Inc. 2015
  //		Maintainer  : chet.harrison@nimblechef.com
  //		Stability   : experimental
  // Here is a longer description of this module
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var messages = _interopRequire(_messages);

  var print = _interopRequire(_libPrint);

  print(messages.getHello());
});
//# sourceMappingURL=main.js.map