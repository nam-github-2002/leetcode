var findMedianSortedArrays = function(nums1, nums2) {
   const a = []

   while(nums1.length && nums2.length) {
       if(nums1[0] >= nums2[0]) {
           a.push(nums2.shift());
       } else {
           a.push(nums1.shift());
       }
   }
   let b = [...a, ...nums1, ...nums2]
   let len = b.length
   let mid = Math.floor(len/2)
   if(len % 2 !== 0) {
       return b[mid]
   }else return (b[mid] + b[mid - 1])/2
};
nums1 = [1,2], nums2 = [3,4]
console.log(findMedianSortedArrays(nums1,nums2));
