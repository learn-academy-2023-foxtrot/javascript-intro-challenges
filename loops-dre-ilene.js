// Loops Challenges 8/31
// Create a for loop that logs each number from 1 - 20.
for (let index = 1; index < 21; index++) {
    console.log("1-20", index)
}
// Create a for loop that logs every other number from 1 - 20.
for (let index = 0; index < 21; index++) {
    if (index % 2 !== 0) {
        console.log("every other", `${index}`)
    }   
}
// Create a for loop that logs the result of each number from 1 - 20 tripled.
for (let index = 1; index < 21; index++) {
    console.log("1-20 tripled", index*3)
}
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
for (let index = 0; index < 21; index++) {
    if (index % 2 !== 0 ) {
        console.log("ODD")
    } else {
        console.log(index)
    }
}

const nums = [3, 57, -9, 20, 67]
// Create the code that will log the largest number from the array.
// console.log(nums.sort()) //Values from least to greatest
//console.log(nums.pop()) //Removing last value of array
// Create the code that will log the smallest number from the array.
//console.log(nums.sort().reverse().pop())
// Create the code that will log the remainder of each number when divided by 2.
console.log(nums)
//console.log(nums.push(-9))
//console.log(nums.unshift(67))
//var newNums = 
console.log("Nums Array", nums)
for(let i = 0; i < nums.length; i++){
    console.log("Remainders", nums[i] % 2)
}
// Expected output: 1, 1, -1, 0, 1

const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.

for (let index = 0; index < 2; index++) {
    console.log(myString.split(""))
    if (myString [index] === "e") {
        console.log(myString[index].length)
    }
}
// Create the code that will log every other character in the string.