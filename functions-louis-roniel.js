// Write a function named marco that returns "polo".

// puesdocode
// function Name :string  marco
// output : string polo
// process : N/A

 const marco = () => {
    return "Polo"
 }
console.log(marco())
// output: polo

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// puesdocode
// function Name :var  greeting
// input : string johndoe
// output : string welcome
// process : string interpilation

const greeting = (name) => {
    return`welcome ${name}`
}
console.log(greeting("john doe"))
// output : welcome john doe

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// puesdocode
// function Name : oddOrEven 
// Input : number 
// output : string odd, even
// process : string interpolation

const oddOrEven = (num) => {
    if( num % 2 !== 0) {
    return`odd ${num}`
    } 
    else {
        return`even ${num}`
    }
    
}
console.log(oddOrEven(16))
// Output : 16 even, 9 odd etc...

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// puesdocode
// function Name : triple
// Input : number
// output : number mutliplied by 3
// process : multiplication

const triple = (num) => {
    return num * 3
}
console.log(triple(9))
// output : 3 = 9 etc...

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// puesdocode
// function Name : multiply
// Input : numbers 
// output : numbers * together
// process : multiplication

const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(13,2))
// output : 2 * 3 = 6 etc...

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// puesdocode
// function Name : divisibleBy
// Input : numbers 
// output : numbers divided by each other
// process : string interpolation

const divisibleBy = (num1, num2) => {
    if (num1 % num2 === 0) {
    return`${num1} is even divisible by ${num2}`        
    }
    else {
        return`${num1} is not even divisible by ${num2}` 
    }
}
console.log(divisibleBy(10,5))
// output : 10 is evenly divisable by 5

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters. //