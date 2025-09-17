const fibonacci = function(num) {
    let n = +num;
    if (n < 0) return "OOPS";
    if (n === 0) return 0;

    let x = 0;
    let y = 1;
    let z;
    for (let i = 1; i <= (n - 1); i++){
        z = x + y;
        x = y;
        y = z;
    }
    
    return y;
};

// Do not edit below this line
module.exports = fibonacci;