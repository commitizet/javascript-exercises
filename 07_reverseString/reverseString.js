const reverseString = function(string) {
    let result = '';
    let arr = [...string];
    let range = arr.length - 1;
    for (let i = range; i >= 0; i--){
        result += arr[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;