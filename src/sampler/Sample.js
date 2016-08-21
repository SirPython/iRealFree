import "regenerator-runtime/runtime";

/**
 * Utility method: Converts a base64 string into an ArrayBuffer.
 *
 * @param {string} base64 A base64-encoded string.
 *
 * It's so beautiful.
 */
const base64ToArrayBuffer = base64 =>
    new TextEncoder("utf8").encode(atob(base64)).buffer;

/**
 * Represents a single sample to be used in a sampler.
 */
export default class Sample {
    /**
     * Creates a new Sample.
     *
     * @param {string} sampleData A base64-encoded audio sample.
     * @param {teoria Note} note The note being played in the audio sample.
     */
    constructor(sampleData, note) {
        this.sampleData = sampleData;
        this.note = note;

        this.audio = null; // loadAudioBuffer fills this.
    }

    /**
     * Sets the audio property to a playable audio buffer.
     *
     * @param {AudioContext} ctx The audio context of the sampler.
     */
    async loadAudio(ctx) {
        debugger;
        var buffer = base64ToArrayBuffer(this.sampleData);
        debugger;
        var audio  = await ctx.decodeAudioData(buffer);
        this.audio = audio;

        debugger;
    }
}