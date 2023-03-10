function detectCycle(head){
   if(!head || !head.next) return null
   
   slow = head
   fast = head

   while(fast && fast.next && fast.next.next) {
      slow = slow.next
      fast = fast.next.next

      if(fast == slow) {
         slow = head
         index = 0
         while(slow != fast) {
            ++index
            slow = slow.next
            fast = fast.next
         }
         return fast
      }
   }
   return null
} 

class Node {
   constructor(val) {
      this.val = val
      this.next = null
   }
}

class LinkedList {
   constructor(head) {
      this.head = head
   }
}

let a = new Node(1)
let b = new Node(2)
let c = new Node(3)
let d = new Node(4)
let e = new Node(5)
let f = new Node(6)
let g = new Node(7)
let h = new Node(8)
let i = new Node(9)
let k = new Node(10)

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
f.next = g
g.next = h
h.next = i
i.next = e

console.log(detectCycle(a));