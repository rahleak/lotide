const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Asserstion Failed: ${actual} !== ${expected}`);
  }

};

const head = function(arr){
  return arr[0]
}

assertEqual(head([9, 6, 5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");