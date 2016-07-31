import assert from "assert";
import {square, cube} from "./MyModule";

describe("MyModule", function() {
    describe("#square()", function() {
        it("should return the square of the number passed i.", function () {
            assert.equal(square(3), 9);
        });
    });
    describe("#cube()", function() {
        it("should return the cube of the number passed in.", function () {
            assert.equal(cube(3), 27);
        });
    });
});