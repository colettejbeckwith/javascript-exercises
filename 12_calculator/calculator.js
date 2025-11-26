const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total = total * array[i];
  }
  return total;
};

const power = function(base, exponent) {
	
  let total = 1;

  for (let i = 0; i < exponent; i++) {
    total = total * base;
  }

  return total;
};

const factorial = function(x) {
	let i = x;
  let total = 1;
  
  while (i > 0) {
    total = total * i;
    i--;
  }

  return total;
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
