// 我的版本
function queue(arr, item) {
  // Your code here
  arr.push(item);
  var deleteItem=arr.shift();
  return deleteItem;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(queue(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));