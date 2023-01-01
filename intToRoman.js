var intToRoman = (number) => {
   if(number == 0) return
   let int = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
   let roman = ['M',"CM",'D','CD','C','XC','L','XL','X','IX','V','IV','I']
   let result = ""

   let i = 0
   while(number > 0) {
      while(number / int[i] >= 1) {
         result += roman[i]
         number -= int[i]
      }
      ++i
   }
   return result
}
function intToRoman2(num) {
   const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
   let result = '';
   Object.entries(map).forEach(([letter, n]) => {
       result += letter.repeat(Math.floor(num / n));
       num %= n;
   });
   return result;
}

const input = require("prompt-sync")();

let data = input(`enter the data: `);
console.log(intToRoman2(data));
