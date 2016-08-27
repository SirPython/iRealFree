const semitoneRatio = Math.pow(2, 1/12); // read more here: https://en.wikipedia.org/wiki/Twelfth_root_of_two

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

        for(let sample in this.samples) {
            this.samples[sample].loadAudio(this.ctx);
        }
    }

    /**
     * Plays the note using the sample from that instrument.
     *
     * @param {teoria Note | teoria Note[]} notes The notes to play.
     * @param {string} instrument The instrument sample to use.
     * @param {number} [duration] The duration (ms) to play the note.
     *
     * If duration is left out, the unique ID returned can be passed into stop()
     * to have the note stop playing.
     *
     * Passing an array of notes has this method call itself again for each
     * note, and stop the method call that was originally started.
     *
     * @returns {Symbol} The unique ID to the sound being played for stop()
     */
    play(notes, instrument, duration) {
        // TODO: Also allow for teoria Chords to be passed in.

        let sample = this.samples[instrument];
        let note = null;

        /* This allows for both arrays and just a single note to be passed. */
        if(Array.isArray(notes)) {
            notes.forEach(
                note => this.play(note, instrument, duration) // TODO: This doesn't return the ID.
            );
            return;
        }
        note = notes; // for better reading

        let src = this.ctx.createBufferSource();
        src.buffer = sample.audio;
        src.loop = true; // will remove eventually
        src.playbackRate.value = note.fq() / sample.note.fq();
        src.connect(this.ctx.destination);

        if(duration) {
            src.start(0, 0, duration);

            return new Promise(resolve => { // TODO This doesn't let the sound stop before the end
                setTimeout(resolve, duration);
            });
        } else {
            src.start();

            let id = Symbol(`${note} ${instrument} ${duration}`);
            this._runningSounds[id] = src;
            return id;
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