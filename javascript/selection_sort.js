//selection sort using built in methods for finding the lowest value
//DO NOT USE THIS IT IS INCREDIBLY SLOW
// function selectionSort(arr) {
//   // type your code here
//   for(let i = 0; i < arr.length; i++) {
//     const lowVal = arr.findIndex((val) => val === Math.min(...arr.slice(i)))
//     if(i !== lowVal){
//       [arr[i], arr[lowVal]] = [arr[lowVal], arr[i]]
//     }
//   }
//   console.log(arr)
//   return arr
// }

//selection sort iterating over the array twice
function selectionSort(arr) {
  //iterate over the length of the array
  for(let i = 0; i < arr.length; i++) {
    //set a temp lowest value index
    let j = i;
    //iterate over the array between the current value of i and the length of the array
    for(let n = i; n < arr.length; n++) {
      //check if the value at a given position n is lower than the value currently at the temp index
      if(arr[n] < arr[j]) {
        j = n
      }
    }
    //after every iteration swap the values at i and the lowest value at j
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

//function to run tests on assorted array lengths, takes in the sorting function and array containing how large you want each array passed into the sorting function to be

// function test(testArr, sortMethod) {
//   let testResults = {}
//   let testNum = 0
//   testArr.forEach(test => {
//     const longInput = [];
//     for (let i = 0; i < test; ++i) {
//       longInput.push(Math.floor(Math.random() * 1000));
//     }
//     const startTime = Date.now()
//     sortMethod(longInput)
//     testResults = {...testResults, [testNum]: {num: test,duration:(DBate.now() - startTime)/1000}}
//     testNum++
//   })
//   console.log(testResults)
// }


if (require.main === module) {
  // add your own tests in here
  // BENCHMARK HERE, and print the average runtime

  // const runTimes = [3, 10, 100]

  // for(let i = 1; i <= 19; i++) {
  //   runTimes.push((i * 100) + 100)
  // }

  // test(runTimes, selectionSort)
}

module.exports = selectionSort;

// Please add your pseudocode to this file

//find the lowest value in the array
//set a temp index that stores where to put the value at 
//swap the lowest value into the temp index
//increment the index by 1


// And a written explanation of your solution
