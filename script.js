// script.js - Complete solution
function divide(arr, n) {
  let result = [];
  let currentChunk = [];
  let currentSum = 0;
  
  for (let num of arr) {
    if (currentSum + num <= n) {
      currentChunk.push(num);
      currentSum += num;
    } else {
      if (currentChunk.length > 0) {
        result.push([...currentChunk]);
        currentChunk = [];
        currentSum = 0;
      }
      currentChunk.push(num);
      currentSum = num;
    }
  }
  
  if (currentChunk.length > 0) {
    result.push([...currentChunk]);
  }
  
  return result;
}

// Test the function (for verification)
console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5)); 
// [[1,2],[3],[4,1,0],[2,2]]

console.log(divide([4, 3, 2, 1], 4)); 
// [[4],[3],[2,1]]
