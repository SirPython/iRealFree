// TODO: (general todo) For methods/constructors that take things like an interval or a note, allow a string to be passed in that is parsed into the proper object (and vice versa example: sample constrctor);

import teoria from "teoria";

import Leadsheet from "./leadsheet/Leadsheet";
import Metadata  from "./leadsheet/Metadata";
import Measure   from "./leadsheet/Measure";

import Sampler   from "./sampler/Sampler";
import Sample    from "./sampler/Sample";

window.teoria    = teoria; //for browser-interaction purposes
window.Leadsheet = Leadsheet;
window.Metadata  = Metadata;
window.Measure   = Measure;
window.Sampler   = Sampler;
window.Sample    = Sample;

let giantSteps = Leadsheet.parse("Giant Steps,John Coltrane,swing,280:Bmaj7,D7|Gmaj7,Bb7|Ebmaj7|A-7,D7|Gmaj7,Bb7|Ebmaj7,F#7|Bmaj7|F-7,Bb7|Ebmaj7|A-7,D7|Gmaj7|C#-7,F#7|Bmaj7|F-7,Bb7|Ebmaj7|C#-7,F#7");
let sampler = new Sampler({
    piano: new Sample("samples/sine.wav", teoria.note("c4")),
    bass: new Sample("samples/sine.wav", teoria.note("c4")),
    drums: new Sample("samples/sine.wav", teoria.note("c4"))
});

window.giantSteps = giantSteps;
window.sampler = sampler;