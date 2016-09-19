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
        let lastChord = measures[0].chords[0];

        const metronome = new Metronome(metadata.meter, metadata.bps);
        metronome.start(
            (time) => {
                if(!measures[time.measure]) {
                    metronome.stop();
                    return;
                }
                const chord = measures[time.measure].getChord(time.beat);

                samples.bass.play(
                    chord.notes()[time.beat], // TODO should start at beginning of chord on chord change (for two chords in measure, it starts on 5 and 7 of second chord)
                    metadata.bps,
                    ctx
                );

                /* If there was a chord change or a new mesaure started. */
                if(lastChord.name !== chord.name || time.beat === 0) {
                    samples.piano.play(
                        chord.notes(),
                        metadata.bps * metadata.meter,
                        ctx
                    );
                }

                if(time.beat === 0) { // TODO doesn't support multi measure patterns
                    /* bpm * meter gets how long a whole note is. */
                    samples.swing.play(
                        metadata.bps * metadata.meter,
                        metadata.bps,
                        ctx
                    );
                }

                lastChord = chord;
            }
        );
    }

    playFrom(measure) {

    }

    stop() {

    }
}