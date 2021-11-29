
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


const assertArraysEqual = function (actual, expected, eqFunc) {
  
  if (eqFunc(actual, expected)) {
    console.log(`✅✅✅Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑Asserstion Failed`);
  }
}

