define(["exports", "app", "marionette"], function (exports, _app, _marionette) {
	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var App = _interopRequire(_app);

	var Marionette = _interopRequire(_marionette);

	describe("main-spec.js", function () {
		"use strict";

		it("creates a Marionette Application", function () {
			expect(App instanceof Marionette.Application).toBe(true);
		});

		it("app has a backbone attribute", function () {
			expect(App.backbone).toBeDefined();
		});

		// it( 'backbone.history to have started', () => {
		// 	App.start();
		// 	expect( App.backbone.History.started ).toBe( true );
		// } );
	});
});
//# sourceMappingURL=main-spec.js.map