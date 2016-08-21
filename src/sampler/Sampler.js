/**
 * A sampler.
 *
 * Similar to a synthesizer, but rather than making it's own sounds, the
 * sampler and adjusts pre-recorded sound samples (hence the name).
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
        this._runningSounds = {};

        /* Load each samples audio buffer. */
        this.samples.forEach(
            sample => sample.loadAudio(this.ctx);
        );
    }

    /**
     * Plays the note using the sample from that instrument.
     *
     * @param {teoria Note} note The note to play.
     * @param {string} instrument The instrument sample to use.
     * @param {number} [duration] The duration (ms) to play the note.
     *
     * If duration is left out, the unique ID returned can be passed into stop()
     * to have the note stop playing.
     *
     * @returns {Symbol} The unique ID to the sound being played for stop()
     */
    play(note, instrument, duration) {
        let src = this.ctx.createBufferSource();
        src.buffer = this.samples[instrument].audio;
        src.loop = true;

        // TODO: modify playback speed here

        src.connect(this.ctx.destination);
        if(duration) {
            src.start(0, 0, duration);
        } else {
            src.start();

            let symbol = Symbol(`${note} ${instrument} ${duration}`);
            this._runningSounds[symbol] = src;
            return symbol; // the unique id
        }
    }

    /**
     * Stops a running sound being played. If play() is called without a
     * duration parameter, an ID is returned that can be given to this
     * to stop the sound from playing.
     *
     * @param {Symbol} id The id of the running sound.
     */
    stop(id) {
        if(!(id in this._runningSounds)) {
            throw new Error("ID not found in running sounds.");
        }

        this._runningSounds[id].stop();
        delete this._runningSounds[id];
    }
}