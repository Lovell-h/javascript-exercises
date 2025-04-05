const convertToCelsius = function(temp) {
  let results = Math.round(((temp-32)/1.8)*10)/10;
  return results;
};

const convertToFahrenheit = function(temp) {
  
  let results = Math.round(((temp * 1.8)+32)*10)/10;
  return results;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
