/// <reference path="../../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts"/> 
/// <reference path="./NavBarButtonModel.ts" />

class NavBarButtonCollection extends Backbone.Collection {
    constructor(options?: any) {
        super(options);
        this.model = NavBarButtonModel;
    }
}