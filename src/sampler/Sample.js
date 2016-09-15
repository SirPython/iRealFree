import "regenerator-runtime/runtime";

/**
 * Represents a single sample to be used in a sampler.
 */
export default class Sample {
    /**
     * Creates a new Sample.
     *
     * @param {string} href The href of the sample.
     * @param {teoria Note | number} note The note being played in the audio
     *                                    sample. Or, the amount of measures
     *                                    the sample lasts (for pattern samples).
     */
    constructor(href, note, ctx) {
        this.note = note;

        this.audio = null; // _load will assign this
        this._load(href, ctx);
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
     * This doesn't return anything because es7 async methods cannot return
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
     *
     * @param {teoria Note[]} note The notes to play.
     * @param {number} duration How long to play the sample for.
     * @param {AudioContext} ctx The audio context to play this on.
     *
     * For pattern samples, null the notes parameter.
     *
     * @TODO: The speed probably also needs to be adjusted for pattern samples;
     * depending on the tempo, having the sample last for a certian amount
     * of time doesn't stop it from being interrupted. Or, duration is computed
     * based on the amount of measures <-- that.
     */
    play(notes, duration, ctx) {
        /* Hacky. Allows for notes to be nulled, which is what pattern samples
           would use because there doesn't need to be any pitch adjustment. */
        if(!notes) {
            notes = [0];
        }
        /* Allows for a single note to be passed in, rather than an array. */
        if(!Array.isArray(notes)) {
            notes = [notes];
        }

        notes.forEach((note) => {
            let src = ctx.createBufferSource();
            src.buffer = this.audio;

            if(typeof note === "number") {
                src.loop = true;
            } else {
                src.playbackRate.value = note.fq() / this.note.fq();
            }

            src.connect(ctx.destination);
            src.start(0, 0, duration);
        });
    }
}