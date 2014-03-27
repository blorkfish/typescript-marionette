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
var UserResultsView = (function (_super) {
    __extends(UserResultsView, _super);
    function UserResultsView(options) {
        if (!options)
            options = {};
        options.template = "#userResultsViewTemplate";
        options.tagName = "table";
        options.className = "table table-hover";
        options.itemViewContainer = "tbody";
        _super.call(this, options);
        this.itemView = UserResultItemView;
    }
    return UserResultsView;
})(Marionette.CompositeView);

var UserResultItemView = (function (_super) {
    __extends(UserResultItemView, _super);
    function UserResultItemView(options) {
        if (!options)
            options = {};
        options.template = "#userResultItemViewTemplate";
        options.tagName = "tr";
        _super.call(this, options);
        this.itemView = ResultItemView;
        this.collection = new RoundScoreCollection(options.model.RoundScores);
    }
    return UserResultItemView;
})(Marionette.CompositeView);

var ResultItemView = (function (_super) {
    __extends(ResultItemView, _super);
    function ResultItemView(options) {
        if (!options)
            options = {};
        options.template = "#resultItemViewTemplate";
        options.tagName = "td";
        _super.call(this, options);
    }
    return ResultItemView;
})(Marionette.ItemView);
//# sourceMappingURL=UserResultViews.js.map
