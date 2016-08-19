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
     * @param {string|ArrayBuffer} sample A base64-encoded audio sample.
     * @param {teoria Note} note The note being played in the audio sample.
     */
    constructor(name, sample, note) {
        this.name = name; // TODO: kinda pointless
        this.sample = Sample._base64ToArrayBuffer(sample); // TODO: Is this transformation in the constructor okay?
        this.note = note;
    }

    /**
     * Utility method: Converts a base64 string into an ArrayBuffer.
     *
     * @param {string} base64 A base64-encoded string.
     *
     * It's so beautiful.
     */
    static _base64ToArrayBuffer(base64) {
        return new TextEncoder("utf8").encode(atob(base64)).buffer;
    }
}