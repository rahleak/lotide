const eqArrays = require('../eqArrays')


const assertArraysEqual = function (actual, expected, eqFunc) {
  
  if (eqFunc(actual, expected)) {
    console.log(`✅✅✅Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑Asserstion Failed`);
  }
}

module.exports = assertArraysEqual;
