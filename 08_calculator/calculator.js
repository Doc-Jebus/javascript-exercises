const add = function(num1, num2) {
	console.log(num1, num2);
  let result;
  result = num1 + num2;
  console.log(result);
  return result;
  
};

const subtract = function(num1, num2) {
	console.log(num1, num2);
  let result;
  result = num1 - num2;
  console.log(result);
  return result;
};

const sum = function(arr) {
	let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(arr);
  console.log(sum);
  return sum;
};

const multiply = function(arr) {
  let result;
  for (let i = 0; i < arr.length; i++) {
  
  result = arr.map(x => x * arr[i].length);
  
  };
  console.log(arr);
  console.log(result);
  return result;
};

const power = function() {
	
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
