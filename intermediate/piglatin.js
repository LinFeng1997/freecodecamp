//标准用的正则
function translate(str) {
  //辅音应该有个盒子
  //判断辅音
  if(str.substring(0,1) === 'c'||str.substring(0,1) === 'p'||str.substring(0,1) === 'g'){
  //加辅音
    if(str.substring(1,2)==='l'){
      str = str.substring(2) + str.substring(0,2) +"ay";
    }
    else
    str = str.substring(1) + str.substring(0,1) +"ay";
  }
  else{
    str += "way";
  }
  return str;
}

translate("glove");


// 普通写法
function translatePigLatin(str) {
  var pigLatin = '';
  //辅音正则表达式
  var regex = /[aeiou]/gi;

  // 检查第一个字符是不是原因
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else {

    // 找到第一个元音的索引
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}


translatePigLatin("consonant");


// 中级写法
function translatePigLatin(str) {
  // 把检查是否是个元音封装在一个函数里面
  function check(obj) {
      var yuanyin = ['a','i','u','e','o'],
      ch = str.charAt(obj);
      if (yuanyin.indexOf(ch) == -1) {
       //下一个
       return check(obj + 1);
      }
      else{
       //找到元音
       return obj;
      }
      // return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }

  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}

// test here
translatePigLatin("consonant");

// 优雅写法
function translatePigLatin(str) {
    var strArr = [];
    var tmpChar;

    // 检查元音函数
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }

    // return initial str + "way" if it starts with vowel
    // 元音
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    // 辅音
    else
        strArr = str.split("");
    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
 // convert array to string and concatenate "ay" at the end  
 return strArr.join("")+"ay";
}

// test here
translatePigLatin("consonant");