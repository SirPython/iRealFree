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
     * @param {number} [duration] The duration (s) to play the note.
     */
    play(notes, instrument, duration) {
        let sample = this.samples[instrument];

        /* teoria Chords have a method called chordType(); this condition checks
           to see if notes is in fact a chord, rather than an array of notes
           or a single note. */
        if(notes.chordType) {
            notes = notes.notes();
        }

        /* A small utility function for setting up the buffer sources for each
           note to be played. */
        const setupSource = (note) => {
            let src = this.ctx.createBufferSource();
            src.buffer = sample.audio;
            src.loop = true; // will remove eventually
            src.playbackRate.value = note.fq() / sample.note.fq();
            src.connect(this.ctx.destination);

            return src;
        }

        /* This allows for both arrays AND just a single note to be passed. */
        if(Array.isArray(notes)) {
            notes.map(setupSource);
        } else {
            // only one note, but easier to put in an array (less repeated code)
            notes = [setupSource(notes)];
        }

        if(duration) {
            notes.forEach(
                note => note.start(0, 0, duration)
            );
        } else {
            notes.forEach(
                note => note.start()
            );
        }
    }
}