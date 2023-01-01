var pascalTriangle = function(rowIndex) {
   var array = []
   for(let i = 0; i <= rowIndex; i++) {
      array[i] = []
      array[i][0] = 1;
      for(let j = 1; j < i; j++) {
         array[i][j] = array[i-1][j-1] + array[i-1][j];
      }
      array[i][i] = 1;
   }
   return array[rowIndex]
}


console.log(pascalTriangle(4))