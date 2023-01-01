var countBits = function(num) {
   var arr = []
   for(let i = 0; i <= num; i++) {
      arr.push(i.toString(2).replace(/0/g, '').length)
   }

   return arr
};

 console.log(countBits(23));