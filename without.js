
const without = function (source, itemsToRemove) {
finalArr = []

for (j = 0; j < source.length; j++){
  finalArr.push(source[j])
}

  for (i = 0; i < finalArr.length; i++){
    for (k = 0; k < itemsToRemove.length; k++){
      if (finalArr[i] === itemsToRemove[k]){
        finalArr.splice(k, 1)
      }
    }
  }
  return finalArr;
}

without([1, 2, 3], [1])
without(["1", "2", "3"], [1, 2, "3"])