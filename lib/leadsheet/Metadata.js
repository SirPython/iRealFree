"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents the metadata of a leadsheet (title, composer, feel, etc)
 */
var Metadata =
/**
 * @param {string} title The title of the chart.
 * @param {string} composer The composer of the chart.
 * @param {string} feel The feel of the chart (swing, up, bossa, funk)
 * @param {string} bpm The BPM that the chart should be played.
 * @param {string} meter The meter of the chart (as in, 4/4, 5/4, etc).
 * @param {string} phrase The number of bars in a phrase.
 */
function Metadata(title, composer, feel, bpm, meter, phrase) {
  _classCallCheck(this, Metadata);

  this.title = title;
  this.composer = composer;
  this.feel = feel;
  this.bpm = parseInt(bpm, 10);
  this.meter = meter;
  this.phrase = parseInt(phrase, 10);
};

exports.default = Metadata;