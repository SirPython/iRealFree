"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _teoria = require("teoria");

var _teoria2 = _interopRequireDefault(_teoria);

var _Metadata = require("./Metadata");

var _Metadata2 = _interopRequireDefault(_Metadata);

var _Measure = require("./Measure");

var _Measure2 = _interopRequireDefault(_Measure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents a standard jazz leadsheet one might come upon. Includes things
 * such as the chords, the feel, etc.
 */
var Leadsheet = function () {
    /**
     * This should only be called by the static Leadsheet#parse() method.
     *
     * @param {Metadata} metadata The metadata of the chart.
     * @param {Chord[]} chords The measures of the chart.
     */
    function Leadsheet(metadata, measures) {
        _classCallCheck(this, Leadsheet);

        this.metadata = metadata;
        this.measures = measures;
    }

    /**
     * @param {string} chart The description for the leadsheet chart.
     *
     * Format is:
     *
     *     [, separated metadata][| separated measures][, separated chords]
     *
     * Example:
     *
     *     "foo","bar","swing",120:C7|F7|C7|C7,F#o7
     *
     * @returns {Leadsheet} chart The parsed leadsheet chart.
     */


    _createClass(Leadsheet, [{
        key: "transpose",


        /**
         * Transposes all the chords in the chart the distance specified by the
         * interval.
         *
         * @param {string} interval The interval to transpose.
         */
        value: function transpose(interval) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.measures[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var measure = _step.value;
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = measure.chords[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var chord = _step2.value;

                            chord.transpose(_teoria2.default.interval(interval));
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }], [{
        key: "parse",
        value: function parse(chart) {
            var metadata = null,
                measures = null;

            /* Parse the metadata. */
            var _chart$split = chart.split(":");

            var _chart$split2 = _slicedToArray(_chart$split, 2);

            metadata = _chart$split2[0];
            measures = _chart$split2[1];
            metadata = new (Function.prototype.bind.apply(_Metadata2.default, [null].concat(_toConsumableArray(metadata.split(",")))))();

            /* Parse the measures */
            measures = measures.split("|").map( // each measure
            function (measure) {
                return new _Measure2.default(measure.split(",").map( // each chord
                function (chord) {
                    return _teoria2.default.chord(chord);
                } // turn chord into teoria Chord
                ));
            });

            return new Leadsheet(metadata, measures);
        }
    }]);

    return Leadsheet;
}();

exports.default = Leadsheet;