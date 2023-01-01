
var countChar = (str) => {    
   let len = str.length
   let count = new Array(256);
   count.fill(0);
		
   for (let i = 0; i < len; i++){
      count[str[i].charCodeAt()]++;
   }
			
   for (let i = 0; i < 256; i++)
   {
      if(count[i] > 1 && String.fromCharCode(i) !== ' ')
      {
         console.log(String.fromCharCode(i) + ", " +
         "count = " + count[i]);
      }
   }	
}


let string = 'abcdefff'
console.log(countChar(string));
