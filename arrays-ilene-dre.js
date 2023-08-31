//Arrays Challenges 8/31

var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")
console.log(groceryList)
// Write the code that will add "granola" to the end of the array without altering the original array.
var ingredient = "granola"
var combinedArray = groceryList.concat(ingredient)
console.log(combinedArray)
console.log(groceryList)
// Write the code that will return a subset of the array containing only "chips" and "dip".
var cutArray = groceryList.slice(0,2)
console.log(groceryList.slice(0,2))
// Write the code that will add "beans" to the "chips" and "dip" array.
console.log(cutArray.push("beans"))
console.log(cutArray)