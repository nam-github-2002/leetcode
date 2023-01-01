var reverseList = function(head) {
   let [prev, current] = [null, head]
   while(current) {
      [current.next,current,prev] = [prev, current.next,current]
   }
   return prev
}
