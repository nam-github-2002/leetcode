const isSubsequence1 = (s,t) => {
   if(s.length > t.length) return false;

   const tLen = t.length;
   let subLen = 0;
   for(let i = 0; i < tLen; i++) {
      if(s[subLen] === t[i])  {
         subLen++;
      };
   }

   return subLen === s.length
}


console.log(isSubsequence1("abc",'asdffdsbc'))