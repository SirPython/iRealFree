/**
 * Represents a single measure in a leadsheet chart. Basically, contains the
 * different chords TODO and which beats they fall on.
 */
export default class Measure {
    /**
     * @param {teoria Chord[]} chords An array of chords.
     *
     * TODO: Change chords to be a map telling which beat the chords are on.
     * TODO: Allow for chords to be empty, and it borrows from the last measure.
     */
    constructor(chords) {
        this.chords = chords; // TODO Should this take chord symbols and parse
                              // it's own? No; that's parser's job.
    }
}