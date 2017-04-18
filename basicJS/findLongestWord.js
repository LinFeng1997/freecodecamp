function findLongestWord(str) {
    // function findMaxLength(arr) {
    // 	var max;
    // 	max = arr[i].length;
    //     for (var i = 0; i < arr.length; i++) {
    //     	//其实这儿是排序
    //     	// arr[i].length;
    //     }
    // }
    var temp = str.split(" ");
    var lengthArr = [];
    for (var i = 0; i < temp.length; i++) {
        lengthArr.push(temp[i].length);
        console.log(lengthArr);
    }
    // apply：只写一次这个方法然后在另一个对象中继承它，传this和数组
    return Math.max.apply(null, lengthArr);
    // return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");



// 首字母大写
function titleCase(str) {
    var temp;
    temp = str.toLowerCase();
    str = temp.split(" ");
    temp = str;
    for (var i = 0; i < str.length; i++) {
        // 单个字母转换还是不知道
        str[i].replace(str[i][0],str[i].charAt(0).toUpperCase())
       	// str[i].charAt(0).toUpperCase();
        console.log(str[i][0]);
    }
    str = str.join(" ");
    return str;
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT ");


// 正则写法
function toTitleCase(str) {
	//\w\S代表一个词语？
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
toTitleCase("HERE IS MY HANDLE HERE IS MY SPOUT a");

// 优雅写法
// 首字母大写
var str = "foo bar baz";
function titleCase(str) {

str.toLowerCase()
  .split(' ')
  .map(i => i[0] + i.substring(1))
  .join(' ')
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT ");
