/// <reference path="../../../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../../../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts"/>
/// <reference path="../../../Scripts/typings/jasmine/jasmine.d.ts"/>
/// <reference path="../../../Scripts/typings/jasmine-jquery/jasmine-jquery.d.ts"/>
describe('/tscode/test/models/UserResultCollectionTests.ts ', function () {
    var userResultCollection;

    beforeEach(function () {
        userResultCollection = new UserResultCollection();
        userResultCollection.fetch({ async: false });
    });

    it('should return 3 records from HomeDataController', function () {
        expect(userResultCollection.length).toBe(3);
    });

    it('should find 1 UserModel with Name testUser_1', function () {
        var userModels = userResultCollection.where({ UserName: 'testUser_1' });
        expect(userModels.length).toBe(1);
    });

    it('should return a UserModel with Name testUser_1', function () {
        var userModel = userResultCollection.findWhere({ UserName: 'testUser_1' });
        expect(userModel).toBeDefined();
    });

    // this describe block is nested inside our main describe block
    describe(' UserModel tests ', function () {
        var userModel;
        beforeEach(function () {
            // the userResultCollection is setup in the parent beforeEach() function
            userModel = userResultCollection.findWhere({ UserName: 'testUser_1' });
        });

        it('should set UserName property', function () {
            expect(userModel.UserName).toBe('testUser_1');
        });

        // check that we are getting an array for our nested JSON objects
        it('should set RoundScores property', function () {
            expect(userModel.RoundScores.length).toBe(4);
        });

        // nested describe block re-uses the userModel set in parent beforeEach()
        describe('RoundScore tests', function () {
            var roundScore;
            beforeEach(function () {
                roundScore = userModel.RoundScores[2]; // get the third RoundScore
            });

            it('should have RoundNumber set to 3', function () {
                expect(roundScore.RoundNumber).toBe(3);
            });
            it('should have TotalPoints set to 2', function () {
                expect(roundScore.TotalPoints).toBe(2);
            });
        });
    });
});
//# sourceMappingURL=UserResultCollectionTests.js.map
