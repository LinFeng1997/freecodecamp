// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

function telephoneCheck(str) {
    var numStr = str.match(/\d/g);
    //去掉空格
    str = str.split(" ").join("");
    //验证10位数的函数
    if (numStr.length === 10) {
        return check(str);
    } else if (numStr.length === 11) {
        return str[0] === "1" ? check(str.substring(1)) : false;
    } else {
        return false;
    }
}
telephoneCheck("555)-555-5555");

function check(str) {
    var reg = /(\d{10}|((\d{3}-|([(]\d{3}[)]))\d{3}-\d{4}))/;
    console.log(str.match(reg));
    return str.match(reg) ? str.match(reg)[0] === str : false;
}
check("555)-555-5555");


// 基础写法
function telephoneCheck(str) {
   //开头是1 空格可以没有 开头可以没有 （3个数字或带括号的3个数字） 空格或者- 可以没有
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   //test函数啊！
   return regex.test(str);
}
telephoneCheck("555-555-5555");

// 中级写法 握草看不懂了 健壮性
function telephoneCheck(str) {
  //开头( 匹配(不会捕获匹配项。 
  var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;
  return re.test(str);
}
telephoneCheck("555-555-5555");