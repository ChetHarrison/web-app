define(["exports", "app", "marionette", "jasmine-jquery", "jquery", "fixtures"], function (exports, _app, _marionette, _jasmineJquery, _jquery, _fixtures) {
	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var App = _interopRequire(_app);

	var Marionette = _interopRequire(_marionette);

	var jj = _interopRequire(_jasmineJquery);

	var $ = _interopRequire(_jquery);

	var fixtures = _interopRequire(_fixtures);

	describe("main-spec.js", function () {
		"use strict";

		beforeEach(function () {
			$("body").append("<div id=\"fixtures\" style=\"display: none;\"></div>");
			$("#fixtures").append(fixtures.main({ content: "Foo for you" }));
		});

		afterEach(function () {
			$("#fixtures").detach();
		});

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