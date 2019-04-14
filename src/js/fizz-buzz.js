function FizzBuzz()  {
    this.check = (number) => {
        if (number === "0" || number == "") {
            return `No number no party, friend! <br> <h1>No Buzz!</h1>`
        } else if (number % 15 === 0){
            return `You entered ${number}. <br> <h1>FizzBuzz!</h1>`;
        } else if (number % 5 === 0){
            return `You entered ${number}. <br> <h1>Buzz!</h1>`;
        } else if (number % 3 === 0){
            return `You entered ${number}. <br> <h1>Fizz!</h1>`;
        } else {
            return `You entered ${number}.`
        }
    }
}



