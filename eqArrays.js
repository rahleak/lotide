const assertEqual = require('./assertEqual');

const eqArrays = function(actual, expected) {
  correctArr = [];

  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++){
      if (actual[i] === expected[i]) {
        correctArr.push(actual[i])
      }
    }
    } if (correctArr.length === actual.length) {
    return true;
  } else {
    return false;
  }

};

module.exports = eqArrays;


assertEqual(eqArrays([5, 2, 3], [1, 2, 3]), false); // => should PASS