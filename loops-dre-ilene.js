// Loops Challenges 8/31
// Create a for loop that logs each number from 1 - 20.
for (let index = 1; index < 21; index++) {
    console.log("1-20", index)
}
// Create a for loop that logs every other number from 1 - 20.
for (let index = 0; index < 21; index++) {
    if (index % 2 !== 0) {
        console.log("every other", `${index}`)
    }   
}
// Create a for loop that logs the result of each number from 1 - 20 tripled.
for (let index = 1; index < 21; index++) {
    console.log("1-20 tripled", index*3)
}
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
for (let index = 0; index < 21; index++) {
    if (index % 2 !== 0 ) {
        console.log("ODD")
    } else {
        console.log(index)
    }
}
