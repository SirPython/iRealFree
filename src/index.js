// TODO: (general todo) For methods/constructors that take things like an interval or a note, allow a string to be passed in that is parsed into the proper object (and vice versa example: sample constrctor);

import Leadsheet from "./leadsheet/Leadsheet";
import Metadata  from "./leadsheet/Metadata";
import Measure   from "./leadsheet/Measure";

import Sampler   from "./sampler/Sampler";
import Sample    from "./sampler/Sample";
import sampler   from "./sampler";

window.Leadsheet = Leadsheet; //for browser-interaction purposes
window.Metadata  = Metadata;
window.Measure   = Measure;
window.Sampler   = Sampler;
window.Sample    = Sample;

window.giantSteps = Leadsheet.parse("Giant Steps,John Coltrane,swing,280:Bmaj7,D7|Gmaj7,Bb7|Ebmaj7|A-7,D7|Gmaj7,Bb7|Ebmaj7,F#7|Bmaj7|F-7,Bb7|Ebmaj7|A-7,D7|Gmaj7|C#-7,F#7|Bmaj7|F-7,Bb7|Ebmaj7|C#-7,F#7");
window.sampler = sampler;