var math = require("../src/math.js");

describe("Math Test", function () {
    it("tests add", function () {
        expect(math.sum(1, 2)).toEqual(3);
    });
});