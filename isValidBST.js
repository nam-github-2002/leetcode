var isValidBST = function(root, min=null, max=null) {
   if (!root) return true;
   if (min && root.val <= min.val) return false;
   if (max && root.val >= max.val) return false;
   return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};

class Node {
   constructor(val,left,right) {
      this.val = val
      this.left = left
      this.right = right
   }
}
let a = new Node(10)
let b = new Node(5)
let c = new Node(15)
let d = new Node(3)
let e = new Node(7)
let f = new Node(12)
let g = new Node(16)
let h = new Node(1)

a.left = b         
a.right = c        
b.left = d
b.right = e
c.left = f
c.right = g
d.left = h  
//             a
//           /   \
//          b     c
//         / \   / \
//        d   e  f  g
//       /
//       h

console.log(isValidBST(a));
