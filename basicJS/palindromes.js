// 判断回文
function palindrome(str) {
	//去掉字符串无关的字符
	var re = /\s+/ig;
	str = str.trim().replace(re,'').replace(/[,-/(_).?:]/ig,'');
	// log(str);
    if (str.toLowerCase() == reverseString(str).toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

function reverseString(str) {
    len = str.length;
    var arr = str.split("", len);
    arr.reverse();
    str = arr.join('');
    return str;
}


palindrome("0_0 (: /-\ :) 0-0");

// ------------------------------------//

function log(a) {
    console.log(a);
}



// 替换函数
function replacer(match, p1, p2, p3, offset, string) {
    // p1 is nondigits, p2 digits, and p3 non-alphanumerics
    return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
log(newString);

// 所有出现的大写字母转换为小写，并且在匹配位置前加一个连字符。
function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(match) {
        return '-' + match.toLowerCase();
    }
    return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
styleHyphenFormat("BeidashDGU");
//$1-$9存放着正则表达式中最近的9个正则表达式的匹配结果
