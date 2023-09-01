// Write a function named marco that returns "polo".
const marco =()=>{
    return "polo"
}
    console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting=(name)=>{
    return `Welcome, ${name}!`
}
    console.log(greeting("ilene"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven=(evenNumber)=>{
    if (evenNumber % 2 === 0)
    {return "even"}
    else {return "odd"}
}
    console.log(oddOrEven(23))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple=(numbers)=>{
    return (numbers * 3)
}
    console.log(triple(12))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply=(one, two)=>{
    return (one * two)
}
    console.log(multiply(34, 45))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (numOne, numTwo) => {
    if(numOne%2 === 0){
    return `${numOne} is evenly divisible by ${numTwo}`
    } 
}
    console.log(divisibleBy(10, 5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (numScore) => {
    if(numScore >= 90){
        return "A"
    } else if(numScore >= 80){
        return "B"
    } else if(numScore >= 70){
        return "C"
    } else if(numScore >= 60){
        return "D"
    } else {
        return "F"
    }
}    
    console.log(assignGrade(75))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (stringOne, ) => {
    
}

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.