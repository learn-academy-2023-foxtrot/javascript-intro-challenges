//Write a function named marco that returns "polo".
    //function name: marco
    //input: none
    //output: string, "polo"
    //process: self invocation
// const marco = () => {
//     return "polo";
// }
// console.log(marco());
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
    //funciton name: greeting
    //input: string: name
    //output: string: welcome, >persons name here>!
    //process: string interpolation
// const greeting = (personName) => {
//     return `Welcome, ${personName}!`;
// }
// console.log(greeting("Adrian"));
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
    //function name: oddOrEven
    //input: number
    //output: string: "odd" or "even"
    //process: conditional
// const oddOrEven = (num) => {
//     if (num % 2 === 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// }
// console.log(oddOrEven(3));
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
    //  function name: triple
    //  input: number
    //  output: number
    //  process: multiplication
const triple = (num) => {
    return num * 3;
}
console.log(triple(7))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
    // function name: multiply
    // input: two numbers, input1, input2
    // output: number
    // process: multiplication
const multiply = (num1, num2) => {
    return num1 * num2;
}
console.log(multiply (8, 4))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
    //  function name: divisibleBy
    // input: two numbers, input1, input2
    // output: string, "10 is evenly divisible by 5"
    // process: condtitional
const divisibleBy = (input1, input2) => {
    if(input1 % input2 === 0) {
        return `${input1} is evenly divisible by ${input2}`
    } else {
        return "error"
    }
}
console.log(divisibleBy(10, 5))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

