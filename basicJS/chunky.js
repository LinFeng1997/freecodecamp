// 不是很优雅的实现
function chunk(arr, size) {
    // Break it up.
    var num = Math.floor((arr.length + size - 1) / size);
    // 先弄碎它
    var newArr = new Array();
    // 再组装
    for (var i = 0; i < num; i++) {
        newArr[i] = [];
        for (var j = 0; j < size; j++) {
            if (arr[j + size * i] != null)
                newArr[i].push(arr[j + size * i]);
        }
    }

    return newArr;
}

//chunk(["a", "b", "c", "d"], 2);
//chunk([0, 1, 2, 3, 4, 5], 3);
//chunk([0, 1, 2, 3, 4, 5], 2);
chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
// 优雅写法，既然是要切块，那就用slice切片方法
function chunk (arr, len) {

  var chunks = [],
      i = 0,
      n = arr.length;

  while (i < n) {
    // i到i+len这一块切掉
    chunks.push(arr.slice(i, i += len));
  }

  return chunks;
}
chunk(["a", "b", "c", "d"], 2);
chunk([0, 1, 2, 3, 4, 5], 3);
chunk([0, 1, 2, 3, 4, 5], 2);
chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);

// 高端写法，直接定义在数组原型上
Object.defineProperty(Array.prototype, 'chunk_inefficient', {
    value: function(chunkSize) {
        var array=this;
        return [].concat.apply([],
        //这里还是遍历了n次
            array.map(function(elem,i) {
                return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
            })
        );
    }
});
[0, 1, 2, 3, 4, 5, 6, 7, 8].chunk_inefficient(4)
// 5个数组Array方法: indexOf、filter、forEach、map、reduce
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
//遍历找值
console.log(arr.indexOf(2) != -1);
// 遍历过滤
var filterArr = arr.filter(function(item) {
    return item === 2;
});
// 去伪存真
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(
    function(item){
      return Boolean(item);
    }
  );
}

bouncer([1, null, NaN, 2, undefined]);

console.log("Filter results:", filterArr);
// 纯遍历
arr.forEach(function(item, index) {
    console.log(item);
});


// 遍历映射
var oldArr = [{ first_name: "Colin", last_name: "Toh" }, { first_name: "Addy", last_name: "Osmani" }, { first_name: "Yehuda", last_name: "Katz" }];

function getNewArr() {

    return oldArr.map(function(item, index) {
        item.full_name = [item.first_name, item.last_name].join(" ");
        return item;
    });

}
console.log(getNewArr());
// 累加器
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
var arr = ["apple","orange","apple","orange","pear","orange"];
 
function getWordCnt(){
  return arr.reduce(function(prev,next){
    prev[next] = (prev[next] + 1) || 1;
    return prev;
  },{});
}
 
console.log(getWordCnt());