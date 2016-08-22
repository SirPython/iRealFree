"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A sampler.
 *
 * Similar to a synthesizer, but rather than making it's own sounds, the
 * sampler and adjusts pre-recorded sound samples (hence the name).
 */
var Sampler = function () {
    /**
     * Makes a new Sampler. Creates an audio context in the meantime.
     *
     * @param {Object} samples Keys are the names of the instruments, values
     *                          are their respective Samples.
     */
    function Sampler(samples) {
        _classCallCheck(this, Sampler);

        this.samples = samples;
        this.ctx = new AudioContext() || new webkitAudioContext() || null;
        this._runningSounds = {};

        /* Load each samples audio buffer. */

        for (var sample in this.samples) {
            this.samples[sample].loadAudio(this.ctx);
        }
    }

    /**
     * Plays the note using the sample from that instrument.
     *
     * @param {teoria Note} note The note to play.
     * @param {string} instrument The instrument sample to use.
     * @param {number} [duration] The duration (ms) to play the note.
     *
     * If duration is left out, the unique ID returned can be passed into stop()
     * to have the note stop playing.
     *
     * @returns {Symbol} The unique ID to the sound being played for stop()
     */


    _createClass(Sampler, [{
        key: "play",
        value: function play(note, instrument, duration) {
            var src = this.ctx.createBufferSource();
            src.buffer = this.samples[instrument].audio;
            src.loop = true;

            // TODO: modify playback speed here

            src.connect(this.ctx.destination);
            if (duration) {
                src.start(0, 0, duration);
            } else {
                src.start();

                var symbol = Symbol(note + " " + instrument + " " + duration);
                this._runningSounds[symbol] = src;
                return symbol; // the unique id
            }
        }

        /**
         * Stops a running sound being played. If play() is called without a
         * duration parameter, an ID is returned that can be given to this
         * to stop the sound from playing.
         *
         * @param {Symbol} id The id of the running sound.
         */

    }, {
        key: "stop",
        value: function stop(id) {
            if (!(id in this._runningSounds)) {
                throw new Error("ID not found in running sounds.");
            }

            this._runningSounds[id].stop();
            delete this._runningSounds[id];
        }
    }]);

    return Sampler;
}();

exports.default = Sampler;