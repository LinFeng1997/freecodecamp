// 1.数字转数组  567变成[5,6,7]
// 2.用S盒来替换 [5,6,7]变成["D","LX","VII"]
// 3.拼接起来

// bug:没解决9999以上的数字
function convert(num) {
    // 相当于一个S盒，roman是用来放最后的结果的
    var key = [
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "M", "MM", "MMM", "MMMM", "MMMMM", "MMMMMM", "MMMMMMM", "MMMMMMMM", "MMMMMMMMM"
        ],
        roman = "",
        array = [];
    // 暂时只做到千位
    roman = String(num).split("").reverse();
    for (var i = 0; i < roman.length; i++) {
        array.push(key[10 * i + (+roman[i])]);
    }
    roman = array.reverse().join("");
    return roman;
}

convert(567);
// 正确写法
var convertToRoman = function(num) {

  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}

// test here
convertToRoman(36);

// 优雅写法
function romanize(num) {
    if (!+num)
        return false;
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
        ],
        roman = "",
        i = 3;
    // 把罗马数字一个一个拼起来
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    // return roman;
    // 这里是用来拼千位以上的，统统用M带过
    // return Array(+digits.join("") + 1).join("M") + roman;
    return Array(+digits.join("") + 1);
}
romanize(55679);
