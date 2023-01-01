var pivotIndex = function(array) {
   let len = array.length
   if(len == 0) return -1

   let left = []
   let right = []

   left[0] = array[0]
   right[len - 1] = array[len-1]
   console.log('right',right[0])
   for(let i = 1; i < len; i++) {
      left[i] = array[i] + left[i-1]
      right[len-i-1] = array[len - i -1] + right[len-i]
   } 
   
   for(let i = 0; i < len; i++) {
      if(left[i] == right[i]) return i
   }

   return -1
}

console.log(pivotIndex([1,7,3,6,5,6]))