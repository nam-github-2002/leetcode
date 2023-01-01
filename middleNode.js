var middleNode = (head) =>  {
   if(head == null ) return;
   let current = head
   let lengthLink = 0
   while(current !== null) {
      ++lengthLink;
      current = current.next
   }
   let node = head
    middle = Math.floor(lengthLink/2-1)
   while(middle !==0) {
      node = node.next
      --middle
   }
   
   return node.next
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
i.next = k
let list = new LinkedList(a)
console.log(middleNode1(a));