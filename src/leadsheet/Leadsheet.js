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
}

Leadsheet.Metadata = Metadata;
Leadsheet.Measure  = Measure;