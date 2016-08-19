/**
 * Represents a single sample to be used in a sampler.
 */
export default class Sample {

    // TODO: Allow for both teoria note and string (string gets parsed),
    // same for other types.
    /**
     * Creates a new Sample.
     *
     * @param {string} name The name of the instrument.
     * @param {ArrayBuffer} sample An audio sample.
     * @param {teoria Note} note The note being played in the audio sample.
     */
    constructor(name, sample, note) {
        this.name = name;
        this.sample = sample;
        this.note = note;
    }

    /**
     * Loads a sample into an ArrayBuffer.
     *
     * @param {string} path The path to the sample.
     * @param {AudioContext} ctx The audio context of a Sampler.
     */
    static loadSample(path, ctx) {
        return fetch(path).then(
            ctx.decodeAudioData
        );
    }
}