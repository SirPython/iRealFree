"use strict";

var _teoria = require("teoria");

var _teoria2 = _interopRequireDefault(_teoria);

var _Leadsheet = require("./leadsheet/Leadsheet");

var _Leadsheet2 = _interopRequireDefault(_Leadsheet);

var _Metadata = require("./leadsheet/Metadata");

var _Metadata2 = _interopRequireDefault(_Metadata);

var _Measure = require("./leadsheet/Measure");

var _Measure2 = _interopRequireDefault(_Measure);

var _Sampler = require("./sampler/Sampler");

var _Sampler2 = _interopRequireDefault(_Sampler);

var _Sample = require("./sampler/Sample");

var _Sample2 = _interopRequireDefault(_Sample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: (general todo) For methods/constructors that take things like an interval or a note, allow a string to be passed in that is parsed into the proper object (and vice versa example: sample constrctor);

window.teoria = _teoria2.default; //for browser-interaction purposes
window.Leadsheet = _Leadsheet2.default;
window.Metadata = _Metadata2.default;
window.Measure = _Measure2.default;
window.Sampler = _Sampler2.default;
window.Sample = _Sample2.default;

var giantSteps = _Leadsheet2.default.parse("Giant Steps,John Coltrane,swing,280:Bmaj7,D7|Gmaj7,Bb7|Ebmaj7|A-7,D7|Gmaj7,Bb7|Ebmaj7,F#7|Bmaj7|F-7,Bb7|Ebmaj7|A-7,D7|Gmaj7|C#-7,F#7|Bmaj7|F-7,Bb7|Ebmaj7|C#-7,F#7");
var sampler = new _Sampler2.default({
    piano: new _Sample2.default("samples/piano.wav", _teoria2.default.note("c4")), // TODO: Get better sample.
    bass: new _Sample2.default("samples/piano.wav", _teoria2.default.note("c4")),
    drums: new _Sample2.default("samples/piano.wav", _teoria2.default.note("c4"))
});

window.giantSteps = giantSteps;
window.sampler = sampler;