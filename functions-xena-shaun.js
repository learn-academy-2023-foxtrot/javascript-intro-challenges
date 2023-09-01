// Write a function named marco that returns "polo".
//pseudo: create a function named marco that returns "polo".
//input: a function named marco 
//output: polo string
//process: self invoking function
const marco = () => {
    return "polo"
}
console.log(marco())

 // Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
//pseudo: create a function named greeting and it returns Welcome, <person's name>.
//input: a function named greeting
//output: Welcome, <person's name>
//process: self invoking function
 const greeting = (name) => {
    return `Welcome, ${name}.`
}
console.log(greeting("Shaun"))


// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
//pseudo: create a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
//input: a function named oddOrEven
//output: <number> is odd. <number> is even.
//process: function expression with an input
const oddOrEven = (number) => {
    if (number % 2 === 1) {
        return (`${number} is odd.`)
      } else  {
        return (`${number} is even.`)
      } 
}   
console.log(oddOrEven(1))
console.log(oddOrEven(2))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
//pseudo: create a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
//input: a function named triple
//output: <number> * 3.
//process: function expression with an input

const triple = (number) => {
  return (number * 3)
}
console.log(triple(3))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
//pseudo: create a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
//input: a function named multiply
//output: <number1> * <number2>.
//process: function expression with multiple parameters

const multiply = (number1, number2) => {
  return (number1 * number2)
}
console.log(multiply(5, 6))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
//pseudo: Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
//input: a function named divisibleBy
//output: "<number1> is evenly divisible by 5" .
//process: function expression with multiple parameters

const divisibleBy = (number1, number2) => {
  if (number1 % number2 === 0) {
    return `${number1} is divisible by ${number2}.`
  }
  else {
    return `${number1} is NOT divisible by ${number2}.`
  }
}
console.log(divisibleBy(100, 25))
console.log(divisibleBy(100, 26))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.