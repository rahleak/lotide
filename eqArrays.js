const eqArrays = function(actual, expected) {
  correctArr = [];

  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++){
      if (actual[i] === expected[i]) {
        correctArr.push(actual[i])
      }
    }
    } if (correctArr.length === actual.length) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Asserstion Failed: ${actual} !== ${expected}`);
  }

};

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
