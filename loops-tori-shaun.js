// Create a for loop that logs each number from 1 - 20.
for(let i = 1; i < 21; i++) {
    console.log(i)
}
// Create a for loop that logs every other number from 1 - 20.
for(let index = 1; index < 21; index = index + 2) {
    console.log(index)
}
// Create a for loop that logs the result of each number from 1 - 20 tripled.
for(let i = 1; i < 21; i++) {
    console.log(i * 3)
}
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
      console.log("ODD");
    } else {
      console.log(i);
    }
  }

// Consider this variable:
const nums = [3, 57, -9, 20, 67]
// Create the code that will log the largest number from the array.
const largestNumber = Math.max(...nums)
console.log("The largest number is:", largestNumber)
// Create the code that will log the smallest number from the array.
const smallestNumber = Math.min(...nums)
console.log("The smallest number is:", smallestNumber)
// Create the code that will log the remainder of each number when divided by 2.
for (let i = 0; i < nums.length; i++) {
  const remainder = nums[i] % 2;
  console.log(`The remainder of ${nums[i]} divided by 2 is ${remainder}`);
}
// Expected output: 1, 1, -1, 0, 1

// Consider this variable:
const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.
const targetLetter = "e";
let count = 0;

for (let i = 0; i < myString.length; i++) {
  if (myString[i] === targetLetter) {
    count++;
  }
}
console.log(`The letter "${targetLetter}" occurs ${count} times in the string.`);



// Create the code that will log every other character in the string.
for (let i = 0; i < myString.length; i += 2) {
  console.log(myString[i])
}


// 🏔 Stretch Goals
// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc
for (let i = 5; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else if (i % 2 === 1) {
      console.log(`${i} is odd`);
    }
  }  
// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
      console.log(`${i} fizzbuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i} fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} buzz`);
    } else {
      console.log(`${i}`)
    }
}

// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc