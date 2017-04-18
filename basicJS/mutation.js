// 配对字符串
function mutation(arr) {
    var result;
    for (var i = 0; i < arr[1].length; i++) {
        result = arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) != -1;
        if (result === false) {
            return result;
        }
    }

    return result;
}

mutation(["hello", "hey"]);
