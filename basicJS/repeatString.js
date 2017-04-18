function repeat(str, num) {
  if(num<0)
    return "";
  else{
    temp = str;
    for(var i=0;i<num-1;i++){
      str += temp;
    }

  }
  // repeat after me
  return str;
}

repeat("abc", 3);


// 优雅
// 请右转String.prototype.repeat