// TODO: (general todo) For methods/constructors that take things like an interval or a note, allow a string to be passed in that is parsed into the proper object (and vice versa example: sample constrctor);

import teoria from "teoria";

import Leadsheet from "./leadsheet/Leadsheet";
import Metadata  from "./leadsheet/Metadata";
import Measure   from "./leadsheet/Measure";

import Sample    from "./sampler/Sample";

window.teoria    = teoria; //for browser-interaction purposes
window.Leadsheet = Leadsheet;
window.Metadata  = Metadata;
window.Measure   = Measure;
window.Sample    = Sample;

let giantSteps = Leadsheet.parse("Giant Steps,John Coltrane,swing,280:Bmaj7,D7|Gmaj7,Bb7|Ebmaj7|A-7,D7|Gmaj7,Bb7|Ebmaj7,F#7|Bmaj7|F-7,Bb7|Ebmaj7|A-7,D7|Gmaj7|C#-7,F#7|Bmaj7|F-7,Bb7|Ebmaj7|C#-7,F#7");

let ctx = new AudioContext();

let samples = {
    piano: new Sample("samples/sine.wav", teoria.note("c4"), ctx),
    bass: new Sample("samples/sine.wav", teoria.note("c4"), ctx),
    swing: new Sample("samples/swing.wav", 1, ctx),
    swing_fill: new Sample("samples/swing.wav", 1, ctx)
};

/*
let mySample = new Sample(Sample.loadAudio(href, ctx), teoria.note("c4"));
mySample.play(ctx, teoria.note("c5"), 5);
*/

window.giantSteps = giantSteps;
window.ctx = ctx;
window.samples = samples;