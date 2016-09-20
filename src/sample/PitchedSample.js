import Sample from "./Sample";

/**
 * A sample that is a single pitch. This pitch will be changed and played
 * back based on the note requested to be played.
 */
export default class PitchedSample extends Sample {
    /**
     * Creates a new Sample.
     *
     * @param {string} href The href of the sample.
     * @param {teoria Not} note The note being played in the audio sample.
     * @param {AudioContext} ctx The audio context.
     */
    constructor(href, note, ctx) {
        super();
        this.note = note;

        this.audio = null; // _load will assign this
        super._load(href, ctx);
    }

    /**
     * Plays this sample.
     *
     * @param {teoria Note[]} note The notes to play.
     * @param {number} duration How long to play the sample for.
     * @param {AudioContext} ctx The audio context to play this on.
     */
    play(notes, duration, ctx) {
        /* Allows for a single note to be passed in, rather than an array. */
        if(!Array.isArray(notes)) {
            notes = [notes];
        }

        notes.forEach((note) => {
            let src = ctx.createBufferSource();
            src.buffer = this.audio;
            src.playbackRate.value = note.fq() / this.note.fq();
            src.connect(ctx.destination);
            src.start(0, 0, duration);
        });
    }
}