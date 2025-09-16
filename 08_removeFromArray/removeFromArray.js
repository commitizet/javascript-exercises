let removeFromArray = function(arr, ...num) {
    return arr.filter(el => !num.includes(el));
};

// Do not edit below this line
module.exports = removeFromArray;
