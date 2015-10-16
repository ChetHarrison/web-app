define(["exports", "messages"], function (exports, _messages) {
	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var messages = _interopRequire(_messages);

	describe("messages-spec.js", function () {
		"use strict";

		it("messages has getHello property", function () {
			expect(messages.getHello).toBeDefined();
		});
	});
});
//# sourceMappingURL=messages-spec.js.map