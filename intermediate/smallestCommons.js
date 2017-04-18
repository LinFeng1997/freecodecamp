function smallestCommons(arr) {
    var sum = 2;
    var g = 0;
    for (var i = 3; i <= Math.max.apply(null, arr); i++) {
        g = gys(sum, i);
        sum *= i;
        sum /= g;
        console.log("sum2: " + sum);
    }
    return sum;
}
smallestCommons([1, 6]);
// 以13为例
//gys(2,3)=1 2*3=6
//gys(6,4)=2 2*3*4/2=12
//gys(12,5)=1 12*5 = 60
//gys(60,6)=6 60
//gys(60,7)=1 60*7=420
//gys(420,8)=4 420*8/4 = 840
function gys(a, b) {
    for (var i = 0; i <= Math.min(a, b); i++) {
        if (Math.max(a, b) % i === 0 && Math.min(a, b) % i === 0) {
            var gys = i;
        }
    }
    return gys;
}



// 基础写法
function smallestCommons(arr) {
    // Sort array from greater to lowest
    // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
    arr.sort(function(a, b) {
        return b - a;
    });

    // Create new array and add all values from greater to smaller from the
    // original array.
    var newArr = [];
    for (var i = arr[0]; i >= arr[1]; i--) {
        newArr.push(i);
    }

    // Variables needed declared outside the loops.
    var quot = 0;
    var loop = 1;
    var n;

    // Run code while n is not the same as the array length.
    do {
        quot = newArr[0] * loop * newArr[1];
        for (n = 2; n < newArr.length; n++) {
            if (quot % newArr[n] !== 0) {
                break;
            }
        }

        loop++;
    } while (n !== newArr.length);

    return quot;
}

// test here
smallestCommons([1, 5]);

// 中级写法
function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    // can use reduce() in place of this block
    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
    }
    return lcm;
    // 公因数函数
    function gcd(x, y) {    // Implements the Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

// test here
smallestCommons([1,5]);

//高级写法
function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }
    //用reduce
    return range.reduce(function(previousValue, currentValue) {
    var gcdPrevCurr = gcd(previousValue, currentValue);
    return (previousValue * currentValue) / gcdPrevCurr;
    });

    function gcd(x, y) {    // Implements The Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

// test here
smallestCommons([1,5]);