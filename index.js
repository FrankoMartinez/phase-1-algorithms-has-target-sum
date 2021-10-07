function hasTargetSum(array, target) {
  let sortedArray = array
  sortedArray = sortedArray.sort((a, b) => a - b)
  let p1 = 0
  let p2 = array.length-1
  while(p1 < p2) {
    if(sortedArray[p1] + sortedArray[p2] > target) {
      p2--
    } else if(sortedArray[p1] + sortedArray[p2] < target) {
      p1++
    } else {
      return true 
    }
  }
  return false
}

hasTargetSum([3, 8, 12, 4, 11, 7], 10)
hasTargetSum([22, 19, 4, 6, 30], 25)
hasTargetSum([1, 2, 5], 4)
hasTargetSum([-7, 10, 4, 8], 3)
hasTargetSum([1, 2, 3, 4], 5)
hasTargetSum([2, 2, 3, 3], 4)
hasTargetSum([4], 4)
/* 
  Write the Big O time complexity of your function here
*/

/* 
 Iterate through every number in the array 
 Check if 2 of the numbers added equal the target

*/

/*
  I iterated over every number in the array and added 2 of them at a time
  After I checked if any of the 2 equal the target if it does it returns true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
