define(["exports", "main", "marionette"], function (exports, _main, _marionette) {
	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var main = _interopRequire(_main);

	var Marionette = _interopRequire(_marionette);

	describe("main-spec.js", function () {
		"use strict";

		it("creates a Marionette Application", function () {
			expect(main instanceof Marionette.Application).toBe(true);
		});
	});
});
//# sourceMappingURL=main-spec.js.map