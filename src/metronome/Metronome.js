export default class Metronome {
	/**
     * A metronome.
     *
     * @param {number} beats Beats per measure.
     * @param {number} bpm   Beats per minute.
     */
    constructor(beats, bpm) {
    	this.beats = beats;
        this.bpm = bpm;

        this.interval = null;
    }

    /**
     * Starts the metronome.
     *
     * @param {function} cb Callback called every tick.
     *
     * An object containing the current beat (0-index) of the current measure
     * along with the current measure (0-index) is passed to the callback.
     */
    start(cb) {
        let beat = -1;
        let measure = 0;

        this.interval = setInterval(() => {
            cb({
                beat: ++beat % this.beats,
                measure: Math.floor(beat / this.beats)
            });
        }, this.bpm);
    }

    /**
     * Stops the metronome.
     */
    stop() {
    	clearInterval(this.interval);
    }
}