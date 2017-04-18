// 总觉得不够优雅

// 大数组找大数合成数组
function largestOfFour(arr) {
	var largestArr = [];
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i];
        for (var j = 0; j < temp.length; j++) {
            temp.sort(function(a, b) {
                return b - a;
            });
        }
        largestArr.push(temp[0]);
        console.log(temp[0]);
    }

    // You can do this!
    return largestArr;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);

// Math.max写法
function largestOfFour(arr) {
	var largestArr = [];
    for (var i = 0; i < arr.length; i++) {
        // 剩余参数都提取出来了
        var temp = Math.max(...arr[i]);
        // Math.max.apply(null, arr[i])
        largestArr.push(temp);
    }
    // You can do this!
    return largestArr;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);

// 最优雅写法
function largestOfFour(mainArray) {
  return mainArray.map(function(subArray) {
    return Math.max.apply(null, subArray);
  });
}