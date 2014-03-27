/// <reference path="../../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts"/> 

interface IRoundScore {
    RoundNumber?: number;
    TotalPoints?: number;
}

interface IUserModel {
    UserName?: string;
    RealName?: string;
    RoundScores?: IRoundScore[];
    RoundScoreCollection?: RoundScoreCollection;
}

class RoundScore extends Backbone.Model implements IRoundScore {
    get RoundNumber(): number { return this.get('RoundNumber'); }
    set RoundNumber(value: number) { this.set('RoundNumber', value); }

    get TotalPoints(): number { return this.get('TotalPoints'); }
    set TotalPoints(value: number) { this.set('TotalPoints', value); }

    constructor(input: IRoundScore) {
        super();
        for (var key in input) {
            if (key) { this[key] = input[key]; }

        }
    }
}

class UserModel extends Backbone.Model implements IUserModel {
    get UserName(): string { return this.get('UserName'); }
    set UserName(value: string) { this.set('UserName', value); }

    get RealName(): string { return this.get('RealName'); }
    set RealName(value: string) { this.set('RealName', value); }

    get RoundScores(): IRoundScore[] { return this.get('RoundScores'); }
    set RoundScores(value: IRoundScore[]) { this.set('RoundScores', value); }

    get RoundScoreCollection(): RoundScoreCollection { return new RoundScoreCollection( this.get('RoundScores')); }
    set RoundScoreCollection(value: RoundScoreCollection) {  }

    constructor(input: IRoundScore) {
        super();
        for (var key in input) {
            if (key) { this[key] = input[key]; }

        }
    }
}

class UserResultCollection extends Backbone.Collection {
    constructor(options?: any) {
        super(options);
        this.model = UserModel;
        this.url = "/api/results";
    }
}

class RoundScoreCollection extends Backbone.Collection {
    constructor(options?: any) {
        super(options);
        this.model = RoundScore;
    }
}