import assert  from "assert";
import Sample  from "./Sample";
import Sampler from "./Sampler";

describe("Sample", function() {
    describe(".loadSample()", function() {
        it("should load the sample into an ArrayBuffer", function() {
            var sampler = new Sampler({});
            var buffer = Sample.loadSample("../Piano Flat C.m4a", Sampler.ctx)
                .then(
                    sample => assert(sample);
                );
        });
    });
})