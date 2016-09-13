var math = require("../src/math-from-file.js");

describe("Math from file Test", function () {
    it("tests add", function () {
        expect(math.sumFromPropertyFile("./spec/number.property")).toEqual(12);
    });
});
