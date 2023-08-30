console.log(34/3 > 67/2)
//Output - False
console.log(5 == "5")
//Output - True
console.log(5 === "5")
//Output - False
console.log(!3 === 3)
//Output - False
console.log("LEARN".length === 5 && "Student".length === 7)
// Output - True
console.log("LEARN".length === 5 || "Student".length === 10)
// Output - True
var queSeven = "LEARN"
console.log(queSeven.includes("RN"))
// Output - True
console.log(queSeven.includes("rn"))
// Output - False
console.log("LEARN"[0] === "l")
// Output - False
console.log("LEARN"[0] === "L")
// Output - True
var myMoney = 50
if (myMoney <= 100) {
    console.log("in budget")
}
// Output - in budget
var imHungry = "Im Hungry"
if (imHungry === "Im Hungry") {
    console.log("eat food");
} else  {
    console.log("keep coding")
}
var trafficLight = "Green"
var trafficLightTwo = "Yellow"
if (trafficLight === "Green") {
    console.log("Go!")
} else if (trafficLightTwo === "Yellow") {
    console.log("Slow Down!")
} else {
    console.log("Stop!")
}
