function rot13(str) { // LBH QVQ VG!
    var temp;
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        //先转成ASCII码
        temp = str[i].charCodeAt();
        // 再加13替换
        if (temp >= 65 && temp <= 90) {
            temp = ((temp - 65) + 13) % 26 + 65;
        }
        // 再出来
        newStr += String.fromCharCode(temp);
    }
    return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

//基础写法
function rot13(str) {
  // Split str into a character array
  return str.split('')
  // Iterate over each character in the array
    .map.call(str, function(char) {
      // Convert char to a character code
      x = char.charCodeAt(0);
      // Checks if character lies between A-Z
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);  // Return un-converted character
      }
      //N = ASCII 78, if the character code is less than 78, shift forward 13 places
      else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      // Otherwise shift the character 13 places backward
      return String.fromCharCode(x - 13);
    }).join('');  // Rejoin the array into a string
}
rot13("SERR PBQR PNZC");


//中级写法
function rot13(str) {
  var rotCharArray = [];
  var regEx = /[A-Z]/ ;
  str = str.split("");
  for (var x in str) {
    if (regEx.test(str[x])) {
      // A more general approach
      // possible because of modular arithmetic
      // and cyclic nature of rot13 transform
      rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
    } else {
      rotCharArray.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, rotCharArray);
  return str;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");

//高级写法
function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}


// 正则与replace写法
function rot13(str) {
    function convert(match,offset,str) {
        match = ((match.charCodeAt() - 65) + 13) % 26 + 65;
        return String.fromCharCode(match);
    }
    var test = /[A-Z]/g;
    return str.replace(test, convert);
}

rot13("SERR PBQR PNZC");

