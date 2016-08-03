import assert from "assert";
import Leadsheet from "./Leadsheet";

describe("Leadsheet", function() {
    describe("static #parse()", function() {
        // TODO: Be more specific
        it("should parse and store the metadata block", function() {

        });
        it("should parse and store single-chord measures", function() {

        });
        it("should parse and store multi-chord measures", function() {

        });
        it("should parse and store multiple measures", function() {

        });
    });
    describe("#transpose()", function() {
        it("should transpose all the chords up", function() {

        });
        it("should transpose all the chords down", function() {

        });
        // TODO: When user is trying to transpose chart, can instead
        // enter an instrument key (ex: Eb) to transpose to. This may
        // not be relevant based on future UI decisions.
        it("should transpose based on passed-in instrument key", function() {

        });
    });
    describe("#save()", function() {
        it("should store leadsheet metadata and chords in local storage", function() {

        });
    });
});