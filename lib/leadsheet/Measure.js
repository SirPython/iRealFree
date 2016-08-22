"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents a single measure in a leadsheet chart. Basically, contains the
 * different chords.
 */
var Measure =
/**
 * @param {teoria Chord[]} chords An array of chords.
 */
function Measure(chords) {
  _classCallCheck(this, Measure);

  this.chords = chords;
};

exports.default = Measure;