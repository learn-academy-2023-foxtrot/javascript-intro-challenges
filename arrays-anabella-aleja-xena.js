var groceryList= ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda");
console.log(groceryList)
// Write the code that will add "granola" to the end of the array without 
// altering the original array.
var oneItem= "granola"
console.log(groceryList.concat(oneItem)) 
// Write the code that will return a subset of the array containing only "chips" and "dip".
var sliceArray= groceryList.slice(0, 2)
console.log(sliceArray)
// Write the code that will add "beans" to the "chips" and "dip" array.
sliceArray.push("beans")
console.log(sliceArray)
