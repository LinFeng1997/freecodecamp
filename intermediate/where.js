//首先看集合里有没有src的键值对
//有的话返回相关整个对象

function where(collection, source) {
    var arr = [];
    var name = Object.keys(source);
    // What's in a name?
    collection.forEach(function(e) {
        // 这一块写个函数？判断键值对相等咯？
        var flag = true;
        name.forEach(function(ne) {
            console.log("ne" + ne + " " + e.hasOwnProperty(ne));
            if (!e.hasOwnProperty(ne)) {
                flag = false;
            } else {
                if (e[ne] !== source[ne]) {
                    flag = false;
                }
            }
        });
        // 符合条件的推入
        if (flag) {
            arr.push(e);
        }
    }); 
    return arr;
}

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

//基础写法
function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source);

    // 它用的是过滤
    return collection.filter(function(obj) {
        for (var i = 0; i < srcKeys.length; i++) {
            if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
                return false;
            }
        }
        return true;
    });
}

// test here
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// 中级写法
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  return collection.filter(function (obj) {
    //every也可以，every() 方法测试数组的所有元素是否都通过了指定函数的测试。forEach() 方法对数组的每个元素执行一次提供的函数(回调函数)。
    return srcKeys.forEach(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// test here
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//高级写法
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    return srcKeys.reduce(function (res, key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    }, false);
  });
}

// test here
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });