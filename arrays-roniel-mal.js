// // write the code that will add "soda" to the end of original array
// var groceryList = ["chips", "dip", "cookies"]
// console.log(groceryList.push("soda"));
// console.log(groceryList)
// // output 4
// // [ 'chips', 'dip', 'cookies', 'soda' ]

// // write the code that will add "granola" to the end of the array whitout altering the original array 
// var secondGroceryList = ["granola"]
// var combinedGroceryList = groceryList.concat(secondGroceryList)
// console.log(combinedGroceryList);
// //output[ 'chips', 'dip', 'cookies', 'soda', 'granola' ]

// console.log(groceryList.slice(0,2))
// //output [ 'chips', 'dip' ]// write the code that returns a subset of the array containing only "chips and "dip

// // write the code that will add "beans" to the "chips" array
// var thridGroceryList = ["beans"]
// console.log(groceryList.slice(0,2).concat(thridGroceryList))
// // output [ 'chips', 'dip', 'beans' ]

// var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that will add number 0 to the beginning of the array.
// console.log(numSet.unshift(0))
// console.log(numSet)
// Output: 7
// [0, 2, 13, 6, 8, 4, 2]

// Write the code that will add number 12 to the end of the array.
// console.log(numSet.push(12))
// console.log(numSet)
// Output: 8
// [0, 2, 13, 6, 8, 4, 2, 12]

// Write the code that will remove the first number from the array.
// console.log(numSet.shift())
// console.log(numSet)
// Output: 0
// [2, 13, 6, 8, 4, 2, 12]

// // Write the code that will add the number 0 to the beginning of the array without altering the original array.
// var secondNumSet = [0]
// var combinedNumSet = secondNumSet.concat(numSet)
// console.log(combinedNumSet)
// Output: [0, 2, 13, 6, 8, 4, 2, 12]

var numSet = [2, 13, 6, 8, 4, 2]
//write the code that finds the index of the first apperance of the number 2
console.log(numSet.indexOf(2))
//output 0

// write the code that finds the index of the last apperance of the number 2 
console.log(numSet.lastIndexOf(2));