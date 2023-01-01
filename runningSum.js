var runningSum = function(array) {
      let resultArray = []
      resultArray[0] = array[0];
      for(let i = 1; i < array.length; i++) {
         resultArray.push(resultArray[i-1] + array[i])
      }
      return resultArray
}

var runningSum2 = function(array) {
  for(let i = 1; i < array.length; i++) {
      array[i] = array[i-1] + array[i]
  }
  return array
}

console.log(runningSum2([1,2,3,4,5,6,7,8]))