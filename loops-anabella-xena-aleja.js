// Create a for loop that logs each number from 1 - 20.
for(let index= 1; index < 21; index = index + 1){
    console.log(index)
}
// Create a for loop that logs every other number from 1 - 20.
for(let index= 0; index < 21; index = index + 1){
    if (index % 2 !== 0){
        console.log(`${index} is an odd number`)
    }
}
// Create a for loop that logs the result of each number from 1 - 20 tripled.
for(let index= 1; index < 21; index = index + 1){
    console.log(index*3)
}
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, ]
for(let index= 0; index < 21; index = index + 1){
    if (index % 2 !== 0){
        console.log(`ODD`)
    } else {
        console.log(index)
    }
}
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc