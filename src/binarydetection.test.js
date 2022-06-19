const detectError = require("./binarydetection.js");

test("error is true if a number is not binary", () => {
    expect(detectError("87")).toBe(true);
    expect(detectError("01001")).toBe(false);
});
