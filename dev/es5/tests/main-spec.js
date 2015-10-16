define(["exports", "main", "marionette", "backbone"], function (exports, _main, _marionette, _backbone) {
	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var App = _interopRequire(_main);

	var Marionette = _interopRequire(_marionette);

	var Backbone = _interopRequire(_backbone);

	describe("main-spec.js", function () {
		"use strict";

		it("creates a Marionette Application", function () {
			expect(App instanceof Marionette.Application).toBe(true);
		});

		it("app has a backbone attribute", function () {
			expect(App.backbone).toBeDefined();
		});

		it("backbone.history to have started", function () {
			expect(Backbone.History.started).toBe(true);
		});
	});
});
//# sourceMappingURL=main-spec.js.map