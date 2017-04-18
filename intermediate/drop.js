//
function drop(arr, func) {
	for (var i = 0; i < arr.length; i++) {
		if (func(arr[i])) {
  			arr = arr.slice(i);
            break;
  		}
        if(i == arr.length-1){
          return [];
        }
	}
    return arr;
}

drop([1, 2, 3, 4], function(n) {
    return n > 5; });

// 基础写法
function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      //把不合格的前面队友扔掉
      arr.shift();
    }
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {return n >= 3;})

// 中级写法
function dropElements(arr, func) {
 //ES6的函数findIndex
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
}

// test here
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

//高级写法，第一种的加强版
function dropElements(arr, func) {
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});