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

    /**
     * Returns the chord from the specific beat.
     *
     * If a chord isn't explicitly set for that beat, the last chord of the
     * measure is chosen.
     *
     * TODO: What if there is no specified chord for this measure? What if it's
     * borrowing the chord from the last measure? The measures should be set
     * up in a doubly linked list so that getChord can traverse backwards
     * until a chord is found. Or, the getChord method should be given to
     * Leadsheet (but this can get troublesome, as will a lot of other things,
     * if support for changing meters, bpm, or whatever is allowed).
     *
     * @param {number} beat 0-index beat of the measure.
     * @returns {teoria Chord} The chord
     */
    getChord(beat) {
        this.chords[0];//this.chords[beat] || the_last_explicit_chord
        for(; beat >= 0; beat--) {
            if(this.chords[beat]) {
                return this.chords[beat];
            }
        }
        return null;
    }
}