function FizzBuzz()  {
    this.check = (number) => {
        if (number % 5 === 0){
            return "Buzz";
        } else {
            return number
        }
    }
}