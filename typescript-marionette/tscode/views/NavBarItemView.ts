/// <reference path="../../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts"/> 

class NavBarItemView extends Marionette.ItemView {
    constructor(options?: any) {
        if (!options)
            options = {};
        options.template = "#navBarItemViewTemplate";
        options.className = "btn btn-primary";
        options.events = { "click": "onClickEvent" };
        super(options);
    }
    onClickEvent() {
        this.trigger("navbar:clicked", this.model.get('Id'));
    }
}