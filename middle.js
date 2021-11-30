
const eqArrays = require('../eqArrays')


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
module.exports = middle;

middle([1])
middle([1, 2])

middle([1, 2, 3])
middle([1, 2, 3, 4, 5])

middle([1, 2, 3, 4])
middle([1, 2, 3, 4, 5, 6])

middle([1])
middle([1, 2])

middle([1, 2, 3])
middle([1, 2, 3, 4, 5])

middle([1, 2, 3, 4])
middle([1, 2, 3, 4, 5, 6])
