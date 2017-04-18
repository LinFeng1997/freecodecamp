// 两个函数
// 第一个找此字符串可能的排列组合,递归插入
// 第二个逐个来匹配不重复的个数
// 第二种思路：直接计算重复几个会有几个答案，算了
function permAlone(str) {
    var arr = str.split(""),newArr = [],
    reg = /([a-z])\1/g,flag = 0;
    arr = permutate(arr,[]);
    arr.forEach(function(e,i){
      newArr[i] =  e.join("");
      //不能用test
      if (!newArr[i].match(reg)) {
        flag++;
      }
    });
    return flag;
}

permAlone('aab');

// 比如说aab
// 先aa aa，b插->baa baa aba aba aab aab
// 123 132 213 231 312 321
// arr[1]+arr[2]+arr[3]
// 3->3!=6 4->4!=24 5->5!=120 6->6!=720 7!=5040

function permutate(array,permutatedArray){
 if(!permutatedArray){
  permutatedArray = [];
 }
 
 if(array.length > 1){
  //弹出第一个数
  var elementCur = array.shift();
  //排列剩余的数组
  permutate(array,permutatedArray);
  //返回剩余的数组的排列长度
  var permutatedArrayLen = permutatedArray.length;
  //第一个数与其他剩余数组所有数组组合
  for(var j = 0;j < permutatedArrayLen; j++){
   //弹出不齐的组
   var p = permutatedArray.shift();
   //把当前元素放到排列好的数组的所有位置
   for(var i = 0; i <= p.length; i++){
    //复制排列好的数组
    var r = p.slice(0);
    //插入数据到数组的位置
    r.splice(i, 0, elementCur);
    //保存
    permutatedArray.push(r);
   }
  }
  //退出条件 
 }
 else{
  permutatedArray.push([array[0]]);
 }
 return permutatedArray;
}



// 参考写法
function permAlone(str) {

  // Create a regex to match repeated consecutive characters.
  var regex = /(.)\1+/g;

  // Split the string into an array of characters.
  var arr = str.split('');
  var permutations = [];
  var tmp;

  // FUnction to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  //Generate arrays of permutations using the algorithm.
  //产生排列组合的数量 n！
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(''));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  //Return how many have no repetitions.
  return filtered.length;
}