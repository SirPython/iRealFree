"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("regenerator-runtime/runtime");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Utility method: Converts a base64 string into an ArrayBuffer.
 *
 * @param {string} base64 A base64-encoded string.
 * @param {string} mime The mime type of the data in the base64 string.
 *
 * @returns {ArrayBuffer} An array buffer.
 *
 * It's so beautiful.
 */
var base64ToArrayBuffer = function base64ToArrayBuffer(base64, mime) {
    //new TextEncoder("utf8").encode(atob(base64)).buffer;
    var fr = new FileReader();
    fr.readAsArrayBuffer(new Blob([atob(base64)], { type: mime }));
    return new Promise(function (resolve) {
        return fr.onloadend = function () {
            return resolve(fr.result);
        };
    });
};

/**
 * Represents a single sample to be used in a sampler.
 */

var Sample = function () {
    /**
     * Creates a new Sample.
     *
     * @param {string} sampleData A base64-encoded audio sample.
     * @param {teoria Note} note The note being played in the audio sample.
     */
    function Sample(sampleData, note) {
        _classCallCheck(this, Sample);

        this.sampleData = sampleData;
        this.note = note;

        this.audio = null; // loadAudioBuffer fills this.
    }

    /**
     * Sets the audio property to a playable audio buffer.
     *
     * @param {AudioContext} ctx The audio context of the sampler.
     */


    _createClass(Sample, [{
        key: "loadAudio",
        value: function loadAudio(ctx) {
            var buffer, audio;
            return regeneratorRuntime.async(function loadAudio$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return regeneratorRuntime.awrap(base64ToArrayBuffer(this.sampleData, "audio/x-wav"));

                        case 2:
                            buffer = _context.sent;

                            debugger;
                            _context.next = 6;
                            return regeneratorRuntime.awrap(ctx.decodeAudioData(buffer));

                        case 6:
                            audio = _context.sent;

                            this.audio = audio;

                        case 8:
                        case "end":
                            return _context.stop();
                    }
                }
            }, null, this);
        }
    }]);

    return Sample;
}();

exports.default = Sample;