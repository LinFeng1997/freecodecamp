function pairwise(arr, arg) {
    var sum = 0;
    arr.forEach(function(e, index) {
    	var dif = arg - e;
        //还要设个标志位,如果结过婚了就跳过（设置为null怎么样？设置成NaN）
        if (arr.indexOf(dif) !== -1 && arr[index] && arr.indexOf(arg - e) !== index) {
            console.log("第" + index + "位" + "和第" + arr.indexOf(dif) + "位元素喜结连理," + "他们分别是" + e + "和" + arr[[arr.indexOf(arg - e)]]);
            sum += index + arr.indexOf(dif);
            arr[index] = NaN;
            arr[arr.indexOf(dif)] = NaN;
        }
    });
    return sum;
}

pairwise([0, 0, 0, 0, 1, 1], 1);

// 基础写法
function pairwise(arr, arg) {
 // Set sum of indices to zero
 var sum = 0;
 // make a local copy of the arguments object so we don't modify it directly
 var pairArr = arr.slice();
 // looping from first element
 for(i = 0; i < pairArr.length; i++) {
   //Looping from second element by setting first element  constant
   for(j = i + 1; j < pairArr.length; j++) {
     // Check whether the sum is equal to arg
     if(pairArr[i] + pairArr[j] == arg) {
       //Add the indices
       sum += i + j;
       //Set the indices to NaN so that they can't be used in next iteration
       pairArr[i] = pairArr[j] = NaN;
     }
   }
 }
 return sum;
}

// test here
pairwise([1,4,2,3,0,5], 7);


// 中级写法
function pairwise(arr, arg) {
  // Create empty array to keep the arrays we will add.
  var index = [];

  // Loop to check the first number.
  for (var a in arr) {
    // temporal first number.
    var temp = arr[a];

    // Second loop to check against the first number.
    for (var i = 1; i < arr.length; i++) {
      // temporal second number.
      var temp2 = arr[i];

      // Key element, this check to make sure that the numbers add to arg
      // also that the second index is greater than the first, and that neither
      // of those indices are already on the array.
      if (temp + temp2 === arg && i > a && index.indexOf(+a) === -1 && index.indexOf(+i) === -1) {
        // if true then add both indices as integers then stop checking to avoid repeats.
        index.push(+a, +i);
        break;
      }
    }
  }

  // After the two loops are done, check if index is empty to return 0
  // or if it is not, then use Array.reduce(callbackFunc) to return the sum
  // of the numbers.
  if (index.length >= 1) {
    var addAll = function(a, b) {
      return a + b;
    };

    return index.reduce(addAll);
  } else
      return 0;
}

// test here
pairwise([1,4,2,3,0,5], 7);


// 高级写法
function pairwise(arr, arg) {
  // search array for elements that when paired, equal the second argument, then sum their indices
  // make a local copy of the arguments object so we don't modify it directly
  var pairArr = arr.slice();
  return pairArr.reduce( function (a,b,index){ // use native reduce to collect running total of summed indices
      var search = arg - b; // get difference of current item so we know what value will sum to arg

      // check if search value in rest of the array, but also make sure it doesn't match current search index
      if ( pairArr.indexOf(search) != -1 && pairArr.indexOf(search) != index ){ 
         var total = index + pairArr.indexOf(search);  // if found, add to the runnning total
         pairArr.splice(index,1,NaN); // remove current index from the array
         pairArr.splice(pairArr.indexOf(search),1,NaN); // remove the other matched element from the array
         return a + total; //return the running total back to reduce for next item
      }
      return a; // simply return previous total if no operations needed
  },0);

}

// test here
pairwise([1,4,2,3,0,5], 7);





