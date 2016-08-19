import Leadsheet from "./leadsheet/Leadsheet";
import Metadata  from "./leadsheet/Metadata";
import Measure   from "./leadsheet/Measure";

import Sampler   from "./sampler/Sampler";
import Sample    from "./sampler/Sample";
import samples   from "./samples";

window.Leadsheet = Leadsheet; //for browser-interaction purposes
window.Metadata  = Metadata;
window.Measure   = Measure;
window.Sampler   = Sampler;
window.Sample    = Sample;

window.giantSteps = Leadsheet.parse("Giant Steps,John Coltrane,swing,280:Bmaj7,D7|Gmaj7,Bb7|Ebmaj7|A-7,D7|Gmaj7,Bb7|Ebmaj7,F#7|Bmaj7|F-7,Bb7|Ebmaj7|A-7,D7|Gmaj7|C#-7,F#7|Bmaj7|F-7,Bb7|Ebmaj7|C#-7,F#7");
window.samples = samples;