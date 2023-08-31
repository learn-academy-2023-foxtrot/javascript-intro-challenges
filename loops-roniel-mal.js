// Create a for loop that logs each number from 1 to 20.]
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// for(let i = 0; i < 20; i++){
// console.log(arr[i])
// }

// Create a for loop that logs every other number from 1 to 20.
// for(let i = 0; i < 20; i++) {
//     if (arr[i] % 2 !== 0){
//         console.log(arr[i])
//     }
// }
// Output: 1 3 5 7 9 11 13 15 17 19

// Create a for loop that logs the result for each number from 1-20 tripled.
// for(let i = 0; i < 20; i++){
//     console.log(arr[i] * 3)
//  }

// for(let i = 0; i < 20; i++) {
    //     if (arr[i] % 2 !== 0){
        //         console.log("ODD")
        //     } else {
            //         console.log(arr[i])
            //     }
            // }
            
            // const nums = [3, 57, -9, 20, 67]
            // //create the code that will log the largest number from the array
            // let highest = nums[0]
            
            // for( let i = 0; i < nums.length; i++){
                //     if (nums[i] > highest)
                //     highest = nums[i]
                //     console.log();
                // }
                
                // Create a for loop that logs each even number from 1-20 and in the place of every odd number returns the word ODD.
        //         function largest(nums) {
        //             let max = nums[0];
        //             for( let i = 0; i < nums.length; i++) {
        //                 if (nums[i] > max )
        //                 max = nums[i];
        // }
        // return max;
        // }
        // const nums = [3, 57, -9, 20, 67]
        // console.log(largest(nums))
//output 67

function smallest(nums) {
    let max = nums[0];
    for( let i = 0; i < nums.length; i--) {
        if (nums[i] > max )
        max = nums[i];
}
return max;
}
const nums = [3, 57, -9, 20, 67]
console.log(smallest(nums))
