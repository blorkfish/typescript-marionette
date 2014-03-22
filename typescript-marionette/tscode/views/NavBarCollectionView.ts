/// <reference path="../../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts"/> 
/// <reference path="./NavBarItemView.ts"/> 

class NavBarCollectionView extends Marionette.CompositeView {
    constructor(options?: any) {
        if (!options)
            options = {};
        options.template = "#navBarCollectionViewTemplate";
        super(options);
        this.itemView = NavBarItemView;
    }
}