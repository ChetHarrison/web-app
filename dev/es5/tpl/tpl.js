define(['bower_modules/handlebars/handlebars'], function(Handlebars) {

this["tpl"] = this["tpl"] || {};

this["tpl"]["foo"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>Howdy "
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n";
},"useData":true});

return this["tpl"];

});