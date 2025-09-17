const palindromes = function (str) {
    const lowerStr = str.toLowerCase();
    const arrStr = lowerStr.split('');
    const filteredArr = arrStr.filter(el => el.match(/[a-z0-9]/));
    const cleanedStr = filteredArr.join('');
    const reversedStr = filteredArr.reverse().join('');
    return (cleanedStr === reversedStr) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
