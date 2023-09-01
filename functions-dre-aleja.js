// Functions challenges 9/1/23
// Write a function named marco that returns "polo".
// name: marco 
// input: none
// output: string, "polo"
// process: self-invocation function 
    const marco = () => {
        return "polo"
    }
    console.log(marco())
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// name: greeting
// input: name 
// output: string, "Welcome, <person's name here>!"
// process: string interpolation 
    const greeting = (name) => {
        return `Welcome, ${name}!`
    }
    console.log(greeting("Dre"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// name: oddOrEven 
// input: a number 
// output: a string, "<this number> is odd/even"
// process: string interpolation 
    const oddOrEven = (number) => {
        if (number % 2 === 0) {
            return `${number} is even`
        } else if (number % 2 !== 0) {
            return `${number} is odd`
        }
    }
    console.log(oddOrEven(8))
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// name: triple
// input: a number
// output: a number
// process: a number will be multiplied by 3
    const triple = (number) => {
        return number * 3
    }
    console.log(triple(69))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// name: multiply
// input: numberOne and numberTwo
// output: a number 
// process: the multiplication of two numbers 
    const multiply = (numberOne, numberTwo) => {
        return numberOne * numberTwo 
    }
    console.log(multiply(69, 420))