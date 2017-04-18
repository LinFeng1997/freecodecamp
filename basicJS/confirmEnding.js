// 检查结尾
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  console.log(target.length);
  return str.substr(-target.length,target.length) === target;
}

confirmEnding("Bastian", "n");
confirmEnding("He has to give me a new name", "name");
confirmEnding("He has to give me a new name", "me");

// 优雅答案
function end(str, target) {
    return target.length > 0 && target === str.substr(str.length - target.length);
}