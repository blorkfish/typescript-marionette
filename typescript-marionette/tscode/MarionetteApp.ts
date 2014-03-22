/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../Scripts/typings/marionette/marionette.d.ts"/>

class MarionetteApp extends Marionette.Application {
    navbarRegion: Marionette.Region;
    constructor() {
        super();
        this.on("initialize:after", this.initializeAfter);
        this.addRegions({ navbarRegion: "#navbarRegion" });
    }
    initializeAfter() {
        var navBarButtonCollection: NavBarButtonCollection = new NavBarButtonCollection(
            [
                { Name: "Home", Id: 1 },
                { Name: "About", Id: 2 },
                { Name: "Contact Us", Id: 3 }
            ]);

        var navBarView = new NavBarCollectionView({ collection: navBarButtonCollection });

        navBarView.on("itemview:navbar:clicked", this.navBarButtonClicked);

        this.navbarRegion.show(navBarView);
    }

    navBarButtonClicked(itemView: Marionette.ItemView, buttonId: number) {
        alert('Marionette.App handled NavBarItemView clicked with id :' + buttonId);
    }

}