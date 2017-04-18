function convert(str) {
    var reg = /[&<>"']/gi;
    var sBox = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
    // &colon;&rpar;
    function test(ch) {
        switch (ch) {
            case "&":
                return sBox[0];
            case "<":
                return sBox[1];
            case ">":
                return sBox[2];
            case '"':
                return sBox[3];
            case "'":
                return sBox[4];
            default:
                break;
        }
    }
    return str.replace(reg, test);
}
convert("<>");

// 基础写法
function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split('');

  // Since we are only checking for a few HTML elements I used a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '<':
        temp[i] = '&lt;';
        break;
      case '&':
        temp[i] = '&amp;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join('');
  return temp;
}

//test here
convertHTML("Dolce & Gabbana");

// 中级写法
function convertHTML(str) {
//连续替换
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
return str;
}

// test here
convertHTML("Dolce & Gabbana");

// 高级写法
function convertHTML(str) {
  // 替换的映射
  htmlEntities={
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':"&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(function(entity){
    return htmlEntities[entity] || entity;
  }).join('');
}

// test here
convertHTML("Dolce & Gabbana");