/**
 * Represents a single sample to be used in a sampler.
 */
export default class Sample {
    /**
     * Creates a new Sample.
     *
     * @param {string|ArrayBuffer} sample A base64-encoded audio sample.
     * @param {teoria Note} note The note being played in the audio sample.
     */
    constructor(name, sample, note) {
        this.sample = Sample._base64ToArrayBuffer(sample);
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