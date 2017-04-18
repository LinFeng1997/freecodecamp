// 画流程图的重要性！！！！！！
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUp(firstName, prop){
// Only change code below this line
  for (var i = 0; i < contacts.length; i++) {
        // 要找到了联系人再进这个循环！
        if (contacts[i].firstName == firstName) {
            // 找它的具体属性
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
// Only change code above this line
}

// Change these values to test your function
lookUp("Akira", "likes");
lookUp("Kristian", "lastName");
lookUp("Harry","likes");
lookUp("Harry","likes");
lookUp("Akira", "address");

