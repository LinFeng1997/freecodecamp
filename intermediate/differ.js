function is(element) {
    return element != null;
}
// 可以成功
function diff(arr1, arr2) {
    var newArr = [];
    var maxLength = Math.max(arr1.length, arr2.length);
    for (var i = 0; i < maxLength; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            newArr.push(arr2[i]);
        }

        if (arr2.indexOf(arr1[i]) === -1) {
            newArr.push(arr1[i]);
        }
    }
    return newArr.filter(is);
    //newArr = arr1.concat(arr2);

}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5, 6]);

// 优雅写法
function diffArray(arr1, arr2) {
    var newArr = [];

    arr1.forEach(function(val) {
        if (arr2.indexOf(val) < 0) newArr.push(val);
    });

    arr2.forEach(function(val) {
        if (arr1.indexOf(val) < 0) newArr.push(val);
    });

    return newArr;
}
// 高手写法
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
        item => !arr1.includes(item) || !arr2.includes(item)
    )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

function diffArray(arr1, arr2) {
    return arr1
      .filter(el => !arr2.includes(el))
      .concat(
        arr2.filter(el => !arr1.includes(el))
      )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
