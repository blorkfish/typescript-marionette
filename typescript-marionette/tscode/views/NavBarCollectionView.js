/// <reference path="../../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts"/>
/// <reference path="./NavBarItemView.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var NavBarCollectionView = (function (_super) {
    __extends(NavBarCollectionView, _super);
    function NavBarCollectionView(options) {
        if (!options)
            options = {};
        options.template = "#navBarCollectionViewTemplate";
        _super.call(this, options);
        this.itemView = NavBarItemView;
    }
    return NavBarCollectionView;
})(Marionette.CompositeView);
//# sourceMappingURL=NavBarCollectionView.js.map
