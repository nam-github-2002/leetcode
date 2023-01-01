var solution = function(isBadVersion) {
  
   return (n) => {
      let left = 1
      let right = n
      while(left <= right) {
         let mid = Math.floor((left + right)/2)
         if(isBadVersion(mid)) {
            right = mid - 1
         }else {
            left = mid + 1
         }
      }
      return right
   };
};