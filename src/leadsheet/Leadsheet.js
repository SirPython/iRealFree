import Metadata from "./Metadata";
import Measure  from "./Measure";

/**
 * Represents a standard jazz leadsheet one might come upon. Includes things
 * such as the chords, the feel, etc.
 */
class Leadsheet {
    /**
     * This should only be called by the static Leadsheet#parse() method.
     *
     * @param {Leadsheet.Metadata} metadata The metadata of the chart.
     * @param {Leadsheet.Chord[]} chords The measures of the chart.
     */
    constructor(metadata, measures) {
        this.metadata = metadata;
        this.measures = measures;
    }

    /**
     * @param {string} chart The description for the leadsheet chart.
     *
     * Format is:
     *
     *     [, separated metadata][| separated measures][, separated chords]
     *
     * Example:
     *
     *     "foo","bar","swing",120|C7|F7|C7|C7,F#o7
     *
     * @returns {Leadsheet} The parsed leadsheet chart.
     */
    static parse(chart) {
        return new Leadsheet(new Leadsheet.Metadata(), [new Leadsheet.Measure()]);
    }

    /**
     * Transposes all the chords in the chart the distance specified by the
     * interval.
     *
     * @param {string} interval The interval to transpose.
     */
    transpose(interval) {

    }
}

Leadsheet.Metadata = Metadata;
Leadsheet.Measure  = Measure;