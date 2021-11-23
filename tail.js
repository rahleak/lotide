const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Asserstion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(arr) {
  let final = [];

  for (let i = 1; i < arr.length; i++) {
    final.push(arr[i]);
  }
  return final;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!