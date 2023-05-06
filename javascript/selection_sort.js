//selection sort using built in methods for finding the lowest value
//DO NOT USE THIS IT IS INCREDIBLY SLOW AND WAS A PROOF OF CONCEPT
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
  //set a temp lowest value index
  let j = 0;
  //iterate over the length of the array
  for(let i = 0; i < arr.length; i++) {
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
  console.dir(arr, {'maxArrayLength': null});
  console.log(arr)
  return arr
}

function test(testArr, sortMethod) {
  let testResults = {}
  let testNum = 0
  testArr.forEach(test => {
    const longInput = [];
    for (let i = 0; i < test; ++i) {
      longInput.push(Math.floor(Math.random() * 1000));
    }
    const startTime = Date.now()
    sortMethod(longInput)
    testResults = {...testResults, [testNum]: {num: test,duration:(Date.now() - startTime)/1000}}
    testNum++
  })
  console.log(testResults)
}
if (require.main === module) {
  // add your own tests in here
  // console.log("Expecting: [-1, 2, 3, 5]");
  // console.log("=>", selectionSort([3, -1, 5, 2]));

  // console.log("");

  // BENCHMARK HERE, and print the average runtime

  const runTimes = [3, 10, 100]

  for(let i = 1; i <= 19; i++) {
    runTimes.push((i * 100) + 100)
  }

  test(runTimes, selectionSort)
}

module.exports = selectionSort;

// Please add your pseudocode to this file

//find the lowest value in the array
//set a temp index that stores where to put the value at 
//swap the lowest value into the temp index
//increment the index by 1


// And a written explanation of your solution
