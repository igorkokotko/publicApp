"use strict";

const onPow = (number) => {
  let k = 0;
  let kPow = Math.pow(4, k);
 while (number > kPow) {
 kPow = Math.pow(4, k++);
  }
  return k - 2;
};

document.getElementById("task1").innerHTML = onPow(1025);

const congruenceOfSquares = (num) => {
  const result = +((Math.sqrt(num / 2)).toFixed(2));
  return result;
};

document.getElementById("task2").innerHTML = congruenceOfSquares(162);

const allSquaredPairs = (num) => {
  const pairs = [];
  for (let i = 0; i <= Math.sqrt(num / 2); i++) {
    const j = Math.sqrt(num - i * i);
    if (j % 1 == 0) {
      pairs.push([j, i]);
    }
  }
  return pairs;
};

document.getElementById("task3").innerHTML = allSquaredPairs(25);
