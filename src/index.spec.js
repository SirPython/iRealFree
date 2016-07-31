import assert from "assert"
import foo from "./index"

describe("index", function() {
    describe("#foo()", function() {
        it("should output 'spam' + whatever is passed in.", function() {
            assert.equal(foo("eggs"), "spam eggs");
        });
        it("should not output 'eggs' + whatever is passed in.", function() {
            assert.notEqual(foo("spam"), "eggs spam");
        });
    });
});

// Note: you may not need to test your main index.js file.