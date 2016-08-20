/**
 * Represents the metadata of a leadsheet (title, composer, feel, etc)
 */
export default class Metadata {
    /**
     * @param {string} title The title of the chart.
     * @param {string} composer The composer of the chart.
     * @param {string} feel The feel of the chart (swing, up, bossa, funk)
     * @param {string} bpm The BPM that the chart should be played.
     * @param {string} meter The meter of the chart (as in, 4/4, 5/4, etc).
     * @param {string} phrase The number of bars in a phrase.
     */
    constructor(title, composer, feel, bpm, meter, phrase) {
        this.title = title;
        this.composer = composer;
        this.feel = feel;
        this.bpm = parseInt(bpm, 10);
        this.meter = meter;
        this.phrase = parseInt(phrase, 10);
    }
}