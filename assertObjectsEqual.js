const eqObjects = function(object1, object2) {

  arrKey1 = Object.keys(object1);
  arrKey2 = Object.keys(object2);
  arrValue1 = Object.values(object1);
  arrValue2 = Object.values(object2);

  if (arrKey1.length !== arrKey2.length){
    return false;
  }

  for (key of arrKey1) {
    if (object1[key] !== object2[key]){
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected, eqFunc) {
  const inspect = require('util').inspect;
  if (eqFunc(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Asserstion Failed: ${actual} === ${expected}`);
  }
  console.log(`Example label: ${inspect(actual)}`);
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
