function add(x) {
    console.log(arguments);
    if (arguments.length == 1) {
        if (typeof arguments[0] !== "number") {
            return undefined;
        } else {
            return function(y) {
                if (typeof y !== "number") {
                    return undefined;
                }
                else{
                	return x + y;
                }     
            };
        }
    } else if (arguments.length == 2) {
        if (typeof arguments[1] !== "number")
            return undefined;
        else
            return arguments[0] + arguments[1];
    }
}

add(2)([3]);



// 基础写法
function addTogether() {
  // Function to check if a number is actually a number
  // and return undefined otherwise.
  // 检查是否是数字抽象出来成为函数
  var checkNum = function(num) {
    if (typeof num !== 'number') {
      return undefined;
    } else
      return num;
  };

  // Check if we have two parameters, check if they are numbers
  // handle the case where one is not
  // returns the addition.
  // 参数为两个的情况
  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } 
  // 参数为一个的情况
  else {
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    var c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    // instead of undefined.
    if (checkNum(c)) {
      // Return function that expect a second argument.
      return function(arg2) {
        // Check for non-numbers
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          // if numbers then add them.
          return c + arg2;
        }
      };
    }
  }
}

// test here
addTogether(2,3);

// 中级写法
function addTogether() {
  // 先转数组
  var args = new Array(arguments.length);
  //Storing the arguments in an array
  for(var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }
 //Check for the arguments length
 // 长度为2的情况
 if(args.length == 2){
    //If there are two arguments,check for the type of both arguments
    //Use typeof to check the type of the argument(both should be numbers)
    if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){
      return undefined;
      }
    return args[0]+args[1];
   }
 //When only one argument is provided
 // 长度为1的情况
 if(args.length == 1){
     a= args[0];
     //Check the  argument using typeof 
    if(typeof a!=='number'){
        return undefined;
      }
    else{
       //Making use of closures 
       return function(b){
       //Checking the second argument 
         if(typeof b !=='number'){
           return undefined;
           }
         else
           return a+b;
          };
      }
    }
}

// test here
addTogether(2,3);

// 高级写法
//jshint esversion: 6
function addTogether() {
  // 先转数组
  var args = Array.from(arguments);
  //ES6特性 some
  return args.some(n => typeof n !== 'number') ? 
    //不是数字返回undefined
    undefined: 
    //长度>1的情况
    args.length > 1 ?
      args.reduce((acc, n) => acc += n, 0)
      //长度为1的情况
      :
      (n) => typeof n === "number" ? 
        n + args[0]:
        undefined;
}

// test here
addTogether(2,3);