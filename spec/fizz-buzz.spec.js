const {FizzBuzz} = require('../spec.helper.js')

describe('Fizz Buzz', () => {
    let fizzBuzz = new FizzBuzz

    it("returns a number if no game rules are met", () => {
        expect(fizzBuzz.check(1)).to.include(1)
    })

    it("returns Buzz if number is divisible by 5", () => {
        expect(fizzBuzz.check(5)).to.include("Buzz!")
    })

    it ("returns Fizz if number is divisible by 3", () => {
        expect(fizzBuzz.check(3)).to.include("Fizz!")
    })

    it ("returns FizzBuzz if number is divisible by 15", () => {
        expect(fizzBuzz.check(15)).to.include("FizzBuzz!")
    })

    it ("returns No Buzz if user hits Check button without entering anything", () => {
        expect(fizzBuzz.check("")).to.include("No Buzz!")
    })

    it ("returns No Buzz if user enters 0", () => {
        expect(fizzBuzz.check(0)).to.include("No Buzz!")
    })

})

