const words = ["ground", "control", "to", "major", "tom"];


const assertArraysEqual = function (arrOne, arrTwo) {
  correctArr = [];

  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++){
      if (arrOne[i] === arrTwo[i]) {
        correctArr.push(arrOne[i])
      }
    }
    } if (correctArr.length === arrOne.length) {
    console.log(`✅✅✅Arrays match: ${arrOne} === ${arrTwo}`)
  } else {
    console.log(`🛑🛑🛑Arrays do not match: ${arrOne} !== ${arrTwo}`)
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

const results1 = map(words, word => word[0]);
console.log(results1);

const map = function() {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}