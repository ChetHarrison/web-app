define(["exports", "app/messages", "lib/print"], function (exports, _appMessages, _libPrint) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var messages = _interopRequire(_appMessages);

  var print = _interopRequire(_libPrint);

  print(messages.getHello());
});
//# sourceMappingURL=main.js.map