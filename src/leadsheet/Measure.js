/**
 * Represents a single measure in a leadsheet chart. Basically, contains the
 * different chords.
 */
export default class Measure {
    /**
     * @param {teoria Chord[]} chords An array of chords.
     */
    constructor(chords) {
        this.chords = chords;
    }
}