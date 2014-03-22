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
        this.on("initialize:after", this.initializeAfter);
        this.addRegions({ navbarRegion: "#navbarRegion" });
    }
    MarionetteApp.prototype.initializeAfter = function () {
        var navBarButtonCollection = new NavBarButtonCollection([
            { Name: "Home", Id: 1 },
            { Name: "About", Id: 2 },
            { Name: "Contact Us", Id: 3 }
        ]);

        var navBarView = new NavBarCollectionView({ collection: navBarButtonCollection });

        navBarView.on("itemview:navbar:clicked", this.navBarButtonClicked);

        this.navbarRegion.show(navBarView);
    };

    MarionetteApp.prototype.navBarButtonClicked = function (itemView, buttonId) {
        alert('Marionette.App handled NavBarItemView clicked with id :' + buttonId);
    };
    return MarionetteApp;
})(Marionette.Application);
//# sourceMappingURL=MarionetteApp.js.map
