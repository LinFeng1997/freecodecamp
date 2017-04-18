// 第一种想法：先合并再去重
function sym(args) {
    var arr = [].slice.call(arguments);
    // 参数在操作之前要去重
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].filter(function(e, index) {
            return arr[i].indexOf(e) === index;
        });
    }
    console.log("格式化的数组： " + arr);
    var func = function(arr1, arr2) {
        var newArr = arr1.concat(arr2);
        return newArr.filter(function(e) {
            return newArr.indexOf(e) === newArr.lastIndexOf(e);
        });

    };
    return arr.reduce(function(a, b) {
        //这个地方返回的应该就是差分了
        return func(a, b);
    });
}


sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);

// 基础写法
function sym() {
    // 转数组
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    //两个数组间的对等差分转换
    function symDiff(arrayOne, arrayTwo) {
        var result = [];
        //分别遍历啊
        arrayOne.forEach(function(item) {
            if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        arrayTwo.forEach(function(item) {
            if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        return result;
    }

    // Apply reduce method to args array, using the symDiff function
    return args.reduce(symDiff);
}

// 中级写法
function sym() {

  // Convert the argument object into a proper array
  // 转数组
  var args = Array.prototype.slice.call(arguments);

  // Return the symmetric difference of 2 arrays
  // 获取不同->抽象为函数
  var getDiff = function(arr1, arr2) {
    // 还是两个各
    // Returns items in arr1 that don't exist in arr2
    function filterFunction(arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }

    // Run filter function on each array against the other
    return filterFunction(arr1, arr2)
      .concat(filterFunction(arr2, arr1));
  };

  // Reduce all arguments getting the difference of them
  var symarray = args.reduce(getDiff, []);

  // Run filter function to get the unique values
  var unique = symarray.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
    });
  return unique;
}

// test here
sym([1, 2, 3], [5, 2, 1, 4]);

// 高级写法
function sym() {
  // difference between set A and set B
  // ES6写法
  const diff = (A, B) => new Set([...A].filter(n => !B.has(n)));
  // spread operator to convert array like object to array
  const result = [...arguments]
    // map elements in arguments (array) to Set
    .map(arr => new Set(arr))
    // using the formula in https://en.wikipedia.org/wiki/Symmetric_difference
    // i reduce it by uniting the diff(A, B) and diff(B, A)
    .reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)]));

  // convert the set to array by using spread operator again
  return [...result];
}

// test here
sym([1, 2, 3], [5, 2, 1, 4]);