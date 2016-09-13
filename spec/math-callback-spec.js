var math = require("../src/math-callback.js");

describe('Math Callback', function () {

    it("pass file name", function () {
        var result = math.sum(math.getByFile, ["./spec/number.property"]);
        expect(result).toEqual(12);
    });

    it("pass values", function () {
        var result = math.sum(math.getByParam, [4, 8]);
        expect(result).toEqual(12);
    });

    it("use spy to track method call", function () {
        var params = [8, 4];
        var expected = 12;

        spyOn(math, 'getByParam').andCallThrough();// Let spy to track all calls to method getByParam.
        expect(math.sum(math.getByParam, params)).toEqual(expected);
        expect(math.getByParam).toHaveBeenCalled();
        expect(math.getByParam.mostRecentCall.args).toEqual(params);
    });

    it("use spy to return mock data", function () {
        spyOn(math, 'getByParam').andReturn('{"a":8,"b":4}');
        expect(math.sum(math.getByParam, null)).toEqual(12);
    });

});