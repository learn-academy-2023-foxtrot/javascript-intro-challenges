// write the code that will add "soda" to the end of original array
var groceryList = ["chips", "dip", "cookies"]
console.log(groceryList.push("soda"));
console.log(groceryList)
// output 4
// [ 'chips', 'dip', 'cookies', 'soda' ]

// write the code that will add "granola" to the end of the array whitout altering the original array 
var secondGroceryList = ["granola"]
var combinedGroceryList = groceryList.concat(secondGroceryList)
console.log(combinedGroceryList);
//output[ 'chips', 'dip', 'cookies', 'soda', 'granola' ]

console.log(groceryList.slice(0,2))
//output [ 'chips', 'dip' ]// write the code that returns a subset of the array containing only "chips and "dip

// write the code that will add "beans" to the "chips" array
var thridGroceryList = ["beans"]
console.log(groceryList.slice(0,2).concat(thridGroceryList))
// output [ 'chips', 'dip', 'beans' ]