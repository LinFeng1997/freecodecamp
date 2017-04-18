function steamroller(arr) {
  // I'm a steamroller, baby
  var newArr = [];
  function steam(arr){
    arr.forEach(function(e){
    if(Array.isArray(e)){
      steam(e);
    }
    else
      newArr.push(e);
  });
  return newArr;
  }
  return steam(arr);
}

steamroller([[["a"]], [["b"]]]);

// 基础写法
function steamrollArray(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  // 封装成一个函数序列化
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);

// 中级写法
function steamrollArray(arr) {
  // 用第一个为基础，合并后面的
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
  }, []);
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);

// 中级写法
function steamrollArray(arr) {
  var test = function (base, e) {
    return base.concat(Array.isArray(e) ? steamrollArray(e) : e);
  };
  // 用第一个为基础，合并后面的
  return arr.reduce(test, []);
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);