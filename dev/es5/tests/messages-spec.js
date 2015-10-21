define(["exports", "messages"], function (exports, _messages) {
	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	//   Module      : messages-spec.js
	// ----------------------------
	//		Description : example test
	//		Copyright   : (c) Nimble Chef Inc. 2015
	//		Maintainer  : chet.harrison@nimblechef.com
	//		Stability   : experimental
	//

	var messages = _interopRequire(_messages);

	describe("messages-spec.js", function () {
		"use strict";

		it("messages has getHello property", function () {
			expect(messages.getHello).toBeDefined();
		});
	});
});
//# sourceMappingURL=messages-spec.js.map