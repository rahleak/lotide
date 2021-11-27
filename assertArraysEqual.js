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

assertArraysEqual([1, 2, 3], [1, 2, 3, 4])