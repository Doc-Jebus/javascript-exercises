const add = function(num1, num2) {
  return num1 + num2;
  
};

const subtract = function(num1, num2) {
  
  return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total * item);
  
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
