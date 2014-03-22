/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../Scripts/typings/marionette/marionette.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MarionetteApp = (function (_super) {
    __extends(MarionetteApp, _super);
    function MarionetteApp() {
        _super.call(this);
        this.on("initialise:after", this.initialiseAfter);
    }
    MarionetteApp.prototype.initialiseAfter = function () {
        alert("initialiseAfter called");
    };
    return MarionetteApp;
})(Marionette.Application);
//# sourceMappingURL=App.js.map
