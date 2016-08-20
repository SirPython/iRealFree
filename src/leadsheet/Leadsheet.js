import teoria   from "teoria";
import Metadata from "./Metadata";
import Measure  from "./Measure";


/**
 * Represents a standard jazz leadsheet one might come upon. Includes things
 * such as the chords, the feel, etc.
 */
export default class Leadsheet {
    /**
     * This should only be called by the static Leadsheet#parse() method.
     *
     * @param {Metadata} metadata The metadata of the chart.
     * @param {Chord[]} chords The measures of the chart.
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
     *     "foo","bar","swing",120:C7|F7|C7|C7,F#o7
     *
     * @returns {Leadsheet} chart The parsed leadsheet chart.
     */
    static parse(chart) {
        var metadata = null, measures = null;
        [metadata, measures] = chart.split(":");

        /* Parse the metadata. */
        metadata = new Metadata(...metadata.split(","));

        /* Parse the measures */
        measures = measures.split("|").map( // each measure
            measure => new Measure(measure.split(",").map( // each chord
                chord => teoria.chord(chord) // turn chord into teoria Chord
            ))
        );

        return new Leadsheet(metadata, measures);
    }

    /**
     * Transposes all the chords in the chart the distance specified by the
     * interval.
     *
     * @param {string} interval The interval to transpose.
     */
    transpose(interval) {
        for(let measure of this.measures) {
            for(let chord of measure.chords) {
                chord.transpose(teoria.interval(interval));
            }
        }
    }
}