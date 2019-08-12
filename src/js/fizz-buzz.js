function FizzBuzz()  {
    this.check = (number) => {
        if (number === "0" || number == "") {
            return `No number no party, friend! <br> <h1 class="text-xl font-semibold">No Buzz!</h1>`
        } else if (number % 15 === 0){
            return `You entered ${number}. <br> <h1 class="text-xl font-semibold">FizzBuzz!</h1>`;
        } else if (number % 5 === 0){
            return `You entered ${number}. <br> <h1 class="text-xl font-semibold">Buzz!</h1>`;
        } else if (number % 3 === 0){
            return `You entered ${number}. <br> <h1 class="text-xl font-semibold">Fizz!</h1>`;
        } else {
            return `You entered ${number}.`
        }
    }
}



