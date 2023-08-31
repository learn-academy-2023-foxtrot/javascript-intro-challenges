// Create a for loop that logs each number from 1 - 20
for(let i = 1; i <= 20; i++) {
    console.log(i)
}
//Create a for loop that logs every other number from 1 - 20
//1 3 5 7 9 11 13 15 17 19
for(let i = 1; i <= 20; i += 2) {
    console.log(i)
}
//Create a for loop that logs every number from 1 - 20 tripled.
for(let i = 1; i <= 20; i++) {
    console.log(i * 3)
}
//Create a for loop that logs each even number 1-20, and in the place of every odd number, returns the word ODD
for(let i = 1; i <= 20; i++) {
    if(i % 2 !== 0){
    console.log("odd");
    } else{
        console.log(i);
    }
}
const nums = [3, 57, -9, 20, 67]
var largestNum = nums[0]
for(let i = 0; i < nums.length; i++){
    if(nums[i] > largestNum){
        largestNum = nums[i]
    }
}
console.log("Largest Number " + largestNum)
//Create the code that will log the smallest number from the array
var smallestNum = 0
for(let i = 0; i < nums.length; i++){
    if(nums[i] < smallestNum){
        smallestNum = nums[i]
    }
}
console.log("Smallest Number " + smallestNum)
//
// create the code that will log the remainder of each number when divided by 2.
for(let i = 0; i < nums.length; i++){
    console.log(nums[i] % 2)
}
const myString = "learn student"

var letter = 0

for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "e") {
        letter++ 
    }
}
console.log(letter)
var otherChar = " "

for (let i = 0; i < myString.length; i+=2) {
    otherChar += myString[i]
}
console.log(`${otherChar}`)

// STRETCH GOALS
for (let i = 5; i <= 15; i++) {
    if ( i % 2 !== 0) {
        console.log(`${i} is odd`)
    }
    else {
        console.log(`${i} is even`)
    }
}

for (let i = 1; i <= 100; i++) {
     if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZ BUZZ")
    } 
    else if (i % 3 === 0)  {
        console.log("FIZZ")
    } 
    else if (i % 5 === 0 ) {
        console.log("BUZZ")
    } 
    else {
        console.log(i)
    }
}