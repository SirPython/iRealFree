import "regenerator-runtime/runtime";

/**
 * Utility method: Converts a base64 string into an ArrayBuffer.
 *
 * @param {string} base64 A base64-encoded string.
 * @param {string} mime The mime type of the data in the base64 string.
 *
 * @returns {ArrayBuffer} An array buffer.
 *
 * It's so beautiful.
 */
const base64ToArrayBuffer = (base64, mime) => {
    //new TextEncoder("utf8").encode(atob(base64)).buffer;
    let fr = new FileReader();
    fr.readAsArrayBuffer(new Blob([atob(base64)], {type: mime}));
    return new Promise(
        resolve => fr.onloadend = () => resolve(fr.result)
    );
}

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
        var buffer = await base64ToArrayBuffer(this.sampleData, "audio/x-wav");
        debugger;
        var audio  = await ctx.decodeAudioData(buffer);
        this.audio = audio;
    }
}