const {FizzBuzz} = require('../spec.helper.js')

describe('Fizz Buzz', () => {
    let fizzBuzz = new FizzBuzz

    it("returns a number if no game rules are met", () => {
        expect(fizzBuzz.check(1)).to.eql(1)
    })

    it("returns Buzz if number is divisible by 5", () => {
        expect(fizzBuzz.check(5)).to.eql("Buzz")
    })

})

