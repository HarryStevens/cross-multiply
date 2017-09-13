var expect = require("chai").expect,
    crossMultiply = require("../index");

describe("#crossMultiply", function() {
    it("should cross multiply", function() {
        var result = crossMultiply({n1: 10, d1: 15, d2: 30});
        expect(result).to.equal(20);
    });
});