// TODO: (general todo) For methods/constructors that take things like an interval or a note, allow a string to be passed in that is parsed into the proper object (and vice versa example: sample constrctor);

import teoria from "teoria";

import Leadsheet from "./leadsheet/Leadsheet";
import Metadata  from "./leadsheet/Metadata";
import Measure   from "./leadsheet/Measure";

import Sampler   from "./sampler/Sampler";
import Sample    from "./sampler/Sample";

window.Leadsheet = Leadsheet; //for browser-interaction purposes
window.Metadata  = Metadata;
window.Measure   = Measure;
window.Sampler   = Sampler;
window.Sample    = Sample;

let giantSteps = Leadsheet.parse("Giant Steps,John Coltrane,swing,280:Bmaj7,D7|Gmaj7,Bb7|Ebmaj7|A-7,D7|Gmaj7,Bb7|Ebmaj7,F#7|Bmaj7|F-7,Bb7|Ebmaj7|A-7,D7|Gmaj7|C#-7,F#7|Bmaj7|F-7,Bb7|Ebmaj7|C#-7,F#7");
let sampler = new Sampler({
    piano: new Sample("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", teoria.note("c4")),
    bass: new Sample("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", teoria.note("c4")),
    drums: new Sample("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", teoria.note("c4")) // don't know how my sampler is going to handle drums, yet
});

window.giantSteps = giantSteps;
window.sampler = sampler;