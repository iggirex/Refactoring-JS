var assert = require("assert");
var checkHand = require("./check-hand-with-mocha.js");

describe("multiplesIn()", function(){
    it("finds a duplicate", function(){
        var result = multiplesIn(["2-H", "3-C", "4-D", "5-H", "2-C"]);
        assert(result === 2);
    });
});

describe("highestCount()", function(){
    it("returns count of the most common card from array", function(){
        var result = highestCount(["2", "4", "4", "4", "2"]);
        assert(result === "3")
    })
})

describe("valuesFromHand()", function(){
    it("returns just the values from a hand", function(){
        var result = valuesFromHand(["2-H", "3-C", "4-D", "5-H", "2-C"]);
        assert(result === ["2", "3", "4", "5", "2"]);
    });
});

describe("checkPair()", function(){
    it("finds a pair", function(){
        var result = isPair(["2-H", "3-C", "4-D", "5-H", "2-C"]);
        assert(result);
    });
});

describe('checkHand()', function(){
    it('handles pairs', function(){
        var result = checkHand(["2-H", "3-C", "4-D", "5-H", "2-C"]);
        assert(result === "pair", "can't even handle 'pair'");
    });
    it("handles three of a kind", function(){
        var result = checkHand(["3-H", "3-C", "3-D", "5-H", "2-H"]);
        assert(result === "three of a kind");
    });
});
