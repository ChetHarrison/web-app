define(['bower_modules/handlebars/handlebars'], function(Handlebars) {

this["tpl"] = this["tpl"] || {};

this["tpl"]["foo"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1>Howdy "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n";
},"useData":true});

return this["tpl"];

});