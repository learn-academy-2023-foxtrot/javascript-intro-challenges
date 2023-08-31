//1
for (let i = 1; i <= 20; i++) {
    console.log(i)
};
//2
for (let i = 1; i <= 20; i += 2) {
    console.log(i)
}
//3
for (let i = 1; i <= 20; i++) {
    console.log(i * 3);
}
//4
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i); // Log even number
    } else {
        console.log("ODD"); // Log "ODD" for odd numbers
    }
}

//5 Consider var
const nums = [3, 57, -9, 20, 67];
let largestNum = nums[0]
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largestNum) {
        largestNum = nums[i];
    }
}

console.log("The largest number is " + largestNum)

//lowest num
let smallestNum = nums[0];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallestNum) {
        smallestNum = nums[i];
    }
}

console.log(smallestNum)

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i] % 2);
}

//Last section
const myString = "learn student";

// Task 1: Log the number of times the letter "e" occurs in the string
let countE = 0;
for (let i = 0; i < myString.length; i++) {
  if (myString[i] === "e") {
    countE++;
  }
}
console.log(`The letter "e" occurs ${countE} times in the string.`);

// Task 2: Log every other character in the string
let everyOtherCharacter = "";
for (let i = 0; i < myString.length; i += 2) {
  everyOtherCharacter += myString[i];
}
console.log(`Every other character in the string: ${everyOtherCharacter}`);




//stretch
for (let i = 5; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
};

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0 ) {
        console.log("buzz");
    } else {
        console.log(i);
    }
};










