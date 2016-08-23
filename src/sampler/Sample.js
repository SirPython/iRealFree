import "regenerator-runtime/runtime";

/**
 * Represents a single sample to be used in a sampler.
 */
export default class Sample {
    /**
     * Creates a new Sample.
     *
     * @param {string} href A href of the sample.
     * @param {teoria Note} note The note being played in the audio sample.
     */
    constructor(href, note) {
        this.href = href;
        this.note = note;

        this.audio = null; // loadAudioBuffer fills this.
    }

    /**
     * Loads the audio file into the audio property.
     *
     * Steps:
     * 1. Fetch the audio file.
     * 2. Turn it into an array buffer (this returns a promise - yay)
     * 3. Decode the array buffer into an audio buffer (also a promise - yayx2)
     *
     * Promise galore.
     *
     * @param {AudioContext} ctx The audio context of the sampler.
     */
    async loadAudio(ctx) {
        await new Promise(() => {
            fetch(this.href).then(
                response => response.arrayBuffer().then(
                    buffer => ctx.decodeAudioData(buffer).then(
                        audio => this.audio = audio
                    )
                )
            )
        });
    }
}