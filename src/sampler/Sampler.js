/**
 * A sampler.
 *
 * Similar to a synthesizer, but rather than sampling it's own sounds, the
 * sampler and adjusts pre-recorded sound samples (hence the name).
 *
 * // TODO: This doesn't work for drums. :(
 * // TODO: (general todo) For methods/constructors that take things like an interval or a note, allow a string to be passed in that is parsed into the proper object (and vice versa example: sample constrctor);
 */
export default class Sampler {
    /**
     * Makes a new Sampler. Creates an audio context in the meantime.
     *
     * @param {Object} samples Keys are the names of the instruments, values
     *                          are their respective Samples.
     */
    constructor(samples) {
        this.samples = samples;
        this.ctx = new AudioContext() || new webkitAudioContext() || null;
    }

    /**
     * Plays the note using the sample from that instrument.
     *
     * @param {teoria Note} note The note to play.
     * @param {string} instrument The instrument sample to use.
     * @param {number} [duration] The duration (ms) to play the note.
     *
     * If duration is left out, a unique ID is returned that can be passed into
     * stop() to have the note stop playing.
     *
     * @returns {Symbol} The unique ID to the sound being played for stop()
     */
    play(note, instrument, duration) {

    }

    /**
     * Stops a continuous sound being played. If play() is called without a
     * duration parameter, an ID is returned that can be given to this
     * to stop the sound from playing.
     *
     * @param {Symbol} id The id of the continuous sound.
     */
    stop(id) {

    }
}