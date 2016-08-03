import assert from "assert";
import teoria from "teoria";
import Leadsheet from "./Leadsheet";

describe("Leadsheet", function() {
    var giantSteps = null;

    before(function() {
        giantSteps = Leadsheet.parse("giant_steps,john_coltrane,swing,280:Bmaj7,D7|Gmaj7,Bb7|Ebmaj7|A-7,D7|Gmaj7,Bb7|Ebmaj7,F#7|Bmaj7|F-7,Bb7|Ebmaj7|A-7,D7|Gmaj7|C#-7,F#7|Bmaj7|F-7,Bb7|Ebmaj7|C#-7,F#7");
    });

    describe("static #parse()", function() {
        // TODO: Be more specific
        it("should parse and store the metadata block", function() {
            assert.equal(giantSteps.metadata.title, "Giant Steps");
            assert.equal(giantSteps.metadata.composer, "John Coltrane");
            assert.equal(giantSteps.metadata.feel, "swing");
            assert.equal(giantSteps.metadata.bpm, 280);
        });
        it("should parse and store single-chord measures", function() {
            assert.deepEqual(giantSteps.measures[2].chords[0], teoria.chord("Ebmaj7"));
        });
        it("should parse and store multi-chord measures", function() {
            assert.deepEqual(giantSteps.measures[0].chords, [teoria.chord("Bbmaj7"), teoria.chord("D7")]);
        });
        it("should parse and store multiple measures", function() {
            assert(giantSteps.measures.length > 0);
        });
    });
    describe("#transpose()", function() {
        var clone = null;

        beforeEach(function() {
            clone = JSON.parse(JSON.stringify(giantSteps));
        });

        it("should transpose all the chords up", function() {
            clone.transpose("m2");
            assert.deepEqual(clone.measures[0].chords[0], teoria.chord("Cmaj7"));
        });
        it("should transpose all the chords down", function() {
            clone.transpose("P-4");
            assert.deepEqual(clone.measures[0].chords[0], teoria.chord("F#maj7"));
        });
    });
    describe("#save()", function() {
        it("should store leadsheet metadata and chords in local storage", function() {
            assert(false); // TODO
        });
    });
});