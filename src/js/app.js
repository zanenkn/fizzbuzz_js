document.addEventListener('DOMContentLoaded', () => {
    
    let button = document.getElementById("button")
    let display = document.getElementById("display_value")
    button.addEventListener('click', event => {
        let value = document.getElementById("value").value
            let fizzBuzz = new FizzBuzz
            let result = fizzBuzz.check(value)
            display.innerHTML = result; 
    })
})