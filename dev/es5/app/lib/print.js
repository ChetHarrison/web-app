define(["exports", "module"], function (exports, module) {
  //   Module      : print.js
  // ----------------------------
  //		Description : return a function.
  //		Copyright   : (c) Nimble Chef Inc. 2015
  //		Maintainer  : chet.harrison@nimblechef.com
  //		Stability   : experimental
  // Here is a longer description of this module
  "use strict";

  module.exports = function (msg) {
    return document.body.appendChild(document.createTextNode(msg));
  };
});
//# sourceMappingURL=print.js.map