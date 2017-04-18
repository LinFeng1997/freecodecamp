function sumPrimes(num) {
    var arr = [];
    var numSum = 0;
    for (var i = 2; i <= num; i++) {
        numSum += i;
    }
    console.log(numSum);
    if (num >= 2) {
        // arr.push(2);
        //从3开始遍历
        for (var i = 3; i <= num; i++) {
            //fiter可以代替吗？,判断是不是素数
            for (var j = 2; j < i; j++) {
                if (i % j === 0) {
                    arr.push(i);
                    break;
                }
            }
        }
        // for (var j = 0; j < arr.length; j++) {
        //     // 判断是不是素数，除以素数就是了
        //     if (i % arr[j] === 0) {
        //         arr.push(i);
        //         // break;
        //     }
        //     console.log(i + "%" + arr[j] + ":" + i % arr[j]);
        // }
        return numSum - arr.reduce(function(a, b) {
            return a + b;
        });
    } else {
        return num;
    }

}

sumPrimes(977);


//3 除2看余数
//4 除2 3看余数
//5 除2 3 看余数
//...
//10 2+3+5+7=17 1+4+6+8+9 =28

// 基础写法
function sumPrimes(num) {
  var res = 0;

  // 找素数
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      //这是个标志位
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        //i=2 -> j=4 j<10 j=4+2=6+2=8+2=10 2的倍数
        //i=3 -> j=6 j<10 j=6+3=9 3的倍数
        for (j = i << 1; j <= max; j += i) {
          //合数索引都置1
          sieve[j] = true;
        }
      }
    }

    return primes;
  }

  // Add the primes
  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }

  return res;
}

// test here
sumPrimes(10);

//中级写法
function sumPrimes(num) {
  // function to check if the number presented is prime
  function isPrime(number){
      for (i = 2; i <= number; i++){
          if(number % i === 0 && number!= i){
          // return true if it is divisible by any number that is not itself.
             return false;
          }
       }
       // if it passes the for loops conditions it is a prime
      return true;
  }

  // 1 is not a prime, so return nothing, also stops the recursive calls.
  if (num === 1){
    return 0;
  }
  // Check if your number is not prime
  // 倒着推合数，不是素数->下一个 
  if(isPrime(num) === false){
  // for non primes check the next number down from your maximum number, do not add anything to your answer
    return sumPrimes(num - 1);
  }

  // Check if your number is prime
  // 是素数，加上
  if(isPrime(num) === true){
  // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
    return num + sumPrimes(num - 1);
  }
}
// test here
sumPrimes(10);