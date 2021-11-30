const assertEqual = require('./assertEqual');

const head = function(arr){
  return arr[0]
}

assertEqual(head([9, 6, 5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");