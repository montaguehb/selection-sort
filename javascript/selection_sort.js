function selectionSort(arr) {
  // type your code here
  for(let i = 0; i < arr.length; i++) {
    const lowVal = arr.findIndex((val) => val === Math.min(...arr.slice(i)))
    if(i !== lowVal){
      [arr[i], arr[lowVal]] = [arr[lowVal], arr[i]]
    }
  }
  return arr
}

function test(testArr) {
  let testResults = {}
  let testNum = 0
  testArr.forEach(test => {
    const longInput = [];
    for (let i = 0; i < test; ++i) {
      longInput.push(Math.random());
    }
    const startTime = Date.now()
    selectionSort(longInput)
    testResults = {...testResults, [testNum]: {num: test,duration:(Date.now() - startTime)/1000}}
    testNum++
  })
  console.log(testResults)
}
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime

  const runTimes = [3, 10, 100]

  for(let i = 1; i <= 19; i++) {
    runTimes.push((i * 100) + 100)
  }

  console.log(runTimes)
  test(runTimes)
}

module.exports = selectionSort;

// Please add your pseudocode to this file

//find the lowest value in the array
//set a temp index that stores where to put the value at 
//swap the lowest value into the temp index
//increment the index by 1


// And a written explanation of your solution
