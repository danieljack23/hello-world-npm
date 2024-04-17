const helloWorld = require("../dist/helloWorld.cjs");


test("Greet name", () => {
    expect(helloWorld.helloWorld("Daniel")).toBe("Hello world Daniel");
});