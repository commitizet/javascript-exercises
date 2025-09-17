const convertToCelsius = function(num) {
  // C = 5/9(F-32)
  let celsius = 5/9 * (num - 32);
  return (Number.isInteger(celsius)) ? celsius : +celsius.toFixed(1);
};

const convertToFahrenheit = function(num) {
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
