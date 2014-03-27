/// <reference path="../../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts"/> 

class UserResultsView extends Marionette.CompositeView {
    constructor(options?: any) {
        if (!options)
            options = {};
        options.template = "#userResultsViewTemplate";
        options.tagName = "table";
        options.className = "table table-hover"; 
        options.itemViewContainer = "tbody"; 
        super(options);
        this.itemView = UserResultItemView; 
    }
}

class UserResultItemView extends Marionette.CompositeView {
    constructor(options?: any) {
        if (!options)
            options = {};
        options.template = "#userResultItemViewTemplate";
        options.tagName = "tr"; 
        super(options);
        this.itemView = ResultItemView; 
        this.collection = new RoundScoreCollection(options.model.RoundScores);
    }
}

class ResultItemView extends Marionette.ItemView {
    constructor(options?: any) {
        if (!options)
            options = {};
        options.template = "#resultItemViewTemplate";
        options.tagName = "td"; 
        super(options);
    }
}

