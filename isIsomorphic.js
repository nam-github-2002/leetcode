const isIsomorphic = function(s, t) {
   const obj1 = {}
   const obj2 = {}
   for(let i = 0; i < s.length; i++){

      if(obj1[s[i]] !== obj2[t[i]]) return false
      
      obj1[s[i]] = i
      obj2[t[i]] = i      
   }
   return true
};

console.log(isIsomorphic('abccdef','abvvvcf'))