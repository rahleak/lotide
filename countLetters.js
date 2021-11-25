const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Asserstion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function (phrase) {
    phrase = phrase.split(' ').join('').toLowerCase();
    let alphabet = {
      "a": 0,
      "b": 0,
      "c": 0,
      "d": 0,
      "e": 0,
      "f": 0,
      "g": 0,
      "h": 0,
      "i": 0,
      "j": 0,
      "k": 0,
      "l": 0,
      "m": 0,
      "n": 0,
      "o": 0,
      "p": 0,
      "q": 0,
      "r": 0,
      "s": 0,
      "t": 0,
      "u": 0,
      "v": 0,
      "w": 0,
      "x": 0,
      "y": 0,
      "z": 0,
    };
    for (let i in alphabet) {
      for (let k = 0; k < phrase.length + 1; k++) {
        if (phrase[k] === i) {
          alphabet[i] += 1;
        }
      }
    }
    for (let i in alphabet) {
      if (alphabet[i] === 0) {
        delete alphabet[i];
      }
    }
    return alphabet;
  }

