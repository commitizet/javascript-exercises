const sumAll = function(...nums) {
    if (nums.some(num => typeof num !== 'number' || num < 0 || (num+"").split('').includes('.'))) return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
