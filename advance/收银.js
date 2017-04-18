// 要用对象？
// 第一步:算找钱的总额 例：100-3.26 = 96.74
// 第二步:确定找钱范围 例：96.74在20-100之间，应该从20的找起
// 第三步:看找不找得了，如果收银台够则找够这个面额的，不然跳到下一个面额的 例:96.74-20*3=36.74 找10块的
// 以此类推 36.74-20=16.74 16.74-15=1.74 1.74-1=0.74 0.74-0.25*2=0.24 0.24-0.1*2=0.04 0.04-0.01*4=0
function checkCashRegister(price, cash, cid) {
    var change = cash - price,
        flag = "",
        over = 0,
        arr = [],
        sum = 0;
    for (var i = 0; i < cid.length ; i++) {
        sum += cid[i][1];
    }
    if(sum === change) {
        return "Closed";
    }
    if (change > 0) {
        if (change < 0.05) {
            flag = "PENNY";
        } else if (change >= 0.05 && change < 0.1) {
            flag = "NICKEL";
        } else if (change >= 0.1 && change < 0.25) {
            flag = "DIME";
        } else if (change >= 0.25 && change < 1) {
            flag = "QUARTER";
        } else if (change >= 1 && change < 5) {
            flag = "ONE";
        } else if (change >= 5 && change < 10) {
            flag = "FIVE";
        } else if (change >= 10 && change < 20) {
            flag = "TEN";
        } else if (change >= 20 && change < 100) {
            flag = "TWENTY";
        } else {
            flag = "HUNDRED";
        }
    }

    function charge(flag) {
        switch (flag) {
            case "PENNY":
                arr.push(cid[0]);
                change = change.toFixed(2);
                if (cid[0][1] > change) {
                    over = Math.floor(change / 0.01) * 0.01;
                    arr[arr.length - 1][1] = over;
                } else {
                    over = cid[0][1];
                    arr[arr.length - 1][1] = over;
                }
                if(over===0) {
                    arr.pop();
                }
                change = change - over;
                break;
            case "NICKEL":
                arr.push(cid[1]);
                if (cid[1][1] > change) {
                    over = Math.floor(change / 0.05) * 0.05;
                    arr[arr.length - 1][1] = over;
                } else {
                    over = cid[1][1];
                    arr[arr.length - 1][1] = over;
                }
                if(over===0) {
                    arr.pop();
                }
                change = change - over;
                charge("PENNY");
                break;
            case "DIME":
                arr.push(cid[2]);
                if (cid[2][1] > change) {
                    over = Math.floor(change / 0.1) * 0.1;
                    arr[arr.length - 1][1] = over;
                } else {
                    over = cid[2][1];
                    arr[arr.length - 1][1] = over;
                }
                if(over===0) {
                    arr.pop();
                }
                change = change - over;
                charge("NICKEL");
                break;
            case "QUARTER":
                arr.push(cid[3]);
                if (cid[3][1] > change) {
                    over = Math.floor(change / 0.25) * 0.25;
                    arr[arr.length - 1][1] = over;
                } else {
                    over = cid[3][1];
                    arr[arr.length - 1][1] = over;
                }
                if(over===0) {
                    arr.pop();
                }
                change = change - over;
                charge("DIME");
                break;
            case "ONE":
                arr.push(cid[4]);
                if (cid[4][1] > change) {
                    over = Math.floor(change / 1) * 1;
                    arr[arr.length - 1][1] = over;
                } else {
                    over = cid[4][1];
                    arr[arr.length - 1][1] = over;
                }
                if(over===0) {
                    arr.pop();
                }
                change = change - over;
                charge("QUARTER");
                break;
            case "FIVE":
                arr.push(cid[5]);
                log("5块时" + change);
                if (cid[5][1] > change) {
                    over = Math.floor(change / 5) * 5;
                    arr[arr.length - 1][1] = over;
                } else {
                    over = cid[5][1];
                    arr[arr.length - 1][1] = over;
                }
                if(over===0) {
                    arr.pop();
                }
                change = change - over;
                charge("ONE");
                break;
            case "TEN":
                arr.push(cid[6]);
                log("10块时" + change);
                if (cid[6][1] > change) {
                    over = Math.floor(change / 10) * 10;
                    arr[arr.length - 1][1] = over;
                } else {
                    over = cid[6][1];
                    arr[arr.length - 1][1] = cid[6][1];
                }
                if(over===0) {
                    arr.pop();
                }
                change = change - over;
                charge("FIVE");
                break;
            case "TWENTY":
                arr.push(cid[7]);
                if (cid[7][1] > change) {
                    over = Math.floor(change / 20) * 2;
                    arr[arr.length - 1][1] = over;
                } else {
                    over = cid[7][1];
                    arr[arr.length - 1][1] = over;
                }
                if(over===0) {
                    arr.pop();
                }
                change = change - over;
                charge("TEN");
                break;
            case "HUNDRED":
                arr.push(cid[8]);
                if (cid[8][1] > change) {
                    over = Math.floor(change / 100) * 100;
                    arr[arr.length - 1][1] = over;
                } else {
                    over = cid[8][1];
                    arr[arr.length - 1][1] = over;
                }
                if(over===0) {
                    arr.pop();
                }
                change = change - over;
                charge("TWENTY");
                break;
            default:
                // code...
                break;
        }
    }
    charge(flag);
    // Here is your change, ma'am.
    if (change > 0.01) {
        return "Insufficient Funds";
    }
    return arr;
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

function log(a) {
    console.log(a);
}

// 参考写法
// 用对象
// Create an object which hold the denominations and their values
// 钱名称与钱数对应的键值对
var denom = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  //先把不够和找完的情况搞出来
  // Transform CID array into drawer object
  var register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});

  // Handle exact change
  if (register.total === change) {
    return 'Closed';
  }

  // Handle obvious insufficent funds
  if (register.total < change) {
    return 'Insufficient Funds';
  }

  // Loop through the denomination array
  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change reminaing
    // 找的开,一张一张的找
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
        acc.push([ curr.name, value ]);
    }
    return acc; // Return the current Change Array
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    return "Insufficient Funds";
  }

  // Here is your change, ma'am.
  return change_arr;
}

// test here
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);