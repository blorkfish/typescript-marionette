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

var NavBarButtonModel = (function (_super) {
    __extends(NavBarButtonModel, _super);
    function NavBarButtonModel(input) {
        _super.call(this);
        for (var key in input) {
            if (key) {
                this[key] = input[key];
            }
        }
    }
    Object.defineProperty(NavBarButtonModel.prototype, "Name", {
        get: function () {
            return this.get('Name');
        },
        set: function (value) {
            this.set('Name', value);
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(NavBarButtonModel.prototype, "Id", {
        get: function () {
            return this.get('Id');
        },
        set: function (value) {
            this.set('Id', value);
        },
        enumerable: true,
        configurable: true
    });
    return NavBarButtonModel;
})(Backbone.Model);
//# sourceMappingURL=NavBarButtonModel.js.map
