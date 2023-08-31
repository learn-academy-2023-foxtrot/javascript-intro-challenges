var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")
console.log(groceryList)
// Write the code that will add "granola" to the end of the array without altering the original array.
groceryList.push("granola")
console.log(groceryList)
//
console.log(groceryList.slice(0, 2))

groceryList.reverse()
groceryList.push("beans")
console.log(groceryList.slice(3))
//
var numbers = [2 ,4 ,6 ,8 ,10]

numbers.reverse()
numbers.push(0)
console.log(numbers.reverse())

numbers.push(12)
console.log(numbers)

numbers.reverse()
numbers.pop()
console.log(numbers.reverse())

var numbers2 = [0]

console.log(numbers2.concat(numbers))

