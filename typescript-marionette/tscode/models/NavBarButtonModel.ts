/// <reference path="../../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts"/> 

interface INavBarButtonModel {
    Name?: string;
    Id?: number;
}

class NavBarButtonModel extends Backbone.Model implements INavBarButtonModel {
    get Name(): string { return this.get('Name'); }
    set Name(value: string) { this.set('Name', value); }

    get Id(): number { return this.get('Id'); }
    set Id(value: number) { this.set('Id', value); }

    constructor(input: INavBarButtonModel) {
        super();
        for (var key in input) {
            if (key) { this[key] = input[key]; }

        }
    }
}