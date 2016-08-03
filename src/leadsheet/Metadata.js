/**
 * Represents the metadata of a leadsheet (title, composer, feel, etc)
 */
export default class Metadata {
    /**
     * @param {string} title The title of the chart.
     * @param {string} composer The composer of the chart.
     * @param {string} feel The feel of the chart (swing, up, bossa, funk)
     *
     * TODO: Add more metadata stuffs.
     */
    constructor(title, composer, feel) {
        this.title = title;
        this.composer = composer;
        this.feel = feel;
    }
}