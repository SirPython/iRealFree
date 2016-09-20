import "regenerator-runtime/runtime";

/**
 * Represents a single sample to be used in a sampler.
 */
export default class Sample {
    /**
     * Creates a new Sample.
     */
    constructor() {
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
     * @param {string} href The href of the sample.
     * @param {AudioContext} ctx The audio context of the sampler.
     *
     * This doesn't return anything because ES7 async methods cannot return
     * values (well, if you attempt it, they just return a promise). So, instead
     * this just assigned the value to the audio property.
     */
    async _load(href, ctx) {
        await new Promise(() => {
            fetch(href).then(
                response => response.arrayBuffer().then(
                    buffer => ctx.decodeAudioData(buffer).then(
                        audio => this.audio = audio
                    )
                )
            )
        });
    }

    /**
     * Plays this sample.
     */
    play() {

    }
}