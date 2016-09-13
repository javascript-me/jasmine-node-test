var mockery = require('mockery');

console.log("===================2");

describe("Math from file Test with mock fs", function () {

    beforeEach(function () {

        // "useCleanCache: true" is very important to ensure your ARE ABLE TO PICK UP your fsMock when running this test.
        // Also see: https://github.com/mfncooper/mockery#controlling-the-module-cache.
        mockery.enable({ useCleanCache: true });

        mockery.registerAllowable('../src/math-from-file', true);
    });

    afterEach(function () {
        mockery.deregisterAllowable('../src/math-from-file');
        mockery.disable();
    })

    it("tests add", function () {

        var filename = "./spec/number.property";
        var fsMock = {
            readFileSync: function (path, encoding) {
                expect(path).toEqual(filename);
                expect(encoding).toEqual('utf8');
                return JSON.stringify({a:9, b:3000});
            }
        };

        mockery.registerMock('fs', fsMock);

        var math = require("../src/math-from-file");

        expect(math.sumFromPropertyFile(filename)).toEqual(12);

        mockery.deregisterMock('fs');
    });
});


