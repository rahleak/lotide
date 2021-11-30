const assertArraysEqual = function (actual, expected, eqFunc) {
  
  if (eqFunc(actual, expected)) {
    console.log(`✅✅✅Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑Asserstion Failed`);
  }
}

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

const middle = function(arr) {
  midNums = []

  if (arr.length === 1 || arr.length === 2){
    return midNums;
  }

  if (arr.length % 2 !== 0){
    midNums = arr[(arr.length - 1) / 2];
  } else {
    midNums.push(arr[arr.length / 2 - 1], arr[arr.length / 2])
  }

  return midNums;
}

middle([1])
middle([1, 2])

middle([1, 2, 3])
middle([1, 2, 3, 4, 5])

middle([1, 2, 3, 4])
middle([1, 2, 3, 4, 5, 6])