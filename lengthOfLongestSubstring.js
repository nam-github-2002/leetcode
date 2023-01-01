var lengthOfLongestSubstring = string => {
   const char = {}
   let left = 0
   
   return Array.from(string).reduce((result, key, right) => {
       left = char[key] >= left ? char[key] + 1 : left
       char[key] = right
       return Math.max(result, right - left + 1)
   },0)
}

let str = 'abcdefg'
console.log(lengthOfLongestSubstring(str));