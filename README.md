# Objectives

### Learning objectives from Craft Academy:

* Ability to explain concepts

* Practice JS

* Combine both feature and unit test and understand their difference

* Read and understand documentation

* Debug and find errors

* Find and remove unneccesary code and files.

# Questions

### Question 1. 

To the best of your knowledge please explain what the following lines of code do:

```js
let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
```

### Answer:

`fs` (File System) is a Node module that allows the application work with files on the computer. `fs.readFileSync` reads file synchronously - it stops everything else from executing until the file is read. So the `let fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js')` line reads the `fizz-buzz.js` and does nothing else until it is read.

The `eval()` evaluates JavaScript code represented as a string.


### Question 2. 

To the best of your knowledge please explain why we are placing the `let fizzBuzz = new FizzBuzz` outside the `it` block?

### Answer:
Because we want all the `it` blocks to be able to access the `fizzBuzz` variable. If it was placed inside of one of the `it` blocks, the `fizzBuzz` then would become a local variable to the `it` block it resides in and other `it` blocks wouldnt be able to call on it. So in order to not repeat ourselves, we place it in the same scope where all the `it` blocks are.

### Question 3. 

To the best of your knowledge please explain the difference between using `===` and `==` in JS?

### Answer

`===` is a strict comparison that only returns true if both operands are of the same datatype (and content matches). For example, `34 === 34` returns `true` (compares number with number), but `"34" === 34` returns `false` (compares string with a number). `==` converts the operands to the same datatype before the comparing, therefore both `34 == 34` and `"34" == 34` return `true`.


### Question 4. 
To the best of your knowledge please explain why we are moving `(number % 5 === 0)` to the top?

### Answer

Tbh, it's the `(number % 15 === 0)` that should be on the top of the `if` block. That is because the conditional (here) is executed synchronously - if we had a `(number % 5 === 0)` as a first we'd get a 'Buzz' instead of a 'FizzBuzz' for all the operands divisible by 15.

### Question 5.
To the best of your knowledge please explain the difference between feature and unit test.

### Answer
A unit test tests logic, a feature test tests the user experience.



