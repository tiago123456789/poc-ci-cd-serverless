const { expect } = require("@jest/globals")
const calculator = require("../src/services/calculator")

describe("test here", () => {

    it("Shoulder return 4 to method sum 2 + 2", () => {
        expect(4).toBe(calculator.sum(2, 2))
    })
})