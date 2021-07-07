# Objectives

## Conditions
Return:

* “fizz” if the number is divisible by 3

* “buzz” if the number is divisible by 5

* “fizzbuzz” if the number is divisible by 15

* the same number if no other requirement is fulfilled

## Learning objectives from Craft Academy:

* Ability to explain concepts

* Practice JS

* Combine both feature and unit test and understand their difference

* Read and understand documentation

* Debug and find errors

* Find and remove unneccesary code and files.

<br>

# Deployment

Check out the deployed site [here](https://zanenkn.github.io/fizzbuzz_js/).

<br>

# Running the tests

## Prerequisites
To run the tests, you will need Node.js and NPM installed, here is [how](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

You will also need [Mocha](https://www.npmjs.com/package/mocha), [Chai](https://www.npmjs.com/package/chai) and [Puppeteer](https://www.npmjs.com/package/puppeteer) installed and set up. The easy way to do it is installing and setting up [End-To-End Testing Training Wheels](https://www.npmjs.com/package/e2e_training_wheels):

In this project folder run:
```
$ npm i e2e_training_wheels --save-dev
```

Once the package is installed, run the following script in your terminal:
```
$ node ./node_modules/e2e_training_wheels/dist/install.js
```
And run the following command in the terminal:
```
$ npm link
```

Good to go!

## Running the tests

To run the feature tests:
```
$ npm run features
```
To run unit tests:
```
$ npm run specs
```
To run both feature and unit tests: 
```
npm test
```
<br>

# Questions from Craft Academy

### Question 1. 

To the best of your knowledge please explain what the following lines of code do:

```js
let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
```

### Answer:

`fs` (File System) is a Node module that allows the application work with files on the computer. `fs.readFileSync` reads file synchronously - it stops everything else from executing until the file is read. So the `let fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js')` line reads the `fizz-buzz.js` and does nothing else until it is read.

The `eval()` evaluates JavaScript code represented as a string.

<br>

### Question 2. 

To the best of your knowledge please explain why we are placing the `let fizzBuzz = new FizzBuzz` outside the `it` block?

### Answer:
Because we want all the `it` blocks to be able to access the `fizzBuzz` variable. If it was placed inside of one of the `it` blocks, the `fizzBuzz` then would become a local variable to the `it` block it resides in and other `it` blocks wouldnt be able to call on it. So in order to not repeat ourselves, we place it in the same scope where all the `it` blocks are.

<br>

### Question 3. 

To the best of your knowledge please explain the difference between using `===` and `==` in JS?

### Answer

`===` is a strict comparison that only returns true if both operands are of the same datatype (and content matches). For example, `34 === 34` returns `true` (compares number with number), but `"34" === 34` returns `false` (compares string with a number). `==` converts the operands to the same datatype before the comparing, therefore both `34 == 34` and `"34" == 34` return `true`.

<br>

### Question 4. 
To the best of your knowledge please explain why we are moving `(number % 5 === 0)` to the top?

### Answer

Tbh, it's the `(number % 15 === 0)` that should be on the top of the `if` block. That is because the conditional (here) is executed synchronously - if we had a `(number % 5 === 0)` as a first we'd get a 'Buzz' instead of a 'FizzBuzz' for all the operands divisible by 15.

<br>

### Question 5.
To the best of your knowledge please explain the difference between feature and unit test.

### Answer
A unit test tests logic, a feature test tests the user experience.

<br>

### Question 6. 
To the best of your knowledge please explain what this following code does:
```js
describe('User can input a value and get FizzBuzz results', () => {
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await  browser.page.reload();
    })

    after(async ()=> {
        await  browser.close();
    })
})
```

### Answer

This means that before the scenario ('User can input a value and get FizzBuzz results') we wait for the Chromium to start and visit the page, then before each feature test the page gets reloaded and, after the test is done with the scenario, Chromium closes.

<br>

### Question 7. 
To the best of your knowledge please explain what expectations in the context of testing are.

### Answer
Expectations are the requirements that has to be met, in order for the test to pass.

<br>

### Question 8.
To the best of your knowledge please write a line to line explanation of what is happening in this code:
```js
<script src="./js/fizz-buzz.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            let button = document.getElementById('button')
            let displayDiv = document.getElementById('display_answer')
            button.addEventListener('click', () =>{
                let value = document.getElementById('value').value
                let fizzBuzz = new FizzBuzz
                let result = fizzBuzz.check(value)
                displayDiv.innerHTML = result;
            })
        })
    </script>
```

### Answer
First `fizz-buzz.js` is loaded. Then as soon as DOM content is loaded, we wait for the user to click on the button. We know what a button is, because we get it by its id (assigned in HTML). Same for the `div` space where the message will be displayed. So, when the user clicks on the button, we check out what has been put into the value field, send it into the FizzBuzz function and display a message that it returns. 

<br>

### Question 9. 
To the best of your knowledge please explain what a CDN (Content Delivery Network) is?

### Answer
CDN is group of servers in different locations. The main principle is that same data is stored in many servers and user receives the content from a server that is located geographically nearest. 

<br>

# Built with

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[Tailwind](https://tailwindcss.com/docs/what-is-tailwind/) - A utility-first CSS framework for rapidly building custom user interfaces.

<br>

# Tested with

[Mocha](https://www.npmjs.com/package/mocha) - Simple, flexible, fun JavaScript test framework for Node.js & The Browser. 

[Chai](https://www.npmjs.com/package/chai) - BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework. 

[Puppeteer](https://www.npmjs.com/package/puppeteer) - Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. 

<br>

# Author

**Zane Neikena** - [zanenkn](https://github.com/zanenkn)

<br>

# License

This project utilizes the [MIT open-source license](https://opensource.org/licenses/MIT).

<br>

# Acknowledgments

Kudos to [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) for the README template 


