// TODO: (general todo) For methods/constructors that take things like an interval or a note, allow a string to be passed in that is parsed into the proper object (and vice versa example: sample constrctor);

import teoria from "teoria";

import Leadsheet from "./leadsheet/Leadsheet";
import Metadata  from "./leadsheet/Metadata";
import Measure   from "./leadsheet/Measure";
import Metronome from "./metronome/Metronome";
import Player    from "./player/Player";
import Sample    from "./sampler/Sample";

window.teoria    = teoria; //for browser-interaction purposes
window.Leadsheet = Leadsheet;
window.Metadata  = Metadata;
window.Measure   = Measure;
window.Sample    = Sample;

let blues = Leadsheet.parse("Blues,SirPython,swing,120,4/4,1:C7|F7|C7|C7|F7|F#o|C7|A7|D-7|G7|C7,A7|D-7,G7");

let ctx = new AudioContext();

let samples = {
    piano: new Sample("samples/piano.wav", teoria.note("c4"), ctx),
    bass: new Sample("samples/ebass.wav", teoria.note("a2"), ctx),
    swing: new Sample("samples/swing.wav", 1, ctx),
    swing_fill: new Sample("samples/swing.wav", 1, ctx)
}

let player = new Player(blues, samples);

window.blues = blues;
window.ctx = ctx;
window.samples = samples;
window.player = player;