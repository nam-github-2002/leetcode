var maxProfit = (prices) => {
   if(prices.length < 2) return 0
   let min = 0
   let max = 1
   let result = 0
   let numDay = prices.length
   while(max < numDay) {
      if(prices[max] <= prices[min]) {
         min = max
      } else {
         let currentResult = prices[max] - prices[min]

         result = Math.max(currentResult,result)
      }

      max++
   }
   return result
}

let days = [3,5,1,20,14,8,9,23]
console.log(maxProfit(days));

