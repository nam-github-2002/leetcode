var search = (nums, target) => {
   let left = 0
   let right = nums.length - 1
   while(left <= right) {
      let mid = Math.floor((right + left)/2)
      if(nums[mid] === target) return mid
      
      if(nums[mid] > target) {
         right = mid - 1
      } else {
         left = mid + 1
      }
   }
   return -1
}
let array = [-1,0,3,5,9,12,14,15,16,34,56,57,68,89,122,153,214,235,543]
let array1 = [5]
console.log(search(array,89));