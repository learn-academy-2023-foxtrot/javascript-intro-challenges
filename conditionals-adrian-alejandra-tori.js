// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34 / 3 > 67 / 2);
// Does 5 evaluate to the same as "5"?
console.log(5 == "5");
// Does 5 strictly equal "5"?
console.log(5 === "5")
// Does !3 strictly equal 3?
console.log(!3 === 3);
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "Student".length === 7);
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "Student".length === 10);
// Does "LEARN" contain the subset "RN"?
console.log("LEARN".includes("RN"));
// Does "LEARN" contain the subset "rn"?
console.log("LEARN".includes("rn"));
// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0]=== "l");
// Modify the code from the previous question to return true.
console.log("LEARN"[0] === "L");

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 80; 
if (item <= 100) {
    console.log("in budget");
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = true
if (hungry === true) {
    console.log("eat food");
} else {
    console.log("keep coding!!");
};

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red
var trafficLight = "yellow";
if (trafficLight === "green") {
    console.log("go");
} else if (trafficLight === "yellow") {
    console.log("slow down");
} else if (trafficLight === "red") {
    console.log("stop");
} 

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var numberOne = 20
var numberTwo = 20
if (numberOne > numberTwo) {
    console.log(numberOne);
} else if (numberOne === numberTwo) {
    console.log("the numbers are the same");
} else {
    console.log(numberTwo);
}
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var num = 15
if (num % 2 === 0) {
    console.log("this number is even");
} else if (num % 2 === 1) {
    console.log("this number is odd");
} else if (num === 0) {
    console.log("this number is zero");
} else {
    console.log("no number found");
}