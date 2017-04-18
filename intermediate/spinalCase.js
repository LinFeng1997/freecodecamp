// 匹配大写开头、空格开头、_开头、
function spinalCase(str) {
  str = str.substring(0,1).toLowerCase()+str.substring(1);
  var reg = /[A-Z]|[\s]+[A-Za-z]|[_]+[A-Za-z]/g;
  return str.replace(reg,func);
}
spinalCase('The_Andy_Grif');
function func(match){
	return "-"+match.replace(/[_\s]+/,function what(match){return "";}).toLowerCase();
}

// 基础写法
function spinalCase(str) {
  // 正则式是空格开头或_开头
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  // 给没空格的加个空格
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  // 把空格或者_换成-（1,3,4情况）
  return str.replace(regex, '-').toLowerCase();
}

// test here
spinalCase('This Is Spinal Tap');
// 中级写法
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  // 给第二种情况加空格
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  //?和冒号是个条件三元组，是""吗？是的话什么都不做，不是的话分割，按那两个正则
  return str.toLowerCase().split(/(?:_|\s)+/) .join('-');
}

// test here
spinalCase('This Is Spinal Tap');