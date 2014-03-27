/// <reference path="../../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts"/>
/// <reference path="./NavBarButtonModel.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var NavBarButtonCollection = (function (_super) {
    __extends(NavBarButtonCollection, _super);
    function NavBarButtonCollection(options) {
        _super.call(this, options);
        this.model = NavBarButtonModel;
        this.url = "/api/navbars";
    }
    return NavBarButtonCollection;
})(Backbone.Collection);
//# sourceMappingURL=NavBarButtonCollection.js.map
