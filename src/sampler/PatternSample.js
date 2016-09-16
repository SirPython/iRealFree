import Sample from "./Sample";

/**
 * Pattern samples are audio samples that represent a specific pattern of
 * notes being played, such as an ostinato or a drum beat.s
 */
export default class PatternSample extends Sample {
    /**
     * Creates a new Sample.
     *
     * @param {string} href The href of the sample.
     * @param {number} length The amount of measures the sample lasts.
     * @param {number} bpm The BPM the sample is at.
     * @param {AudioContext} ctx The audio context.
     */
    constructor(href, length, bpm, ctx) {
        this.length;
        this.bpm = bpm;

        this.audio = null; // _load will assign this
        super._load(href, ctx);
    }

    /**
     * Plays this sample.
     *
     * @param {number} duration How long to play the sample for.
     * @param {number} bpm The BPM to play this at.
     * @param {AudioContext} ctx The audio context to play this on.
     */
    play(duration, bpm, ctx) {
        let src = ctx.createBufferSource(); // should this be refactored?
        src.buffer = this.audio;
        src.loop = true;
        src.playbackRate.value = this.bpm / bpm;
        src.connect(ctx.destination);
        src.start(0, 0, duration);
    }
}