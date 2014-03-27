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

var RoundScore = (function (_super) {
    __extends(RoundScore, _super);
    function RoundScore(input) {
        _super.call(this);
        for (var key in input) {
            if (key) {
                this[key] = input[key];
            }
        }
    }
    Object.defineProperty(RoundScore.prototype, "RoundNumber", {
        get: function () {
            return this.get('RoundNumber');
        },
        set: function (value) {
            this.set('RoundNumber', value);
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(RoundScore.prototype, "TotalPoints", {
        get: function () {
            return this.get('TotalPoints');
        },
        set: function (value) {
            this.set('TotalPoints', value);
        },
        enumerable: true,
        configurable: true
    });
    return RoundScore;
})(Backbone.Model);

var UserModel = (function (_super) {
    __extends(UserModel, _super);
    function UserModel(input) {
        _super.call(this);
        for (var key in input) {
            if (key) {
                this[key] = input[key];
            }
        }
    }
    Object.defineProperty(UserModel.prototype, "UserName", {
        get: function () {
            return this.get('UserName');
        },
        set: function (value) {
            this.set('UserName', value);
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(UserModel.prototype, "RealName", {
        get: function () {
            return this.get('RealName');
        },
        set: function (value) {
            this.set('RealName', value);
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(UserModel.prototype, "RoundScores", {
        get: function () {
            return this.get('RoundScores');
        },
        set: function (value) {
            this.set('RoundScores', value);
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(UserModel.prototype, "RoundScoreCollection", {
        get: function () {
            return new RoundScoreCollection(this.get('RoundScores'));
        },
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    return UserModel;
})(Backbone.Model);

var UserResultCollection = (function (_super) {
    __extends(UserResultCollection, _super);
    function UserResultCollection(options) {
        _super.call(this, options);
        this.model = UserModel;
        this.url = "/api/results";
    }
    return UserResultCollection;
})(Backbone.Collection);

var RoundScoreCollection = (function (_super) {
    __extends(RoundScoreCollection, _super);
    function RoundScoreCollection(options) {
        _super.call(this, options);
        this.model = RoundScore;
    }
    return RoundScoreCollection;
})(Backbone.Collection);
//# sourceMappingURL=UserResultModels.js.map
