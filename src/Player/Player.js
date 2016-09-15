import Metronome from "../metronome/Metronome.js";

/**
 * A class for controlling the playback of leadsheets
 */
export default class Player {
    constructor(leadsheet, samples) {
        this.leadsheet = leadsheet;
        this.samples = samples;
    }

    /**
     * Plays the backgrounds for the leadsheet.
     *
     * Normally I would say just to move this to it's own function, but I feel
     * there will need to be a lot of controls for playback, so they should
     * all be handy-dandy methods here.
     */
    play() {
        const {metadata, measures} = this.leadsheet;
        const samples = this.samples;

        console.log('start');
        new Metronome(metadata.meter, metadata.bpm).start(
            (time) => {
                console.log("tick", time, time.mesaure, measures[time.measure]);
                const chord = measures[time.measure].getChord(time.beat); // TODO: .getChord() should get the chord for that beat. If there is no chord for that beat, it should retreive the last chord.


                samples.bass.play(chord.notes()[time.beat], metadata.bpm / 1000, ctx);
                if(time.beat === 0) {
                    /* bpm * meter gets how long a whole note is. */
                    samples.swing.play(null, metadata.bpm * metadata.meter / 1000, ctx);
                    samples.piano.play(chord.notes(), metadata.bpm * metadata.meter / 1000, ctx);
                }
            }
        );
    }

    playFrom(measure) {

    }

    stop() {

    }
}