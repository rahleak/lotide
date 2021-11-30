const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let final = [];

  for (let i = 1; i < arr.length; i++) {
    final.push(arr[i]);
  }
  return final;
};

