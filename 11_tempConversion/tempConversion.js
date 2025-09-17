const convertToCelsius = function(num) {
  // C = 5/9(F-32)
  let celsius = 5/9 * (num - 32);
  return (Number.isInteger(celsius)) ? celsius : +celsius.toFixed(1);
};

const convertToFahrenheit = function(num) {
  // F = (9/5 * C) + 32
  let fahrenheit = (9/5 * num) + 32;
  return (Number.isInteger(fahrenheit)) ? fahrenheit : +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
