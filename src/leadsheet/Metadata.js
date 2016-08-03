/**
 * Represents the metadata of a leadsheet (title, composer, feel, etc)
 */
export default class Metadata {
    /**
     * @param {string} title The title of the chart.
     * @param {string} composer The composer of the chart.
     * @param {string} feel The feel of the chart (swing, up, bossa, funk)
     * @param {string} bpm The BPM that the chart should be played.
     *
     * TODO: Add more metadata stuffs.
     */
    constructor(title, composer, feel, bpm) {
        this.title = title;
        this.composer = composer;
        this.feel = feel;
        this.feel = parseInt(bpm, 10);
    }
}