// 先把传入数组以第一个数组为基准比较，去掉重复,这个放后面处理？
// 合并所有数组
function unite(arr1, arr2, arr3) {
    for (var i = 1; i < arguments.length; i++) {
        arr1 = arr1.concat(arguments[i]);
    }
    return arr1.filter(function(a, index) {
        return arr1.indexOf(a) == index;
    });
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// 基础写法
function uniteUnique(arr1, arr2, arr3) {
  // 新数组
  var finalArray = [];

  // 函数参数放地方
  // instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // 只放新值，一个一个推
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// 中级写法
function uniteUnique(arr1, arr2, arr3) {
 var newArr;
 //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //用reduce了 arrA不变，arrB会变
  newArr = args.reduce(function(arrA,arrB){
  //Apply filter to remove the duplicate elements in the array
    return arrA.concat(arrB.filter(function(i){
      return arrA.indexOf(i) === -1;
    }));
  });

   return newArr;                    
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// 高级写法
function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]){
    concatArr = concatArr.concat(arguments[i]); i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);