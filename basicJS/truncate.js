// 截断字符串

// 写法1
function truncate(str, num) {
  // Clear out that junk in your trunk
  if(num<3){
    return str.substr(0,num)+"...";
  }
  else if(num<str.length){
    return str.substr(0,num-3)+"...";
  }
  else {
    return str;
  }
  
}

truncate("A-tisket a-tasket A green and yellow basket", 11);


// 写法2：把substr全部换成slice

// 其他：暂无