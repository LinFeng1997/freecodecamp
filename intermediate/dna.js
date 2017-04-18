// 我的写法
function pair(str) {
  str = str.split("");
  var arr = [];
  str.forEach(function(e){
    switch(e){
      case "A":
      arr.push(["A","T"]);break;
      case "T":
      arr.push(["T","A"]);break;
      case "C":
      arr.push(["C","G"]);break;
      case "G":
      arr.push(["G","C"]);break;
    }
  });
  return arr;
}

pair("ATCGA");


// 基础写法
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // 用函数用来操作
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// test here
pairElement("GCG");

// 中级写法
function pairElement(str) {
  //define a map object with all pair possibilities，一个map对象来映射
  var map = {T:'A', A:'T', G:'C', C:'G'};
  //split str into a char Array
  strArr = str.split('');
  //replace each Array item with a 2d Array using map
  for (var i=0;i<strArr.length;i++){
    strArr[i]=[strArr[i], map[strArr[i]]];
  }
 return strArr;
}

// test here
pairElement("GCG");