var levelOrder = function(root) {
   let queue = [root], ans = []
   while (queue[0]) {
       let queueLen = queue.length, row = []
       for (let i = 0; i < queueLen; i++) {
           let current = queue.shift()
           row.push(current.val)
           if (current.left) queue.push(current.left)
           if (current.right) queue.push(current.right)
       }
       ans.push(row)            
   }
   return ans
};
class Node {
   constructor(val,left,right) {
      this.val = val
      this.left = left
      this.right = right
   }
}

let a = new Node('a')
let b = new Node('b')
let c = new Node('c')
let d = new Node('d')
let e = new Node('e')
let f = new Node('f')
let g = new Node('g')
let h = new Node('h')

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g
d.left = h

console.log(levelOrder(a));