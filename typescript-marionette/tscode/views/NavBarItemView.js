/// <reference path="../../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var NavBarItemView = (function (_super) {
    __extends(NavBarItemView, _super);
    function NavBarItemView(options) {
        if (!options)
            options = {};
        options.template = "#navBarItemViewTemplate";
        options.className = "btn btn-primary";
        options.events = { "click": "onClickEvent" };
        _super.call(this, options);
    }
    NavBarItemView.prototype.onClickEvent = function () {
        this.trigger("navbar:clicked", this.model.get('Id'));
    };
    return NavBarItemView;
})(Marionette.ItemView);
//# sourceMappingURL=NavBarItemView.js.map
