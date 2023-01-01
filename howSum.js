howSum = (targetNum, numbers, memo = {}) => {
   if(targetNum in memo) return memo[targetNum]
   if(targetNum === 0) return [];
   if(targetNum < 0) return null;

   for(let num of numbers) {
      const remainder = targetNum - num;
      const remainderResult = howSum(remainder,numbers,memo);
      if(remainderResult !== null ) {
         
         memo[targetNum] = [...remainderResult,num];
         return memo[targetNum]
      }
   }
   memo[targetNum] = null
   return null;
}

console.log(howSum(8,[6,3,5]))