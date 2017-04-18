var Person = function(firstAndLast) {
    this.getFirstName = function() {
        return firstAndLast.split(" ")[0];
    };
    this.getLastName = function() {
        return firstAndLast.split(" ")[1];
    };
    this.getFullName = function() {
        return firstAndLast;
    };
    this.setFirstName = function(str) {
        firstAndLast = str + " " + firstAndLast.split(" ")[1];
    };
    this.setLastName = function(str) {
        firstAndLast = firstAndLast.split(" ")[0] + " " + str;
    };
    this.setFullName = function(str) {
        firstAndLast = str;
    };
    return;
};

var bob = new Person('Bob Ross');
bob.getFullName();

// 基础写法
var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();