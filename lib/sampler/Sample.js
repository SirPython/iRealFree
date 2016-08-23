"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("regenerator-runtime/runtime");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents a single sample to be used in a sampler.
 */
var Sample = function () {
    /**
     * Creates a new Sample.
     *
     * @param {string} href A href of the sample.
     * @param {teoria Note} note The note being played in the audio sample.
     */
    function Sample(href, note) {
        _classCallCheck(this, Sample);

        this.href = href;
        this.note = note;

        this.audio = null; // loadAudioBuffer fills this.
    }

    /**
     * Loads the audio file into the audio property.
     *
     * Steps:
     * 1. Fetch the audio file.
     * 2. Turn it into an array buffer (this returns a promise - yay)
     * 3. Decode the array buffer into an audio buffer (also a promise - yayx2)
     *
     * Promise galore.
     *
     * @param {AudioContext} ctx The audio context of the sampler.
     */


    _createClass(Sample, [{
        key: "loadAudio",
        value: function loadAudio(ctx) {
            var _this = this;

            return regeneratorRuntime.async(function loadAudio$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return regeneratorRuntime.awrap(new Promise(function () {
                                fetch(_this.href).then(function (response) {
                                    return response.arrayBuffer().then(function (buffer) {
                                        return ctx.decodeAudioData(buffer).then(function (audio) {
                                            return _this.audio = audio;
                                        });
                                    });
                                });
                            }));

                        case 2:
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