// arguments 是一个类数组对象。代表传给一个function的参数列表。
// 这个有点像柯里化

function destroyer(arr) {
    // Remove all the values
    var newArr = Array.prototype.slice.call(arguments).splice(1);
    console.log(newArr);
    return arr.filter(
        function(item) {
        	console.log(newArr.indexOf(item)==-1);
        	return newArr.indexOf(item)==-1;
        }
    );
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// 官方写法
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}