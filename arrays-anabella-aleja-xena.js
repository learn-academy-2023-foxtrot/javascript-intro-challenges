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

var numbers= [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
numbers.unshift(0)
console.log(numbers)
// Write the code that will add the number 12 to the end of the array.
numbers.push(12)
console.log(numbers)
// Write the code that will remove the first number from the array.
numbers.shift(0)
console.log(numbers)
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
var newNumber= [0]
console.log(newNumber.concat(numbers))

var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
console.log (numSet.indexOf(2))
// Write the code that finds the index of the last appearance of the number 2.
console.log (numSet.lastIndexOf(2))
// Write the code that returns the number at the third index.
console.log (numSet[3])
