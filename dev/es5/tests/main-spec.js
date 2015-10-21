define(["exports", "app", "marionette", "jasmine-jquery", "jquery", "fixtures", "sinon"], function (exports, _app, _marionette, _jasmineJquery, _jquery, _fixtures, _sinon) {
	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var App = _interopRequire(_app);

	var Marionette = _interopRequire(_marionette);

	var jj = _interopRequire(_jasmineJquery);

	var $ = _interopRequire(_jquery);

	var fixtures = _interopRequire(_fixtures);

	var sinon = _interopRequire(_sinon);

	describe("main-spec.js", function () {
		"use strict";

		beforeEach(function () {
			// Note don't use the fat arrow function if you want to
			// use `this` for passing vars. And trust me, you do.
			// http://jasmine.github.io/2.0/introduction.html#section-The_<code>this</code>_keyword

			// add a handlebars fixture to your spec-runner this way
			$("body").append("<div id=\"fixtures\" style=\"display: none;\"></div>");
			$("#fixtures").append(fixtures.main({ content: "Foo for you" }));

			// fake XMLHttpRequest with Sinonjs
			var fetchRequest = undefined;
			this.xhr = sinon.useFakeXMLHttpRequest();
			this.xhr.onCreate = function (request) {
				fetchRequest = request;
			};
			$.ajax();
			fetchRequest.respond(200, { "Content-Type": "application/json" }, "{ \"key\" : \"fakeValue\" }");
		});

		afterEach(function () {
			$("#fixtures").detach();
			this.xhr.restore();
		});

		it("creates a Marionette Application", function () {
			expect(App instanceof Marionette.Application).toBe(true);
		});

		it("app has a backbone attribute", function () {
			expect(App.backbone).toBeDefined();
		});

		// it( 'backbone.history to have started', function() {
		// 	App.start();
		// 	expect( App.backbone.History.started ).toBe( true );
		// } );
	});
});
//# sourceMappingURL=main-spec.js.map