var math = require("../src/math-from-file.js");

console.log("===================1");

describe("Math from file Test", function () {
    it("tests add", function () {
        expect(math.sumFromPropertyFile("./spec/number.property")).toEqual(12);
    });
});
